import React from 'react'
import { Spotify } from 'react-spotify-embed'

const IFrame = () => {
  return (
    <div className='main-iframe'>
        {/* <iframe width={420} height={315} 
        src='https://open.spotify.com/embed/album/4xwx0x7k6c5VuThz5qVqmV?utm_source=generator'>
            frameborder="0" allowfullscreen            
        </iframe> */}
        <Spotify link='https://open.spotify.com/episode/3RtvcZ5nJTsjIEuwud45sD?si=61d147f8f4144b91' />
        
    </div>
  )
}

export default IFrame