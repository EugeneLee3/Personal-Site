import sys

# Uses yahoo finance api
import yfinance as yf    

#
import pandas as pd
import numpy as np

from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_score

import matplotlib.pyplot as plt
plt.style.use('bmh')



# Loading and saving the data
data = yf.Ticker(sys.argv[1])   # using AAPL as test case
data_hist = data.history(period="max")
data_index = data_hist.index


# Plotting data
# print(data_hist)    # used to show all labels that come with price data over time
# plt.plot(data_hist["Close"])    # using the closing prices to plot our graph
# plt.show()


# Setting up our target for our ML model
data_hist["Tmrw"] = data_hist["Close"].shift(-1)
data_hist["Target"] = (data_hist["Tmrw"] > data_hist["Close"]).astype(int)
# data_hist = data_hist.loc["1990-01-01":].copy()     # Gets rid of data before 1990 (OPTIONAL)


# Training initial model
# using a random forest classifier model helps to prevent overfitting thought it can still happen + runs fast + can pick up non-linear tendencies
model = RandomForestClassifier(n_estimators=100, min_samples_split=100, random_state=1)     # n_estimators is the number of individual decision trees we want to train 
                                                                                            # min_sample_split will help prevent overfitting; the higher the number the less 
                                                                                            # overfit but also loses accuracy
                                                                                            # setting random_state means if we run the same model twice, the randomly generated 
                                                                                            # numbers will be in a predictable sequence; want to make sure the change I did is 
                                                                                            # improving the model
train = data_hist.iloc[:-100]       # splitting data into train and test set; this is time series data so can't use cross validation (using future data to predict the past)
                                    # doing this cross validation with time series data could cause leakage
test = data_hist.iloc[-100:]

predictors = ["Close", "Volume", "Open", "High", "Low"]     # labels that we are using to train our model
model.fit(train[predictors], train["Target"])       # using the predictors to predict the target


# Measuring the model
preds = model.predict(test[predictors])
preds = pd.Series(preds, index=test.index)
acc_score = precision_score(test["Target"], preds)
print(acc_score)


# Plotting the model 
combined = pd.concat([test["Target"], preds], axis=1)   # combining target and predicted results
# plt.plot(combined)
# plt.show()


# Building a backtesting system
def predict(train, test, predictors, model):
    model.fit(train[predictors], train["Target"])
    preds = model.predict(test[predictors])
    preds = pd.Series(preds, index=test.index, name="Predictions")
    combined = pd.concat([test["Target"], preds], axis=1)   
    return combined

def backtest(data, model, predictors, start=2500, step=250):
    all_predictions = []

    for i in range(start, data.shape[0], step):
        train = data.iloc[0:i].copy()
        test = data.iloc[i:(i+step)].copy()
        predictions = predict(train, test, predictors, model)
        all_predictions.append(predictions)
    return pd.concat(all_predictions)

predictions = backtest(data_hist, model, predictors)
print(precision_score(predictions["Target"], predictions["Predictions"]))


# Adding more predictors to our model
horizons = [2,5,60,250,1000]    # rolling averages of prices of stocks
new_predict = []

for horizon in horizons:
    rolling_avg = data_hist.rolling(horizon).mean()
    
    ratio_col = f"Close_Ratio_{horizon}"
    data_hist[ratio_col] = data_hist["Close"] / rolling_avg["Close"]

    trend_col = f"Trend_{horizon}"
    data_hist[trend_col] = data_hist.shift(1).rolling(horizon).sum()["Target"]

    new_predict += [ratio_col, trend_col]

data_hist = data_hist.dropna()

# Improving our model
model = RandomForestClassifier(n_estimators=200, min_samples_split=500, random_state=1)
def predict(train, test, predictors, model):
    model.fit(train[predictors], train["Target"])
    preds = model.predict_proba(test[predictors])[:,1]
    preds[preds >=.6] = 1
    preds[preds <.6] = 0
    preds = pd.Series(preds, index=test.index, name="Predictions")
    combined = pd.concat([test["Target"], preds], axis=1)   
    return combined

predictions = backtest(data_hist, model, new_predict)
print(precision_score(predictions["Target"], predictions["Predictions"]))
print("hello world")