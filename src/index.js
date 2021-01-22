import { makeDiv } from "./make-div.js";

const profBtn = document.getElementById("professionalBtn");
const persBtn = document.getElementById("personalBtn");
const main = document.querySelector("main");

let ethan = {
  header: "Hi, I'm Ethan Zitting",
  bio:
    "I'm skilled at starting companies, managing projects, and building websites.",
  headshot: {
    link: "../images/headShot.jpg",
    alt: "Headshot of Ethan",
  },
  technologies: [
    "HTML/CSS/JS",
    "NodeJs",
    "JQuery",
    "AJAX",
    "ESLint",
    "Prettier",
    "Webpack",
    "Git",
    "Linux",
    "Bash",
    "Python",
  ],
  traits: ["Organized", "Self-Motivated", "Coachable", "Genuine", "Passionate"],
  socials: {
    email: {
      link: "mailto:ethanzitting@gmail.com",
      src: "../images/Gmail.png",
      alt: "Email Icon",
    },
    linkedIn: {
      link: "https://www.linkedin.com/in/ethanzitting/",
      src: "../images/LinkedIn.png",
      alt: "LinkedIn Icon",
    },
    github: {
      link: "https://github.com/ethanzitting",
      src: "../images/GitHub.png",
      alt: "GitHub Icon",
    },
  },
};

let portfolio = {
  toDo: {
    link: "https://ethanzitting.github.io/to-do-app/",
    mobileImage: "",
    desktopImage: "",
  },
  acmeCafe: {
    link: "https://ethanzitting.github.io/ACME-Cafe/",
    modileImage: "",
    desktopImage: "",
  },
  ticTacToe: {
    link: "https://ethanzitting.github.io/tic-tac-toe/",
    modileImage: "",
    desktopImage: "",
  },
};

let workHistory = {
  celestine: {
    title: "Delivery Driver",
    company: "Celestine Logistics",
    focus: "Standard Package Delivery",
    description: `I'm using this position to pay my living expenses while studying programming.
    Here I've gained a deep understanding of the extremely high efficiency of modern parcel delivery techniques.
    I've been able to practice steady, careful attention to detail for long durations.
    I've honestly had a lot of fun exploring basically every part of Colorado Springs and the surrounding towns.
    And, I've been powering through my to-do list of audiobooks.`,
  },
  capstone: {
    title: "Inside Sales Rep",
    company: "Capstone Tax Consulting",
    focus: "Cold-Call Phone Sales",
    description: `I got this job in order to get my first major experience with sales.
    This was a cold-calling position selling tax debt negotiation services, so it was very difficult.
    I'm grateful that is was difficult. It made it tremendously valuable experience.`,
  },
  zittingSteel: {
    title: "Project Manager",
    company: "Zitting Steel",
    focus: "Project Management, Construction R&D, Conflict Resolution",
    description: `I was brought on to research, plan, and carry out the upgrade of our fabrication facilitie's quality control processes to meet AISC compliance.
    After doing this and demonstrating with it how quickly I can take on new projects and learn new skills, I was put in charge of managing the installation of our steel on a large residential construction site.
    Our work on this jobsite had been gridlocked for 4+ months, and there was a great deal of ill-will as a result.
    I quickly got production moving again.
    I learned BluBeam bidding software and completed several of our bids.
    Errors and conflict were greatly reduced, and work has been completed.`,
  },
  slipwell: {
    title: "C.O.O.",
    company: "Slipwell Industries",
    focus: "Business Development, Construction R&D, Project Management",
    description: `Here I lead the R&D of a proprietary new concrete tower production machine.
    I learned Onshape 3D Design software and lead the design and testing of our machine.
    I worked with an outside structral engineer to update and refine the designs.
    I establish the legal entity, company structure, and business habits.
    I kept the business books and filed the taxes.
    I oversaw the production of marketing material.
    I managed the social media and online presence of the company.`,
  },
  flickertail: {
    title: "C.O.O.",
    company: "Flickertail Holdings",
    focus: "Business Development, R&D, and Financial Decision-Making",
    description: `Here I helped branstorm company ideas, research industries, and created financial models.
    I established legal entities, and reviewed contracts.
    I traveled and took part in negotiations.
    I became familiar with using online financial exchanges.`,
  },
};

let loadProf = () => {
  // Clear Existing Page
  main.innerHTML = "";

  // Build HeadShot and Intro Bio
  // Build broad container
  const introContainer = makeDiv("main", "intro-container");
  introContainer.classList.add('intro-container', 'flex');
  
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
  const bioContainer = makeDiv("#intro-container", "bio-container", bioHTML);
  bioContainer.classList.add('bio-container');
  
  // Builds headshot on page
  let picHTML = `<img class="headShot" src="${ethan.headshot.link}" alt="${ethan.headshot.alt}"/>`
  const picContainer = makeDiv("#intro-container", "pic-container", picHTML);
  picContainer.classList.add('pic-container');

  // Build Technologies List and Character Traits
  const skillsContainer = makeDiv('main', 'skills-container');
  skillsContainer.classList.add('skills-container', 'flex');

  // Build HTML for and add technologies div
  let techHTML = `<h1>Technologies</h1>`;
  for (let i = 0; i < ethan.technologies.length; i++) {
    techHTML += `<br>${ethan.technologies[i]}`;
  }
  const techContainer = makeDiv('#skills-container', 'techContainer', techHTML);

  // Build Work History

  // Build Portfolio
};

profBtn.addEventListener("click", () => {
  loadProf();
});
