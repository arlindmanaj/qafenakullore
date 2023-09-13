import React from 'react'
import './Product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Product() {
  return (
    
    <div className='product'>
        <a><img src='Foto-03.webp'></img></a>
            <div className='product__info'>
                <p className='description'>Komplet</p>
                <h4 className='titulli__produktit'>Varse veneciane</h4>
                <strong className='qmimi'>69.99$</strong>
                <br></br><button><AddShoppingCartIcon className='cart__icon'></AddShoppingCartIcon>Shto Ne Shporte</button>
            </div>







    </div>
  )
}

export default Product