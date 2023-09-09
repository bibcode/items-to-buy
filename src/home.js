import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItem(data);
      }).catch(error =>{
        console.log(error);
      })
  },[]);
  return (
    <div className="content">
      {items && <ItemList items={items} title="All items" />}
    </div>
  );
};

export default Home;
