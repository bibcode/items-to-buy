const ItemList = ({items,title}) => {
    return (
        <div className="item-list">
            <h1>{title}</h1>
            {items.map((item) =>(
               <div className="item-preview" key={item.id}>
                 <h2>{item.title}</h2>
                 <p>{item.id}</p>
                <p>{item.body}</p>
                <button>Buy Item</button>
               </div>
))}
        </div>
    );
}
 
export default ItemList;
