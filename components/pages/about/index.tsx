import { Grid } from "@mui/material";
import React from "react";
import Gradient from "rgt";
import { MenuIndication } from "../../shared/MenuIndication";

export default function AboutDescription() {
  return (
    <>
      <MenuIndication icon="info" title="A propos" />

      <div
        style={{
          width: "50%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Grid container>
            <Grid item>
              <p
                style={{
                  // textAlign: "justify",
                  marginBottom: 20,
                  lineHeight: 2,
                }}
              >
                <span
                  style={{
                    fontSize: 30,
                  }}
                >
                  J’
                </span>
                ai suivis une fomation d’ingénieur en informatique spécialité :
                Génie Logiciel et Base de données. Je travaille en tant que
                développeur Fullstack js indépendament aujourd’hui. Je suis
                passionnées des technologies Javascript et sur le côté backend,
                j'utilise Nestjs et Expressjs tandisque côté front, le plus
                souvent c'est Reactjs avec la framework NEXTJS.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
