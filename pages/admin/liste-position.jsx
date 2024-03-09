import React from 'react'
import Navbar from './Navbar'
import Contenu from './Contenu'


function listeposition() {
  return (
    <div>
        <Contenu />
        <div className="body2">
            <button className='add'><a href="/admin/ajouter-position">Ajouter position</a></button>
            <h1  className="font-bold text-3xl">
                liste-position
            </h1>
        </div>
    </div>
  )
}

export default listeposition