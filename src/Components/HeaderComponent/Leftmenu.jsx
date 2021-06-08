import React, { Fragment } from "react";

const Leftmenu = () => {
  return (
    <Fragment>
      <div className="leftMenu">
        <div className="logoBlock">
          <img className="logo" src="ZEE5_logo.svg" alt="zee logo" />
        </div>
        <div className="menuBlock">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Tv Shows</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">Web series</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Premium</a>
            </li>
            <li>
              <a href="/">live tv</a>
            </li>
            <li>
              <a href="/">zee plex</a>
            </li>
            <div className="dropdown">
              <i class="fas fa-th"></i>
              <div className="dropdown-content">
                <a href="/">Premium</a>
                <a href="/">Live Tv</a>
                <a href="/">ZEE PLEX</a>
                <a href="/">Play</a>
                <a href="/">web stories</a>
                <a href="/">Video</a>
                <a href="/">Stories</a>
                <a href="/">Music</a>
                <a href="/">kids</a>
                <a href="/">channels</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Leftmenu;
