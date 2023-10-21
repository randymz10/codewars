import "./style.css";
// import { between, htmlBetween } from "./kyu8/between/between";
import {roundToNext5, htmlRoundToNext5, roundNumber} from './kyu7/index';
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

const app = document.querySelector("#app");

const title = document.createElement("h1");
const subtitle = document.createElement("h2");

title.append("Ejercicios codewars");
subtitle.append("Round up to the next multiple of 5");

app.appendChild(title);
app.appendChild(subtitle);
app.appendChild(htmlRoundToNext5);

roundNumber;
console.log(roundNumber);

