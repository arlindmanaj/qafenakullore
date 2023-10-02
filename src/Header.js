import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



function Header() {
  return (
    <div className='header'>
      
      <img className='header__logo'  src='logoqafen.webp'></img>
      

      
      <div className='header__nav'>
        <div className='header__option'>
          {/* hOM E*/}
            <span className='header__optionLineOne'>Ballina</span>

        </div>
        <div className='header__option'>
          {/* PRODUCTS*/}
          <span className='header__optionLineOne'>Produktet</span>
        </div>
        <div className='header__option'>
          {/* CATEGORIES*/}
          <span className='header__optionLineOne'>Kategorite</span>
        </div>
        <div className='header__option'>
          {/*ABOUT US */}
          <span className='header__optionLineOne'>Rreth Nesh</span>
        </div>
       
        
      </div>
    <div className='djatht'>
      <div className='header__search'>
           <SearchIcon className='header__searchIcon' />
       </div>
       <div className='header__option__right'>
          {/* LIKED*/}
          <FavoriteBorderOutlinedIcon className='liked__icon' />
        </div>
        <div className='header__option__right'>
          {/* CART*/}
          <ShoppingCartOutlinedIcon className='shopping__cart' />
        </div>
        <div className='header__option__right'>
          {/*HAMBUTGER */}
          <MenuOutlinedIcon className='hamburger' />
        </div>
      </div>
    </div>
    

  )
}

export default Header
