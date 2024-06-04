'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

function Music() {

  const [sentence, setSentence] = useState('')
  const [songs, setSongs] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(sentence)

    try {
      const res = await fetch('http://127.0.0.1:5000/predict', {
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

      const song = await res.json();
      console.log('song', song)
      setSongs(song)

    } catch (error) {
      console.log(error)
    }    
  }

  return (
    <>
      <div className="bg-custom-green overflow-hidden">
        <Navbar />
      
        <div style={{marginTop:'40px'}}>
          <h3 style={{color:'white', fontSize:'28px', textAlign:'center'}}>Let's try to find a music for you </h3>

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
       

            <div className='result' style={{backgroundColor:'white', width:'70%', height:'300px', marginTop:'60px', marginBottom:'40px', border:'4px solid #172554',position:'relative', left:'14%'}}>
            {songs.length > 0 && (
          <>
            <h6>Listen to {songs[0].name} by {songs[0].artist}</h6>
            <h6>Listen to {songs[1].name} by {songs[1].artist}</h6>
            <h6>Listen to {songs[2].name} by {songs[2].artist}</h6>
            <h6>Listen to {songs[3].name} by {songs[3].artist}</h6>
          </>
        )}
            </div>
       
        </form>

      </div>
      </div>
    </>
  )
}

export default Music