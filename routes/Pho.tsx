
import pic from '../assets/pic.png'
import top from '../assets/top.png'
import bot from '../assets/bot.png'
import Un from '../assets/Un.png'
import R from '/public/R.png'
import all from '../assets/all.png'

import './Pho.css'
import Navbar from "../Components/Navbar"

function pho() {
  return (
    <div className="home">
      <Navbar />
      <img src={pic} alt="" className="img" />
      <section className='gran'>
      <div>
        <img src={top} alt="" className="img" />
        <img src={bot} alt="" className="img" />
      </div>
      </section>
      <section>
        <div>
          <img src={Un} alt='' className='aboot' />
          <h5 className='hop'>About</h5>
          <p>Welcome! I’m Austin, a passionate photographer based in the heart of Nebraska. I specialize in capturing the essence of moments through my lens. Whether it’s a professional headshot, a family portrait, or a stunning landscape, my goal is to create images that tell a story and evoke emotion.</p>
          
        </div>
      </section>
      <section className='nute'>
        <div>
          <img src={R} alt='' className='flop'/>
        </div>
      </section>
      <section className=''>
        <div>
        <img src={all} alt='' className='abo'/>
        </div>
        <div>
          <h5>Services</h5>
        </div>
      </section>
    </div>
  )
}

export default pho




