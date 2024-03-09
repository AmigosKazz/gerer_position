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
                <label htmlFor="prenom">Prenom</label>
                <br />
                <input type="text" name="prenom" />
                <br />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" />
                <br />
                <br />
                <label htmlFor="mdp1">Mot de passe</label>
                <br />
                <input type="password" name="mdp1" />
                <br />
                <br />
                <label htmlFor="mdp2">Confirmation de mot de passe</label>
                <br />
                <input type="password" name="mdp2" />
                <br />
                <br />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    </div>
  )
}

export default ajouterposition