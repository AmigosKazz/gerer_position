import Image from "next/image";
import Head from "next/head";
import Header from "./composant/Header";
import Footer from "./composant/Footer";


export default function Home() {
    return (
        <div class="homepage">
            <Head>
                <title>Accueil</title>
                <meta name="description" content="Accueil" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div class="home">
                    <div class="title">
                        <h1>
                            BIENVENUE <span>SUR</span>  NOTRE <span>SITE</span>
                        </h1>
                    </div>
                    <div class="sub-title">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Sapiente officia quia molestias minima <span>inventore pariatur</span>.
                            Quod culpa necessitatibus deleniti illo labore nam ex, omnis
                            cum voluptatum! Aspernatur corrupti exercitationem perspiciatis?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Sapiente officia quia molestias minima inventore pariatur.
                        </p>
                    </div>
                </div>

                <div class="blur-object">

                </div>

            </main>
            <Footer/>
        </div>
    );
}
