import React from 'react'
import Contenu from './Contenu'



function ajouterposition() {
  return (
    <div>
        <Contenu />
        <div className="body2">
            <h3>Ajouter position</h3>
            <br />
            <br />
                <form className='addposition'>
                <br />
                <br />
                <label htmlFor="nom">Nom de position</label>
                <br />
                <input type="text" name="nom_position" />
                <br />
                <br />
                <label htmlFor="nom">Localisation</label>
                <br />
                <input type="text" name="localisation" />
                <br />
                <br />
                <label htmlFor="Numero">Numero d'espace</label>
                <br />
                <input type="text" name="numero" />
                <br />
                <br />
                <label htmlFor="email">Capacité</label>
                <br />
                <input type="text" name="capacite" />
                <br />
                <br />
                <label htmlFor="prix">Prix</label>
                <br />
                <input type="text" name="prix" />
                <br />
                <br />
                <button type="submit">Confirmer</button>
            </form>
        </div>
    </div>
  )
}

export default ajouterposition