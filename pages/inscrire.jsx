import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from './composant/Header';
import Footer from './composant/Footer';

function Inscrire() {
  const router = useRouter();
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('userData', JSON.stringify(input));
      console.log(input);
      alert('Success');
      router.push('/pages/accueil');
    } catch (error) {
      console.log("Erreur d'inscription...", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="sign-in">
        <h1 className="font-bold text-3xl">Inscription</h1>
        <br />
        <div className="inscrit">
          <div className="image">
            <img src="/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="nom">Nom et prenom</label>
            <br />
            <input type="text" onChange={handleChange} name="nom" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" onChange={handleChange} name="email" />
            <br />
            <label htmlFor="email">Numero tel</label>
            <br />
            <input type="text" onChange={handleChange} name="tel" />
            <br />
            <label htmlFor="mdp1">Mot de passe</label>
            <br />
            <input type="password" onChange={handleChange} name="mdp1" />
            <br />
            <label htmlFor="mdp2">Confirmation de mot de passe</label>
            <br />
            <input type="password" onChange={handleChange} name="mdp2" />
            <br />
            <br />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Inscrire;