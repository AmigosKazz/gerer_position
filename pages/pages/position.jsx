import React from 'react'
import Nav from '../composant/Nav'
import Footer from '../composant/Footer'
import { BackgroundGradient } from "../composant/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

function position() {
  return (
    <div>
        <Nav />

            <div className="body">
                <h3>Liste des position dispo</h3>
                <br />
                <br />
                <div className="position"></div>
                <div className="position"></div>
                <div className="position"></div>
                <br />
                <div className="position"></div>
                <div className="position"></div>
                <div className="position"></div>
            </div>

        <Footer />
    </div>
  )
}

export default position