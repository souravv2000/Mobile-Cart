import './ProductItem.css'

function ProductItem({item, removeItem, increment, decrement}){
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      
        <div className='card'>
            
                <div className='leftCard'>
                    <img src={item.image}/>
                    <div className='title_price'>
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                        <button onClick={() => {
                            removeItem(item.id);
                            alert('Item is removed from the cart!!!')
                        }}>remove</button>
                    </div>
                </div>
                <div className='Btn'>
                    <i onClick={increment} class="fa-solid fa-angle-up"></i>
                    <span>{item.count}</span>
                    <i onClick={decrement} class="fa-solid fa-angle-down"></i>
                </div>
        </div>
        </>
    )
}
export default ProductItem;