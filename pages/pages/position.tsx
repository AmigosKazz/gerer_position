import React from 'react'
import Nav from '../composant/Nav'
import Footer from '../composant/Footer'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog,faTag,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';





function position() {
  return (
    <div>
        <Nav />

            <div className="body7">
                <form action="" className='search'><input type="text" placeholder='Recherchez votre budget' /> <button>Rechercher</button></form>
                <br />
                <br />
                <div className="position">
                  <h2><span>Pietra hotel Antarandolo</span></h2>
                  <br />
                  <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                  <br />
                  <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                  <br />
                  <h4>Libre</h4>
                  <br />
                  <button>Reserver +</button>
                </div>

                <div className="position">
                <h2><span>Pietra hotel Antarandolo</span></h2>
                  <br />
                  <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                  <br />
                  <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                  <br />
                  <h4>Libre</h4>
                  <br />
                  <button>Reserver +</button>
                </div>

                <div className="position">
                    <h2><span>Pietra hotel Antarandolo</span></h2>
                    <br />
                    <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                    <br />
                    <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                    <br />
                    <h4>Libre</h4>
                    <br />
                    <button>Reserver +</button>
                </div>

                <div className="position">
                    <h2><span>Pietra hotel Antarandolo</span></h2>
                    <br />
                    <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                    <br />
                    <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                    <br />
                    <h4>Libre</h4>
                    <br />
                    <button>Reserver +</button>
                </div>

                <div className="position">
                    <h2><span>Pietra hotel Antarandolo</span></h2>
                    <br />
                    <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                    <br />
                    <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                    <br />
                    <h4>Libre</h4>
                    <br />
                    <button>Reserver +</button>
                </div>

                <div className="position">
                    <h2><span>Pietra hotel Antarandolo</span></h2>
                    <br />
                    <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                    <br />
                    <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                    <br />
                    <h4>Libre</h4>
                    <br />
                    <button>Reserver +</button>
                </div>

            </div>

        <Footer />
    </div>
  )
}

export default position