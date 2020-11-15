//import menuCardTmpl from "./templates/example.hbs";
//import cards from './example.json';
import BSN from "bootstrap.native"
import moment from 'moment';
import './styles.css';

const T = 1000;
const myModalInstance = new BSN.Modal('.modal');
const mod = document.querySelector('.modal');

myModalInstance.show();

mod.addEventListener('hide.bs.modal', openModal);


function openModal() { 
    setTimeout(()=>{myModalInstance.show()}, T)
};
