import './bootstrap';
import '../css/app.css';
import {navbar} from './components/navbar'
import {Router} from './router';


import.meta.glob([
    '../images/**',
    '../fonts/**',
  ]);
navbar();
Router();

