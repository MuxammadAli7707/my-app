import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import Header from './header/header';
import Hero from './hero/Hero';
import Friends from './Friends/friends';
import CardDesc from './card-desc/card-desc';
import Video from './videoss/video';
import Price from './price/price';
import Apps from './apps/apps';
import Footer from './footer/footer';

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(<Header/>);

const hero = ReactDOM.createRoot(document.getElementById("hero"));
hero.render(<Hero/>);

const friends = ReactDOM.createRoot(document.getElementById("friends"));
friends.render(<Friends />);

const cardDesc = ReactDOM.createRoot(document.getElementById("card-desc"));
cardDesc.render(<CardDesc />);

const video = ReactDOM.createRoot(document.getElementById("video"));
video.render(<Video />);

const price = ReactDOM.createRoot(document.getElementById("price"));
price.render(<Price />);

const apps = ReactDOM.createRoot(document.getElementById("apps"));
apps.render(<Apps />);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer />);