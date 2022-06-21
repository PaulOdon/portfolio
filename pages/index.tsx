import Head from "next/head";
import styles from "../styles/Home.module.css";
import Gradient from "rgt";
import { MenuIndication } from "../components/shared/MenuIndication";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Paul Odon</title>
        <meta name="description" content="Paul Odon ANDRIANANTENAINA" />
        <link rel="icon" href="/Paul-bg.png" />
      </Head>

      <MenuIndication icon="maps_home_work" title="Accueil 👈" />

      <div
        style={{
          width: "50%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          src="/paul.jfif"
          style={{ height: 100, width: 100, borderRadius: "50%" }}
        />
        <div>
          <p style={{ fontSize: 20 }}>
            <span style={{ color: "#828282" }}>Bonjour😉</span>
            <br />
            Je suis ANDRIANANTENAINA Paul Odon
            <br />
            <Gradient dir="left-to-right" from="#0500FF" to="#BD00FF">
              <span
                style={{
                  fontSize: 24,
                  color: "-webkit-linear-gradient(#0500FF, #BD00FF)",
                }}
              >
                Développeur Fullstackjs
              </span>
            </Gradient>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <button
            style={{
              padding: 15,
              fontSize: 16,
              background:
                "linear-gradient(90deg, #0500FF -9.8%, #BD00FF 120.59%)",
              borderRadius: 10,
              border: 0,
              color: "#ffffff",
              marginTop: 20,
              cursor: "pointer",
              fontFamily: "Public sans",
            }}
          >
            Télécharger mon CV
          </button>
        </div>
      </div>
    </div>
  );
}
