'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

function Movie() {

  const [sentence, setSentence] = useState('')
  const [movies, setMovies] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(sentence)

    try {
      const res = await fetch('http://127.0.0.1:5000/predict2', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sentence
        })
      })

      if (res.ok){
        console.log('SENT', sentence)
      } else {
        console.log('NOT SENT')
      }

      const movie = await res.json();
      console.log('song', movie)
      setMovies(movie)

    } catch (error) {
      console.log(error)
    }    
  }

  return (
    <>
      <div className="bg-custom-green overflow-hidden">
        <Navbar />
      
        <div style={{marginTop:'40px'}}>
          <h3 style={{color:'white', fontSize:'28px', textAlign:'center'}}>Let's try to find a movie for you </h3>

          <form onSubmit={handleSubmit}>
            <div style={{backgroundColor:'black',padding:'20px',width:'60%', justifyContent:'center', position:'relative', left:'20%', marginTop:'40px'}}>
              <h4 style={{color:'white',textAlign:'center'}}>Tell us how you feel right now</h4>

              <textarea 
                style={{backgroundColor: '#cdcdcd',width:'98%', marginTop:'10px', height:'200px', justifyContent:'center'}} 
                placeholder='I think ' 
                onChange={(e) => setSentence(e.target.value)}
              />
            </div>
            <br/>
            <button style={{backgroundColor:'white', color:'#2e1065', padding:'10px', borderRadius:'6px', fontSize:'20px', marginTop:'10px', position:'relative', left:'44%'}}>SUBMIT</button>
       

            <div className='result' style={{backgroundColor:'white', width:'70%', height:'400px', marginTop:'60px', marginBottom:'40px', border:'4px solid #172554',position:'relative', left:'14%'}}>
            {movies.length > 0 && (
          <>
            <h6>Watch {movies[0].names} ( {movies[0].release_year}) ||<br/> Genere - {movies[0].genre} ||<br/> Description - {movies[0].description}</h6><br/>
            <h6>Watch {movies[1].names} ( {movies[1].release_year} ) ||<br/> Genere - {movies[1].genre} ||<br/> Description -{movies[1].description}</h6><br/>
            <h6>Watch {movies[2].names} ( {movies[2].release_year})  ||<br/> Genere - {movies[2].genre}||<br/> Description - {movies[2].description}</h6><br/>
            <h6>Watch {movies[3].names} ( {movies[3].release_year})  ||<br/> Genere - {movies[3].genre} ||<br/> Description - {movies[3].description}</h6><br/>
          </>
        )}
            </div>
       
        </form>

      </div>
      </div>
    </>
  )
}

export default Movie