import React from 'react'
import './Home.css'
import Footer from './Footer'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Product from './Product';
function Home() {
  return (

    
    <div className='home'>
      <div className='home__container'>
        <div className='home__hero'>
          <h1 className='titulli__hero'>Varse<br></br> Argjendi</h1>
          <br></br> 
          <p className="teksti__hero">Eksploro stolit tona me varset dhe zingjirët më të reja në tregë!<br></br> Të gjitha stolit tona janë Argjend 925  i garantuar me vule dhe garancioni është i përjetshëm!</p>
          
         {/* ma vone  <button className='button__hero1'>Lexo me shume</button>*/}
         {/* ma vone <button className='button__hero12'>Blej</button> */}
          <img src='hero.webp' alt='' className='hero__img'></img>
        </div>
      </div>


      {/* Under Hero */}
      <div className='under__hero'>
        <div className='support__icon'>
          <SupportAgentIcon className='ikonat__under' />
          <h3 className='titujt__hero'>Support 24/7</h3>
          <p className='teksti__ikona'>Na kontaktoni ne Instagram!</p>
        </div>
        <div className='support__icon'>
          
          <LocalShippingIcon className='ikonat__under'  />
          <h3 className='titujt__hero'>Porosit Online</h3>
          <p className='teksti__ikona'>Dergojme me porosi ne <br></br>Kosove, Shqiperi dhe Maqedoni</p>
          
        </div>
        <div className='support__icon'>
          <WorkspacePremiumIcon className='ikonat__under' />
          <h3 className='titujt__hero'>Cilesi e garantuar</h3>
          <p  className='teksti__ikona'>Te gjitha produktet ne faqen tone jane<br></br> te garantuara Argjend 925 me vule!</p>
          
        </div>

        </div>
      {/* Zgjidhjet */}
      {/* Ki met me bo tekstin mbi foto edhe me lidh si faqe */}
          <div className='options'>


        <div className='options__ njeshi'>
          <a><img className='image__options' src='Foto-01.webp' alt=''></img></a>
        </div>
      <div className='dyshi'>
        <div className='options__'>
          <a><img className='image__options' src='Foto-03.webp' alt=''></img></a>
        </div>

        <div className='options__'>
          <a><img className='image__options' src='Foto-02.webp' alt=''></img></a>
        </div>
        </div>
      
     
      
      
      
      </div>
        {/* Zgjidhe njo perqefi pjes */}
      <div className='zgjedhenjo'>
        <div className='zgjedhe__img'>
          <img src='Foto-02.webp' className='imazhi__zghedhje imazhidyt'></img>
          <img src='Foto-02.webp' className='imazhi__zghedhje'></img>
        </div>
        <div className='zgjedhe__tekst'>
          <h1>A don mu dok cool?<br></br>Zgjedhe Njo Perqefi!</h1>
          
          <button>Zbulo me shume</button>
        </div>
      </div>

        {/* Best Sellers */}
      <div className='bestsellers__'>
        
          <div className='bestsellers'>
          
              <div className='bestsellers__option'>
                <a className='featured'>Te paraqitura</a>
                <a className='featured'>Te reja</a>
                <a className='featured'>Femra</a>
                <a className='featured'>Mashkuj</a>
            </div>
          </div>
        </div>
        <div className='home__row'>
          <Product title="The Lean Startup" price={29.99} image="Foto-02.webp" description="Qafore"/>
          <Product title="Mami Babi" price={39.99} image="Foto-02.webp" description="Komplet" />
          <Product title="The Halla " price={49.99} image="Foto-02.webp" description="Komplet"/>
          <Product title="Nona jote" price={59.99} image="Foto-02.webp" description="Varse"/>
          <Product title="Muk po di" price={69.99} image="Foto-02.webp" description="Qafore"/>
        </div>

        <div className='personalizo__banner'>
          <img className='imazhi__banner__personalizo' src='Untitled-1-02.webp'></img>
        </div>


        <Footer />













    </div>
  )
}

export default Home