// importS
import './styles/style.css';
import { addScores, getScores } from './modules/scores.js';
import addData from './modules/data.js';

// global variables
const form = document.getElementById('form');
const refresh = document.getElementById('refresh');

// Events
refresh.addEventListener('click', () => {
  getScores()
    .then((obj) => {
      const scores = obj.result;
      addData(scores);
    });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScores();
  form.reset();
});
