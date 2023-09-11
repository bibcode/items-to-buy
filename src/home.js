import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    //1 load the data from the json file itself, google how to import json data in react
    //hime import 
 
  setItem(myData);
  },[]);
  return (
    <div className="content">
      {items && <ItemList items={items} title="All items" />}
    </div>
  );
};

export default Home;
