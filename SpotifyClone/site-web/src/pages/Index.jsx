import React, { useState, useEffect, useContext } from "react";
import Playlist from "../components/Playlist";
import PlaylistContext from "../contexts/PlaylistContext";
import Song from "../components/Song";

export default function Index() {

  const api = useContext(PlaylistContext).api;
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");
  const [exactMatch, setExactMatch] = useState(false);
  useEffect(() => {
    api
      .fetchAllPlaylists()
      .then((playlists) => setPlaylists(playlists))
      .catch(() => setPlaylists([]));
    // TODO : récupérer les chansons du serveur DONE
    api
      .fetchAllSongs()
      .then((songs) => setSongs(songs))
      .catch(() => setSongs([]));
  }, []);

  /**
   * TODO : implémenter la recherche et la mise à jour de l'interface
   * Effectue une recherche par mot clé sur le serveur.
   * Si exactMatch = true, la recherche est sensible à la case
   * @param {Event} event evenement de soumission à bloquer pour ne pas rafraichir la page
   * @param {string} query mot clé pour la recherche
   * @param {boolean} exactMatch si true, la recherche est sensible à la case
   */
  const handleSearch = async (event, query, exactMatch) => {
    event.preventDefault();
    // TODO : implémenter la recherche et la mise à jour de l'interface DONE
    const results = await api.search(query, exactMatch);
    setPlaylists(results.playlists || []);
    setSongs(results.songs || []);
  };
  return (
    <>
      <main id="main-area" className="flex-column">
        {/*TODO : ajouter la barre de recherche DONE */ }
        <div id="search-bar">
        <form id="search-form" className="flex-row">
        <input
          id="search-input"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          id="search-btn"
          className="fa fa-2x fa-search"
          type="submit"
          onClick={(event) => handleSearch(event, query, exactMatch)}
        ></button>
        <section id="exact-parent" className="flex-row">
          <input
            id="exact-search"
            type="checkbox"
            onChange={(e) => setExactMatch(e.target.checked)}
          />
          <label htmlFor="exact-search">Exact</label>
        </section>
      </form>
    </div>
        <div id="playlist-list">
          <h1>Mes Playlists</h1>
          <section id="playlist-container" className="playlist-container">
            {playlists.map((playlist) => (
              <Playlist key={playlist.id} playlist={playlist} />
            ))}
          </section>
        </div>
        <div id="songs-list">
          {songs.length > 0 ? (
            <>
              <h1>Mes Chansons</h1>
              <section id="song-container" className="song-container">
                {songs.map((song) => (
                  <Song key={song.id} song={song} />
                ))}
              </section>
            </>
          ) : (
            <h1>Mes Chansons</h1>
          )}
        </div>
      </main>
    </>
  );
}
