import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSLice";
import ResPageDish from "./ResPageDish";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearCart())
    }

    return(
        <div className="cart">
            <button className = "clearCartBtn" onClick={handleClick}>Clear Cart</button>
            {
                cartItems.length ? 
                <div className="cartItems">
                    {
                        cartItems.map((items) => {
                            return <ResPageDish name={items?.name} price={items.price} desc={items?.desc} image={items?.image}/>
                        })
                    }
                </div>
                :
                <h1>Cart is empty. Please add Items</h1>
            }
        </div>
    )
}

export default Cart;