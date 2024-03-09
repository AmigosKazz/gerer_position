import React from 'react'

function Contenu() {
  return (
    <div>

        <div className="navbar">
            <h1 className="logo2">LOGO</h1>
            <ul>
                <li><br /><a href="/admin/home">Accueil</a></li>
                <span></span>
                
                <li><br /><a href="/admin/dashboard">Dashboard</a></li>
                <span></span>
               
                <li><br /><a href="/admin/liste-position">Liste position</a></li>
                <span></span>
               
                <li><br /><a href="/admin/reservation">Reservation</a></li>
                <span></span>
              
                <li><br /><a href="/admin/payement">Recu & Payement</a></li>
                <span></span>
            </ul>
        </div>
    </div>
  )
}

export default Contenu