import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'; // Import custom CSS
import Product from './Component/Product.jsx';

const YOUR_APP_ID = "2924ba02";
const YOUR_APP_KEY = "5bddcb2069c125bfb9efe35124827718";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
    )
      .then(response => response.json())
      .then(dataReceived => setData(dataReceived.hits))
      .catch(error => console.log("Error occurred in API", error));
  };

  return (
    <div className="container mt-5">
      <center>
        <h2 className="mb-4">Food Recipe Application</h2>
        <form onSubmit={submitHandler} className="form-inline justify-content-center">
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the recipe"
              onChange={changeHandler}
              value={search}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2 ml-2">Search</button>
        </form>
        <br />
        {data.length >= 1 ? <Product data={data} /> : null}
      </center>
    </div>
  );
}

export default App;
