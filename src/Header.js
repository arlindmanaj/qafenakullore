import React from 'react'
import "./Header.css"


function Header() {
  return (
    <div className='header'>
      
      <img className='header__logo'  src='logoqafen.webp'></img>
      

       
      <div className='header__nav'>
        <div className='header__option'>
          {/* hOM E*/}
            <span className='header__optionLineOne'>Home</span>

        </div>
        <div className='header__option'>
          {/* PRODUCTS*/}
          <span className='header__optionLineOne'>Products</span>
        </div>
        <div className='header__option'>
          {/* CATEGORIES*/}
          <span className='header__optionLineOne'>Categories</span>
        </div>
        <div className='header__option'>
          {/*ABOUT US */}
          <span className='header__optionLineOne'>About us</span>
        </div>
        <div className='header__option__right'>
          {/*SEARCHI */}
          <div className='header__search'>
           <input className='header__searchInput' type='text'></input>
          </div>

        </div>
        <div className='header__option__right'>
          {/* LIKED*/}
          
        </div>
        <div className='header__option__right'>
          {/* CART*/}
          
        </div>
        <div className='header__option__right'>
          {/*HAMBUTGER */}

        </div>
      </div>
    </div>
    

  )
}

export default Header
