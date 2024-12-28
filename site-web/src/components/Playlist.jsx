import React from "react";
import { SERVER_URL } from "../assets/js/consts";
import { NavLink } from "react-router-dom";

export default function Playlist({ playlist }) {
  const { id, name, description, thumbnail } = playlist;

  return (
    <NavLink className="playlist-item flex-column" to={`/playlist/${id}`}>
      <div className="playlist-preview">
        {/* TODO: Ajouter l'image de la playlist */}
        <img alt={`Thumbnail for ${name}`} src={`${SERVER_URL}/${thumbnail}`} />
        <i className="fa fa-2x fa-play-circle hidden playlist-play-icon"></i>
      </div>
      {/* TODO: Ajouter les informations de la playlist */}
      <p>{name}</p>
      <p>{description}</p>
    </NavLink>
  );
}
