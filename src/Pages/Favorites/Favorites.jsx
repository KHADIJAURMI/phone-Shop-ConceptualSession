import { useEffect, useState } from "react";
import FavoritesCard from "./FavoriteCard";


const Favourite = () => {
    const [favourite, setFavourite] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isShow,setIsShow] = useState(false)

  const [totalPrice,setTotalPrice] = useState(0)

    useEffect(() => {

        const favouriteItem = JSON.parse(localStorage.getItem("favourite"));

        if (favouriteItem) {
            setFavourite(favouriteItem);
            const total = favouriteItem.reduce((preValue,currentItem)=>preValue+currentItem.price ,0);
            setTotalPrice(total);
        }
        else {
            setNofound("No Data Found");
        }
    }, []);

    const handleRemove = () => {
        localStorage.clear();
        setFavourite([]);
        setNofound("No Data Found");
      };
    console.log(favourite);
    return (
        <div >
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
         <div>
            <div>
            {favourite.length>0 && <button  onClick={handleRemove}  className="px-5 py-5 rounded-lg bg-green-200 block mx-auto">Deleted All favorites</button>}
            <h1>TotalPrice : {totalPrice}</h1>
            </div>
            <div className="grid grid-cols-2">
            {
                isShow ? favourite.map((phone) => (
                    < FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  )) 
                 : favourite.slice(0,2).map((phone) => (
                    < FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))  
            }
                </div>
                {favourite.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
            {isShow ? "See less" : "See more"}
          </button>}
         </div>
            }
        </div>
    );
};

export default Favourite;