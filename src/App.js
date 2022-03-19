
import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import {v4 as uuidv4} from "uuid";
import Detail from "./components/Details";

const App = () => {
  const [query, setQuery] = useState("");
  const [code, setCode] = useState([]);

  const url = `https://uk.api.just-eat.io/restaurants/bypostcode/${query}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      console.log(result.data);
      console.log(result.data.Restaurants);
      setCode(result.data.Restaurants);
      setQuery("");
    }
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return(
    <div className="App">
      <header className="App-header">
          <h1> Just Eat Search</h1>
      </header>
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Search Postcode" autoComplete="off" onChange={onChange} value={query}/>
        <input type="submit" value="search"/>
      </form>
      <div className="Details">
        {code!==[] && code.map(detail => <Detail key={uuidv4()} detail={detail}/>)}
      </div>

    </div>
  )

}

export default App;
