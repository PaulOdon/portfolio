import { Grid } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Gradient from "rgt";

export default function Sidebar(props: any) {
  const closeDialogWhenclick = () => {
    props.setVisible(false);
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      {/* menu container */}
      <div
        style={{
          position: "absolute",
          padding: 48,
          display: "flex",
          background: "#000",
          zIndex: 1,
          height: "100%",
          width: "100%",
          opacity: 0.9,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>

      {/* menu */}
      <div
        style={{
          position: "absolute",
          padding: 48,
          display: "flex",
          zIndex: 2,
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={closeDialogWhenclick}
      >
        <div>
          <Grid container justifyContent={"center"} spacing={3}>
            <Grid item>
              <MenuItem title="Accueil" link="/" icon="maps_home_work" />
            </Grid>
            <Grid item>
              <MenuItem title="A propos" link="/about" icon="info" />
            </Grid>
            <Grid item>
              <MenuItem
                title="Formations"
                link="/trainings"
                icon="tips_and_updates"
              />
            </Grid>
            <Grid item>
              <MenuItem title="Technologies" link="/techno" icon="extension" />
            </Grid>
            <Grid item>
              <MenuItem
                title="Expériences"
                link="/experiences"
                icon="energy_savings_leaf"
              />
            </Grid>
            <Grid item>
              <MenuItem
                title="Réalisations"
                link="/achievements"
                icon="assignment_turned_in"
              />
            </Grid>
            <Grid item>
              <MenuItem title="Services" link="/services" icon="receipt_long" />
            </Grid>
            <Grid item>
              <MenuItem title="Contacts" link="/contacts" icon="dialpad" />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export const MenuItem = (props) => {
  return (
    <Link href={props.link}>
      <a
        style={{
          padding: 10,
          borderRadius: 10,
          margin: 20,
          background: "#000",
          // boxShadow: "5px 4px 22px rgba(255, 255, 255, 0.15)",
          border: "1px solid white",
          // opacity: 0.9,
          height: 100,
          width: 200,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          fontWeight: "50",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <Gradient dir="left-to-right" from="#0500FF" to="#BD00FF">
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span
              className="material-icons"
              style={{ fontSize: 36, fontWeight: "2" }}
            >
              {props.icon}
            </span>
            {props.title}
          </span>
        </Gradient>
      </a>
    </Link>
  );
};
