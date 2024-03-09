import React from 'react'

function Header() {
  return (
    <div className='head'>
        <header>
            <h1 className='logo'>LOGO</h1>
            <nav>
                <ul>
                    <li className='inline-block'><a href="/pages/accueil">Accueil</a></li>
                    <li className='inline-block'><a href="/pages/position">Position</a></li>
                    <li className='inline-block'><a href="">FAQ</a></li>
                </ul>
            </nav>
        </header>
        <br />
    </div>
  )
}

export default Header