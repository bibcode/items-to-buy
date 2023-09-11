import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const Home = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    //1 load the data from the json file itself, google fs and how to use FS
    //hint : fs.readeFileSync('./data/db.json') where (./data/db.json) is path to your json file
    //search fs-extra on npm
    
    
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
