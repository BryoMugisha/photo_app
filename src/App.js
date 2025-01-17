import React, {useState} from 'react'
import './App.css';
import Announcements from './Announcements';
import Navbar from './Navbar';

const App = () => {

  const [brightness, setBrightness] = useState({
    name: 'Brightness' ,
    property: 'brightness' ,
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })
  const [contrast, setContrast] = useState({
    name: 'Brightness' ,
    property: 'brightness' ,
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })
  const [saturation, setSaturation] = useState({
    name: 'Saturation' ,
    property: 'saturate' ,
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })
  const [grayscale, setGrayscale] = useState({
    name: 'Grayscale' ,
    property: 'grayscale' ,
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  })
  const [sepia, setSepia] = useState({
    name: 'Sepia' ,
    property: 'sepia' ,
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  })
  const [hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate' ,
    property: 'hue-rotate' ,
    value: 100,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  })
  const [blur, setBlur] = useState({
    name: 'Blur' ,
    property: 'blur' ,
    value: 100,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  })

  const [background, setBackground] = useState("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg")

  return (
    <div>
      <Announcements/>
      <Navbar setBackground={setBackground}/>      
      <div className="wrapper">
        <div className="image-wrapper">
          <div className='image'>
          <img src={background} alt='' style={{filter: `${brightness.property}(${brightness.value}${brightness.unit})
           ${contrast.property}(${contrast.value}${contrast.unit})
           ${saturation.property}(${saturation.value}${saturation.unit})
           ${grayscale.property}(${grayscale.value}${grayscale.unit})
           ${sepia.property}(${sepia.value}${sepia.unit})
           ${blur.property}(${blur.value}${blur.unit})
           ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})` }}/>
        </div>
        </div>
      <div className='options'>
      <div className='mode'>
      <span>Brightness</span>
        <input type="range" max={brightness.range.max} min={brightness.range.min} onChange={(e) => {setBrightness({ ...brightness, value: `${e.target.value}`})}} />
      <span>Contrast</span>
      <input type="range" max={contrast.range.max} min={contrast.range.min} onChange={(e) => {setContrast({ ...contrast, value: `${e.target.value}`})}} />
      </div>
      <div className='mode'>
      <span>Saturation</span>
      <input type="range" max={saturation.range.max} min={saturation.range.min} onChange={(e) => {setSaturation({ ...saturation, value: `${e.target.value}`})}} />
      <span>Grayscale</span>
      <input type="range" max={grayscale.range.max} min={grayscale.range.min} onChange={(e) => {setGrayscale({ ...grayscale, value: `${e.target.value}`})}} />
      </div>
      <div className='mode'>
      <span>Sepia</span>
      <input type="range" max={sepia.range.max} min={sepia.range.min} onChange={(e) => {setSepia({ ...sepia, value: `${e.target.value}`})}} />
      <span>Hue Rotate</span>
      <input type="range" max={hueRotate.range.max} min={hueRotate.range.min} onChange={(e) => {setHueRotate({ ...hueRotate, value: `${e.target.value}`})}} />
      </div>
      <div className='mode blur'>
      <span>Blur</span>
      <input type="range" max={blur.range.max} min={blur.range.min} onChange={(e) => {setBlur({ ...blur, value: `${e.target.value}`})}} />
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
