import { loadPers } from './load-pers.js';
import { loadProf } from './load-prof.js';

const profBtn = document.getElementById("professionalBtn");
const persBtn = document.getElementById("personalBtn");

loadProf();

profBtn.addEventListener("click", () => {
  loadProf();
});

persBtn.addEventListener('click', () => {
  loadPers();
})

