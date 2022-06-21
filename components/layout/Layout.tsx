import Head from "next/head";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Gradient from "rgt";

function Layout({ children }) {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div>
        <span
          style={{
            position: "absolute",
            zIndex: 3,
            margin: 48,
            border: 0,
            cursor: "pointer",
          }}
          onClick={toggle}
        >
          {visible ? (
            <Gradient dir="left-to-right" from="#0500FF" to="#BD00FF">
              <span
                className="material-icons"
                style={{ fontSize: 36, fontWeight: "2" }}
              >
                close
              </span>
            </Gradient>
          ) : (
            <span
              className="material-icons"
              style={{ fontSize: 36, fontWeight: "2" }}
            >
              drag_handle
            </span>
          )}
        </span>
        {visible && <Sidebar setVisible={setVisible} />}
        {children}
      </div>
    </>
  );
}

export default Layout;
