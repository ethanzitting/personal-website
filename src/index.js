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

/*
 -Redo resume to match Kenton's format
 -Drop "I have a ... mind and ..."
 -"I'm a skilled project manager, business starter, and tech whisperer
 -"I'm a very driven individual".
 -"Strong, team-oriented"
 -Amazon: "Received accolates for time management on my routes".
 -Capstone: "Initial Clientel Acquisition".
 -Zitting Steel: "Researched, Strategizeds, and Implemented Production Process Upgrades"
 --: Less masterbation in description.
 -Slipwell: Reword First One
 -Move Epsilon over to Work Experience
 -'Ops Management in Education
 -Recent Professional Achievements
*/
