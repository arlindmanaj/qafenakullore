import React from 'react';
import "./Checkout.css";
import Footer from './Footer'
import { Radio } from '@mui/material';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='shopping__text'>
        <h1 className=''>Shporta e Produkteve > Paguaj >  <br></br>Perfundim</h1>

      </div>
        <div className='egjitha'>
              <div className='checkout__products'>
                  <div className='checkout__text'>
                    <p className='one'>Products</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                  </div>
              </div>
                <div className='checkout__product'>
                  <p>X</p>
                  <img src='Foto-02.webp' className='imazhi__produktit'></img>
                  <div className='checkout__product__description'>
                    <h1>Mami Babi</h1>
                    <p className='description__'>Varse Argjerndi</p>
                    <h1 className='qmimi'>49.99$</h1>
                  </div>
                  <div className='quantity'>
                    <h3>-</h3>
                    <h3 className='numri'>1</h3>
                    <h3>+</h3>
                  </div>
                  <h2 className='qmimi__total'>49.99$</h2>
                  
          </div>
          
                
        </div>
        <div className='cart__totalInfo'>
            <h1>Totali Kartes</h1>
              <div className='cart__totalElements'>
                <p>SubTotal</p>
                <h3>49.99$</h3>
                
              </div>
              <div className='cart__totalElements'>
                <p>Dergesa</p>
                  <ul className='cart__address'>
                    <li>Kosove<input type='radio' name='shtete' value='kosove'  /></li>
                    <li>Shqiperi<input type='radio' name='shtete' value='kosove'  /></li>
                    <li>Maqedoni<input type='radio' name='shtete' value='kosove'  /></li>
                  </ul>
              </div>

          </div>
    
</div>
    
  )
}

export default Checkout