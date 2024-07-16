import './Cart.css'
import ProductItem from '../ProductItem/ProductItem'

function Cart({cartItems, setCartItems}){

    function calculateTotal(){
        let sum=0;
        for(let cartitem of cartItems){
            sum+=cartitem.price * cartitem.count;
        }
        return sum;
    }

    if(cartItems.length==0){
      return ( 
        <div className='empty'>
      <h1>YOUR BAG</h1>
        <p>Is empty!!</p>
        </div>
     );
    }

    function removeItem(itemId){
        const newCartItems = cartItems.filter((cartItem)=>cartItem.id!==itemId);
        setCartItems(newCartItems);
    }

    function updateCount(itemId, count){
        const newCartItems = [...cartItems];
        for(let cartItem of newCartItems){
            if(cartItem.id===itemId){
                cartItem.count=count;
                break;
            }
        }
        setCartItems(newCartItems);
    }
    return (
        <>
        <div className='cardContainer'>
            <h1>YOUR BAG</h1>
            {cartItems.map((cartItem)=>(
                <ProductItem item={cartItem}
                key={cartItem.id}
                removeItem={removeItem}
                decrement={()=>{
                    updateCount(cartItem.id, cartItem.count-1)}}
                    increment={()=>{
                        updateCount(cartItem.id, cartItem.count+1)}}  
                    />
            ))}
        <p id="price"><span>Total:</span><span id="totalPrice">${calculateTotal()}</span></p>
        <button id="clear" onClick={()=>{
            setCartItems([]);
        }}>Clear Cart</button>
        </div>
        </>
    )
}
 export default Cart;