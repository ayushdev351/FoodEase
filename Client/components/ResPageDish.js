import { useDispatch } from "react-redux";
import { DISH_IMG_URL } from "../utils/constants";

// Importing action
import { addItem } from "../store/cartSLice";

const ResPageDish = ({name, price, desc, image}) => {
    
    if(!name) return <></>

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addItem({name, price, desc, image}))
    }

    return(
            <div className="res-page-dish">
                <div className="dish-info">
                    <h3 className="dish-name">{name}</h3>
                    <p className="dish-price">Rs. {price / 100}</p>
                    <p className="dish-desc">{desc}</p>
                </div>
                <div className="dish-img-container">
                    <img src= {DISH_IMG_URL + image} className="dish-img-res"/>
                    <button className="addBtn" onClick={handleClick}>+ Add</button>
                </div>
            </div>
    )
}

export default ResPageDish;