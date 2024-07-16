import './Header.css'

function Header({cartItems}){
  
      let count =0;
      for(let cartItem of cartItems){
        count+=cartItem.count;
      }
    return (
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       <div className='cartHeader'>
           <h1>UseReducer</h1>
           <div className='cartIcon'><span>{count}</span><i class="fa-solid fa-cart-shopping"></i></div>
           </div>
        </>
    )
}

export default Header;