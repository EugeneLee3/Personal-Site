import React, {useState, useEffect} from 'react';
import Login from '../components/Login';
import Axios from 'axios';

function Admin() {
  const [listOfInfo, setListOfInfo] = useState([]);
  const [page, setPage] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getInfo").then((response) => {
      setListOfInfo(response.data);
    });
  });

  const createInfo = () => {
    Axios.post("http://localhost:3001/createInfo", {
      page, 
      desc
    }).then((response) => {
      alert("Information Added.")
    })
  }

  return (
    <div>
        {/* <Login /> */}

        <div>
          {listOfInfo.map((info) => {
            return (
              <div>
                {info.page}
              </div>
            );
          })}
        </div>

        <div>
          <input 
            type="text" 
            placeholder="page" 
            onChange={(event) => {
              setPage(event.target.value);
            }}
          />

          <input 
            type="text" 
            placeholder="description" 
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />

          <button onClick={createInfo}>Post</button>
        </div>

    </div>
  )
}

export default Admin