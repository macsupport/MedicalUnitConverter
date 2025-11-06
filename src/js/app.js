// Import Framework7
import js from 'jquery';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';
import Framework7Keypad from 'framework7-plugin-keypad';
// Import Framework7-Svelte Plugin
import Framework7Svelte from 'framework7-svelte';

import dom7 from 'dom7';
// Import Framework7 Styles

import 'framework7/css/bundle';


  import '../static/tailwind.css';
   import '../css/framework7-keypad.min.css';
 
// Import Icons and App Custom Styles
   import '../css/fontawesome.min.css';
import '../css/duotone.min.css';
import "../css/brands.min.css";
import "../css/solid.min.css";
import "../css/regular.min.css";
import '../css/icons.css';
import '../css/app.css';
import '../css/vet.css';
import '../static/print.css';


// import pdfFonts from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;


// Import App Component
import App from '../components/app.svelte';

// // install plugin


//Init F7 Svelte Plugin

Framework7.use(Framework7Svelte);
Framework7.use(Framework7Keypad);

var $$ = dom7;
// Mount Svelte App
const app = new App({
  target: document.getElementById('app'),
  
});


