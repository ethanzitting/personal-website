import {ethan, portfolio, workHistory} from './ethan.js';
import {makeDiv} from './make-div.js';

let loadProf = () => {
  const main = document.querySelector("main");

  // Clear Existing Page
  main.innerHTML = "";

  // Build HeadShot and Intro Bio
  // Build broad container
  
  const introContainer = makeDiv({
    parentId: 'main',
    childId: 'intro-container',
    classList: [
      'intro-container',
      'flex'
    ]
  });
  
  // Build HTML for my intro text and links
  let bioHTML = `<h1>${ethan.header}</h1>`;
  bioHTML += `<br><p>${ethan.bio}</p>`;
  // Adds social media buttons
  bioHTML += `<a href="${ethan.socials.email.link}" target="_blank">
              <img class="social-icon" src="${ethan.socials.email.src}" alt="${ethan.socials.email.alt}"/></a>`;
  bioHTML += `<a href="${ethan.socials.linkedIn.link}" target="_blank">
              <img class="social-icon" src="${ethan.socials.linkedIn.src}" alt="${ethan.socials.linkedIn.alt}"/></a>`;
  bioHTML += `<a href="${ethan.socials.github.link}" target="_blank">
              <img class="social-icon" src="${ethan.socials.github.src}" alt="${ethan.socials.github.alt}"/></a>`;

  // Build the container for my intro text and links
  const bioContainer = makeDiv({
    parentId: "#intro-container",
    childId: "bio-container",
    html: bioHTML,
    classList: [
      'bio-container',
    ]
  });

  // Builds headshot on page
  let picHTML = `<img class="headShot" src="${ethan.headshot.link}" alt="${ethan.headshot.alt}"/>`;
  const picContainer = makeDiv({
    parentId: "#intro-container",
    childId: "pic-container",
    html: picHTML,
    classList: [
      'pic-container',
    ]
  });

  // Build Technologies List and Character Traits
  const skillsContainer = makeDiv({
    parentId: "main",
    childId: "skills-container",
    classList: [
      'skills-container',
      'flex'
    ]
  });

  // Build HTML for and add technologies div
  let techHTML = `<h1>Technologies</h1>`;
  for (let i = 0; i < ethan.technologies.length; i++) {
    techHTML += `<br>${ethan.technologies[i]}`;
  }
  const techContainer = makeDiv({
    parentId: '#skills-container',
    childId: 'tech-container',
    html: techHTML,
    classList: [
      'tech-container'
    ]
  });

  // Build HTML for and add character traits list
  let traitHTML = `<h1>Character Traits</h1>`;
  for (let i = 0; i < ethan.traits.length; i++) {
    traitHTML += `<br>${ethan.traits[i]}`;
  }
  const traitContainer = makeDiv({
    parentId: '#skills-container',
    childId: 'trait-container',
    html: traitHTML,
    classList: [
      'trait-container'
    ]
  })

  // Build Work History
  let workContainer = makeDiv({
    parentId: 'main',
    childId: 'work-container',
    html: '<h1>Work History</h1>',
    classList: [
      'work-container'
    ]
  })

  // Add Container for job tiles
  let workTileContainer = makeDiv({
    parentId: "#work-container",
    childId: "work-tile-container",
    classList: [
      'work-tile-container',
      'flex',
    ]
  });

  // Build Job Tiles
  for (let i = 0; i < workHistory.length; i++) {
    let tileHTML = `<h1>${workHistory[i].title}</h1>
                    <h3>${workHistory[i].company}</h3>
                    <p>${workHistory[i].focus}</p>`;
    let tile = makeDiv({
      parentId: "#work-tile-container",
      childId: `job-${i}`, 
      html: tileHTML,
      classList: ['job-tile']
    });
  }

  // Build Portfolio
  let portContainer = makeDiv({
    parentId: "main",
    childId: "port-container",
    html: `<h1>Portfolio</h1>`,
    classList: ['port-container']
  });

  let portTileContainer = makeDiv({
    parentId: "#port-container",
    childId: "port-tile-container"
  });
  
  for (let i = 0; i < portfolio.length; i++) {
    let tileHTML = `<h3>${portfolio[i].title}</h3>
                    <a href="${portfolio[i].link}" target="_blank">
                    <img src="${portfolio[i].desktopSrc}"/></a>`;
    makeDiv({
      parentId: "#port-tile-container",
      childId: `port-${i}`,
      html: tileHTML
    });
  }
  

};

export {
  loadProf
}