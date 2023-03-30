import React from 'react'
import { Spotify } from 'react-spotify-embed'
import "./IFrame.css"

const IFrame = () => {
  return (
    <div className='main-iframe'>
       
        <Spotify link='https://open.spotify.com/episode/3RtvcZ5nJTsjIEuwud45sD?si=61d147f8f4144b91' />
        <Spotify link='https://open.spotify.com/episode/5vMrkdlIq4fUt0Kf3JOafC?si=fa21c0f837e04b27' />
        
    </div>
  )
}

export default IFrame