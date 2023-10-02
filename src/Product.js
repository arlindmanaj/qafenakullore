import React from 'react'
import './Product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Product( {id, title, image, price, description} ) {
  return (
    
    <div className='product'>
        <a><img src={image}></img></a>
            <div className='product__info'>
                <p className='description'>{description}</p>
                <h4 className='titulli__produktit'> {title}</h4>
                <strong className='qmimi'>{price}</strong>
                <br></br><button><AddShoppingCartIcon className='cart__icon'></AddShoppingCartIcon>Shto Ne Shporte</button>
            </div>







    </div>
  )
}

export default Product