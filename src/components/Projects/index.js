import './index.scss'
import React from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import decoHogar from '../../assets/images/LogoDH.png'
import movieSearch from '../../assets/images/movieSearch.png'
import cuantoEs from '../../assets/images/logoCuantoEs.png'

const Projects = () => {
   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   return (
      <div>
         <div className="container projects-page">
            <div className="text-zone content-container">
               <div className='title'>
                  <h1>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15} />
                  </h1>
               </div>

               <div className='projectsContainer' >
                  <div className="project-card" >
                     <div className="image-info">
                        <a target="_blank" rel="noreferrer" href="https://nicolascornaglia.github.io/cuantoes-deploy/">
                           <img src={cuantoEs} alt='cuantoEs' className='imageStudies' />
                        </a>
                        <p className='hiddenDescription'>
                           <h3>Cuanto Es</h3>
                           <p>Mobile website to divide equally the spendings of many people in a reunion. Useful for situations like a meeting to have dinner or going out with friends. </p>
                           <p>Technologies used: React, Javascript, HTML5, CSS. </p>
                        </p>
                     </div>
                  </div>
                  <div className="project-card" >
                     <div className="image-info">
                        <a target="_blank" rel="noreferrer" href="https://github.com/NicolasCornaglia/Portfolio/tree/main/proyecto-integrador-DecoHogar">
                           <img src={decoHogar} alt='decoHogar' className='imageStudies' />
                        </a>
                        <p className='hiddenDescription'>
                           <h3>Deco Hogar</h3>
                           <p>E-commerce website for furniture sellers.</p>
                           <p>Technologies used: Javascript, HTML5, CSS, NodeJS, MariaDB, React. </p>
                        </p>
                     </div>
                  </div>
                  <div className="project-card">
                     <div className="image-info">
                        <a target="_blank" rel="noreferrer" href="https://github.com/NicolasCornaglia/Portfolio/tree/main/movie-searcher">
                           <img src={movieSearch} alt='movieSearch' className='imageStudies' />
                        </a>
                        <p className='hiddenDescription'>
                           <h3>Movie Searcher</h3>
                           <p>Application for searching movies in omdb api database.</p>
                           <p>Technologies used: React, Javascript, Bootstrap. </p>
                        </p>
                     </div>

                  </div>
               </div>
            </div>
         </div>

         <Loader type="pacman" />
      </div>
   )
}

export default Projects