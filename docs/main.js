/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-div.js */ \"./src/make-div.js\");\n\n\nconst profBtn = document.getElementById(\"professionalBtn\");\nconst persBtn = document.getElementById(\"personalBtn\");\nconst main = document.querySelector(\"main\");\n\nlet ethan = {\n  header: \"Hi, I'm Ethan Zitting\",\n  bio:\n    \"I'm skilled at starting companies, managing projects, and building websites.\",\n  headshot: {\n    link: \"../images/headShot.jpg\",\n    alt: \"Headshot of Ethan\",\n  },\n  technologies: [\n    \"HTML/CSS/JS\",\n    \"NodeJs\",\n    \"JQuery\",\n    \"AJAX\",\n    \"ESLint\",\n    \"Prettier\",\n    \"Webpack\",\n    \"Git\",\n    \"Linux\",\n    \"Bash\",\n    \"Python\",\n  ],\n  traits: [\"Organized\", \"Self-Motivated\", \"Coachable\", \"Genuine\", \"Passionate\"],\n  socials: {\n    email: {\n      link: \"mailto:ethanzitting@gmail.com\",\n      src: \"../images/Gmail.png\",\n      alt: \"Email Icon\",\n    },\n    linkedIn: {\n      link: \"https://www.linkedin.com/in/ethanzitting/\",\n      src: \"../images/LinkedIn.png\",\n      alt: \"LinkedIn Icon\",\n    },\n    github: {\n      link: \"https://github.com/ethanzitting\",\n      src: \"../images/GitHub.png\",\n      alt: \"GitHub Icon\",\n    },\n  },\n};\n\nlet portfolio = {\n  toDo: {\n    link: \"https://ethanzitting.github.io/to-do-app/\",\n    mobileImage: \"\",\n    desktopImage: \"\",\n  },\n  acmeCafe: {\n    link: \"https://ethanzitting.github.io/ACME-Cafe/\",\n    modileImage: \"\",\n    desktopImage: \"\",\n  },\n  ticTacToe: {\n    link: \"https://ethanzitting.github.io/tic-tac-toe/\",\n    modileImage: \"\",\n    desktopImage: \"\",\n  },\n};\n\nlet workHistory = {\n  celestine: {\n    title: \"Delivery Driver\",\n    company: \"Celestine Logistics\",\n    focus: \"Standard Package Delivery\",\n    description: `I'm using this position to pay my living expenses while studying programming.\n    Here I've gained a deep understanding of the extremely high efficiency of modern parcel delivery techniques.\n    I've been able to practice steady, careful attention to detail for long durations.\n    I've honestly had a lot of fun exploring basically every part of Colorado Springs and the surrounding towns.\n    And, I've been powering through my to-do list of audiobooks.`,\n  },\n  capstone: {\n    title: \"Inside Sales Rep\",\n    company: \"Capstone Tax Consulting\",\n    focus: \"Cold-Call Phone Sales\",\n    description: `I got this job in order to get my first major experience with sales.\n    This was a cold-calling position selling tax debt negotiation services, so it was very difficult.\n    I'm grateful that is was difficult. It made it tremendously valuable experience.`,\n  },\n  zittingSteel: {\n    title: \"Project Manager\",\n    company: \"Zitting Steel\",\n    focus: \"Project Management, Construction R&D, Conflict Resolution\",\n    description: `I was brought on to research, plan, and carry out the upgrade of our fabrication facilitie's quality control processes to meet AISC compliance.\n    After doing this and demonstrating with it how quickly I can take on new projects and learn new skills, I was put in charge of managing the installation of our steel on a large residential construction site.\n    Our work on this jobsite had been gridlocked for 4+ months, and there was a great deal of ill-will as a result.\n    I quickly got production moving again.\n    I learned BluBeam bidding software and completed several of our bids.\n    Errors and conflict were greatly reduced, and work has been completed.`,\n  },\n  slipwell: {\n    title: \"C.O.O.\",\n    company: \"Slipwell Industries\",\n    focus: \"Business Development, Construction R&D, Project Management\",\n    description: `Here I lead the R&D of a proprietary new concrete tower production machine.\n    I learned Onshape 3D Design software and lead the design and testing of our machine.\n    I worked with an outside structral engineer to update and refine the designs.\n    I establish the legal entity, company structure, and business habits.\n    I kept the business books and filed the taxes.\n    I oversaw the production of marketing material.\n    I managed the social media and online presence of the company.`,\n  },\n  flickertail: {\n    title: \"C.O.O.\",\n    company: \"Flickertail Holdings\",\n    focus: \"Business Development, R&D, and Financial Decision-Making\",\n    description: `Here I helped branstorm company ideas, research industries, and created financial models.\n    I established legal entities, and reviewed contracts.\n    I traveled and took part in negotiations.\n    I became familiar with using online financial exchanges.`,\n  },\n};\n\nlet loadProf = () => {\n  // Clear Existing Page\n  main.innerHTML = \"\";\n\n  // Build HeadShot and Intro Bio\n  // Build broad container\n  const introContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)(\"main\", \"intro-container\");\n  introContainer.classList.add('intro-container', 'flex');\n  \n  // Build HTML for my intro text and links\n  let bioHTML = `<h1>${ethan.header}</h1>`;\n  bioHTML += `<br><p>${ethan.bio}</p>`;\n  // Adds social media buttons\n  bioHTML += `<a href=\"${ethan.socials.email.link}\" target=\"_blank\">\n              <img class=\"social-icon\" src=\"${ethan.socials.email.src}\" alt=\"${ethan.socials.email.alt}\"/></a>`;\n  bioHTML += `<a href=\"${ethan.socials.linkedIn.link}\" target=\"_blank\">\n              <img class=\"social-icon\" src=\"${ethan.socials.linkedIn.src}\" alt=\"${ethan.socials.linkedIn.alt}\"/></a>`;\n  bioHTML += `<a href=\"${ethan.socials.github.link}\" target=\"_blank\">\n              <img class=\"social-icon\" src=\"${ethan.socials.github.src}\" alt=\"${ethan.socials.github.alt}\"/></a>`;\n\n  // Build the container for my intro text and links\n  const bioContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)(\"#intro-container\", \"bio-container\", bioHTML);\n  bioContainer.classList.add('bio-container');\n  \n  // Builds headshot on page\n  let picHTML = `<img class=\"headShot\" src=\"${ethan.headshot.link}\" alt=\"${ethan.headshot.alt}\"/>`\n  const picContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)(\"#intro-container\", \"pic-container\", picHTML);\n  picContainer.classList.add('pic-container');\n\n  // Build Technologies List and Character Traits\n  const skillsContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('main', 'skills-container');\n  skillsContainer.classList.add('skills-container', 'flex');\n\n  // Build HTML for and add technologies div\n  let techHTML = `<h1>Technologies</h1>`;\n  for (let i = 0; i < ethan.technologies.length; i++) {\n    techHTML += `<br>${ethan.technologies[i]}`;\n  }\n  const techContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)('#skills-container', 'techContainer', techHTML);\n\n  // Build Work History\n\n  // Build Portfolio\n};\n\nprofBtn.addEventListener(\"click\", () => {\n  loadProf();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/make-div.js":
/*!*************************!*\
  !*** ./src/make-div.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDiv\": () => /* binding */ makeDiv\n/* harmony export */ });\nconst makeDiv = (parentID, childID, htmlToUse, placement) => {\n  const parent = document.querySelector(`${parentID}`);\n  const child = document.createElement(\"div\");\n  child.setAttribute(\"id\", `${childID}`);\n  htmlToUse = htmlToUse || \"\";\n  child.innerHTML = htmlToUse;\n  placement = placement || \"after\";\n  if (placement == \"before\") {\n    parent.prepend(child);\n  } else if (placement == \"after\") {\n    parent.appendChild(child);\n  }\n  return child;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/make-div.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;