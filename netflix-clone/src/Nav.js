import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll', handleShow)
        }
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png'
        alt='Netflix Logo' />

        {/* <img className='nav__avatar'
        src='https://pbs.twimg.com/profile_images/124011999041155'
        alt='Netflix Logo' /> */}
    </div>
  )
}

export default Nav