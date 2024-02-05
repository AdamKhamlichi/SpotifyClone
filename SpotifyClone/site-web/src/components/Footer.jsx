import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Player from "./Player";

export default function Footer() {
  function loadPlayer(pathname) {
    if (pathname.startsWith("/playlist")) {
      return <Player />;
    } else {
      return (
        <div>
          <p>
            Choisir une playlist à travers la
            <NavLink to="/index"> Bibliothèque</NavLink> pour la faire jouer
          </p>
        </div>
      );
    }
  }
  return (
    <footer id="playing-bar">
      {loadPlayer(useLocation().pathname)}
      <div id="creators">
        <p>Adam Khamlichi 2208396</p>
        <p>Xavier Choiniere 2204177</p>
      </div>
    </footer>
  );
}
