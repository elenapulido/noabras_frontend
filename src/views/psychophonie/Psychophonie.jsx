import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Psychophonie() {
  return (
    <div>
      <Navbar />
      <div id='playAlbum' class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <iframe src="https://open.spotify.com/embed/album/4xwx0x7k6c5VuThz5qVqmV?utm_source=generator" width="50%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      <Footer />


    </div>
  )
}

export default Psychophonie