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
              <br />
                <form action="" className='search'><input type="text" placeholder='Recherchez votre budget' /> <button>Rechercher</button></form>
                <br />
                <br />
                <div className="position">
                  <h1><span>Pietra hotel</span></h1>
                  <h3 className='num'>Espace N°01</h3>
                    <p>
                        En face de BOA Antarandolo
                    </p>
                  <br />
                  <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                  <br />
                  <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                  <br />
                  <div className="status">Libre</div>
                  <br />
                  <button>Reserver +</button>
                </div>
                <div className="position">
                <h1><span>Pietra hotel</span></h1>
                  <h3 className='num'>Espace N°01</h3>
                    <p>
                        En face de BOA Antarandolo
                    </p>
                  <br />
                  <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                  <br />
                  <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                  <br />
                  <div className="status">Libre</div>
                  <br />
                  <button>Reserver +</button>
                </div>

                <div className="position">
                <h1><span>Pietra hotel</span></h1>
                  <h3 className='num'>Espace N°01</h3>
                    <p>
                        En face de BOA Antarandolo
                    </p>
                  <br />
                    <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                    <br />
                    <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                    <br />
                    <div className="status">Libre</div>
                    <br />
                    <button>Reserver +</button>
                </div>

                <div className="position">
                <h1><span>Pietra hotel</span></h1>
                  <h3 className='num'>Espace N°01</h3>
                    <p>
                        En face de BOA Antarandolo
                    </p>
                  <br />
                    <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                    <br />
                    <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                    <br />
                    <div className="status">Libre</div>
                    <br />
                    <button>Reserver +</button>
                </div>

                <div className="position">
                <h1><span>Pietra hotel</span></h1>
                  <h3 className='num'>Espace N°01</h3>
                    <p>
                        En face de BOA Antarandolo
                    </p>
                  <br />
                    <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                    <br />
                    <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                    <br />
                    <div className="status">Libre</div>
                    <br />
                    <button>Reserver +</button>
                </div>

                <div className="position">
                <h1><span>Pietra hotel</span></h1>
                  <h3 className='num'>Espace N°01</h3>
                    <p>
                        En face de BOA Antarandolo
                    </p>
                  <br />
                    <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> 2330 personne</h3>
                    <br />
                    <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> 300 000 Ar/j</h4>
                    <br />
                    <div className="status">Libre</div>
                    <br />
                    <button>Reserver +</button>
                </div>

            </div>

        <Footer />
    </div>
  )
}

export default position