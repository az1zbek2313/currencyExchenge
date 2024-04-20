import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'
import { qauntProps } from './type';

function App() {
  const [quant1, setQuant1] = useState<qauntProps>(Object);
  const [quant2, setQuant2] = useState<qauntProps>(Object);
  const [changes, setChanges] = useState<boolean>(false);
  const [val, setVal] = useState<number>(0);
  

  return (
    <>
     <div className='main'>
        <div className="hero">
          <div className="heroConatiner">
            <header>
            <nav>
              <div  className="logo">
              <svg width={60} color='white' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 710 568.71"><path fill="currentColor" d="M270.72 427.89h-79.85a2.9 2.9 0 01-2.46-1.37l-51.6-83.33-51.62 83.33a2.87 2.87 0 01-2.45 1.37H2.9a2.89 2.89 0 01-2.4-4.51L96.36 280.9 1.68 143.35a2.89 2.89 0 012.38-4.53h80.33a2.88 2.88 0 012.44 1.36l50 79.51 49.67-79a3.88 3.88 0 013.3-1.83h79.77a2.89 2.89 0 012.38 4.53L177.24 280.9l95.88 142.48a2.9 2.9 0 01-2.4 4.51zM424.65.01a282.59 282.59 0 00-208 90.9 1.47 1.47 0 001.08 2.45h12.57a2.86 2.86 0 001.87-.71 256.49 256.49 0 01168.92-63c141.47 0 256.14 113.6 256.14 253.73S542.6 537.09 401.13 537.09a256.51 256.51 0 01-168.92-63 2.86 2.86 0 00-1.87-.71h-12.57a1.47 1.47 0 00-1.08 2.45 282.59 282.59 0 00208 90.9C581.14 566.71 708 439.84 708 283.35S581.14.01 424.65.01zM537 309.09H323.47c1.87 32.38 30.45 60.31 71.9 60.31 31.92 0 52.26-12.7 64.6-32.2a2.89 2.89 0 013.78-1.06l54 28a2.9 2.9 0 011.1 4.16C493.14 407.14 449 432.8 395 432.8h-.4c-85.55 0-144.13-62.6-144.13-149.45S309 133.91 394.55 133.91s147.17 66.91 147.17 149.44a147 147 0 01-1.65 22.55c-.28 1.5-1.33 3.19-3.07 3.19zm-67.1-58.5c-4.47-18.38-26-53.3-71.91-53.3-44.1 0-66.77 27.59-72.15 53.3z"></path></svg>
              <div className="business">
              <a>Personal</a> 
              <span>|</span>
              <a style={{opacity:0.7}}>Business</a>
              </div>
              </div>
              <ul>
                <li><a href="#">Send Money</a></li>
                <li><a href="#">Converter</a></li>
                <li><a href="#">Currency API</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
              <div className="registr">
                <a href="#" className='login'>Sign In</a>
                <a href="#" className='signup'>Register</a>
              </div>
            </nav>
            </header>
            <div className="hero__title">
              {
                !changes ?
                <h1>{val} {quant1.currency?.code} to {quant2.currency?.code} - Convert {quant1.currency?.name} to {quant2.currency?.name}</h1>:
                <h1>{val} {quant2.currency?.code} to {quant1.currency?.code} - Convert {quant2.currency?.name} to {quant1.currency?.name}</h1>
              }
              <p>Xe Currency Converter</p>
            </div>

            <Currency setQuant1={setQuant1} setQuant2={setQuant2} setChanges={setChanges} setVal={setVal}/>
          </div>
        </div>
     </div>
    </>
  )
}

export default App