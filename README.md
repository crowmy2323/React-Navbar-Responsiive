Responsive React Navbar

A lightweight, responsive React navbar component with smooth collapse animations, auto-height adjustment, and customizable links and social icons.

Features





Responsive Design: Seamless mobile (< 768px) and desktop (≥ 768px) support



Smooth Animations: 0.6s height/transform and 0.5s opacity transitions for collapse



Auto-Height: Dynamically adjusts collapse height based on link count



Social Icons: Hidden in mobile collapse, visible on desktop



Centered Links: Middle-aligned with hover underline effect



Customizable: Supports custom logo, links, and social icons



RTL Support: Built for right-to-left languages (e.g., Persian)



No Bootstrap JS: Uses React state for collapse control

Installation





Install dependencies:

npm install react react-dom react-bootstrap bootstrap react-icons



Add Vazir font in public/index.html:

<link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />



Import Bootstrap CSS in src/index.js:

import 'bootstrap/dist/css/bootstrap.min.css';

Usage





Place Navbar.jsx and index.css in src/components and src/styles.



Configure DataHeader.js:

import { FaTwitter, FaFacebook } from 'react-icons/fa';

export const links = [
  { id: 1, url: '#', text: 'Home' },
  { id: 2, url: '#', text: 'About' },
  { id: 3, url: '#', text: 'Services' },
  { id: 4, url: '#', text: 'Contact' },
];

export const socials = [
  { id: 1, url: '#', icon: <FaTwitter /> },
  { id: 2, url: '#', icon: <FaFacebook /> },
];



Import and use <Navbar /> in your app.

Files





Navbar.jsx: Main component with collapse logic



index.css: Styles for navbar, toggler, and animations



DataHeader.js: Configuration for links and social icons



logo/example logo.png: Placeholder logo

Notes





Requires Vazir font for Persian RTL support.



Tested for smooth animations and no visual glitches (e.g., links flickering during collapse).



Uses react-icons for toggler and social icons.

License

MIT