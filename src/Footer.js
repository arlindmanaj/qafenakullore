import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div>
        

       <div className='diqka'> <img className='logo__footer' src='logoqafen.webp'></img></div>

        <div className='footer'>
          <div className='newsletter__footer'>
            <p>Regjistrohuni per Gazeten tone</p>
            <p className='paragrafi2'>*Te gjitha te dhenat jane anonim</p>
            <div className='regjistrohu'>
              <br></br>
              <input placeholder='Emaili juaj...'></input>
              <button>Subscribe</button>
            </div>
            <p className='paragrafi2 paragrafi5'>2023 QafenAkullore All Rights Reserved</p>
          </div>
            <div className='aboutus__footer'>
              <ul>
                <li>Rreth Nesh</li>
                <li className='li__footer'>Rreth Produkteve</li>
                <li>Rreth Globit</li>

              </ul>
            </div>
            <div className='aboutus__footer'>
              <ul>
                <li>Llogaria ime</li>
                <li className='li__footer'>Llogaria ime</li>
                <li>Llogaria ime</li>
              </ul>
            </div>
            <div className='aboutus__footer'>
              <ul>
                <li>Pagesa</li>
                <li className='li__footer'>Pagesa</li>
                <li>Pagesa</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer