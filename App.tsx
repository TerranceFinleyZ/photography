import './App.css'
import GLOW from "./assets/GLOW.mp4"
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className='main'>
      <video src={GLOW} autoPlay loop muted />
      <div>
        <Link to='/Pho'>
          <div className='buttons'>
            <h2>Photography</h2>
          </div>
        </Link>
        <div className='buttons'>
          <h2>Video Editing</h2>
        </div>
      </div>
    </div>
  )
}


export default App
