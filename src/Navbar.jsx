import React from 'react'

const Navbar = (setBackground) => {
  return (
    <div className='navbar'>
        <span>Photo editors</span>
        <input type='text' placeholder='Image Link' onChange={(e) => {setBackground(e.target.value)}}></input>
    </div>
  )
}

export default Navbar