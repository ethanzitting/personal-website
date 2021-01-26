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

/***/ "./src/ethan.js":
/*!**********************!*\
  !*** ./src/ethan.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ethan\": () => /* binding */ ethan,\n/* harmony export */   \"portfolio\": () => /* binding */ portfolio,\n/* harmony export */   \"workHistory\": () => /* binding */ workHistory\n/* harmony export */ });\nlet ethan = {\n  header: \"Hi, I'm Ethan Zitting\",\n  bio:\n    \"I'm skilled at starting companies, managing projects, and building websites.\",\n  headshot: {\n    link: \"./images/headshot.jpg\",\n    alt: \"Headshot of Ethan\",\n  },\n  technologies: [\n    \"HTML/CSS/JS\",\n    \"NodeJs\",\n    \"JQuery\",\n    \"AJAX\",\n    \"ESLint\",\n    \"Prettier\",\n    \"Webpack\",\n    \"Git\",\n    \"Linux\",\n    \"Bash\",\n    \"Python\",\n  ],\n  traits: [\"Organized\", \"Self-Motivated\", \"Coachable\", \"Genuine\", \"Passionate\"],\n  socials: {\n    email: {\n      link: \"mailto:ethanzitting@gmail.com\",\n      src: \"./images/gmail.png\",\n      alt: \"Email Icon\",\n    },\n    linkedIn: {\n      link: \"https://www.linkedin.com/in/ethanzitting/\",\n      src: \"./images/linkedin.png\",\n      alt: \"LinkedIn Icon\",\n    },\n    github: {\n      link: \"https://github.com/ethanzitting\",\n      src: \"./images/github.png\",\n      alt: \"GitHub Icon\",\n    },\n  },\n};\n\nlet portfolio = [\n  {\n    title: \"A To-Do List App\",\n    link: \"https://ethanzitting.github.io/to-do-app/\",\n    mobileSrc: \"\",\n    desktopSrc: \"./images/to-do-desktop.png\",\n  },\n  {\n    title: \"A Joke Restaurant Landing Page\",\n    link: \"https://ethanzitting.github.io/ACME-Cafe/\",\n    modileSrc: \"\",\n    desktopSrc: \"./images/acme-cafe-desktop.png\",\n  },\n  {\n    title: \"A Tic-Tac-Toe Web Game\",\n    link: \"https://ethanzitting.github.io/tic-tac-toe/\",\n    modileSrc: \"\",\n    desktopSrc: \"./images/tic-tac-toe-desktop.png\",\n  },\n];\n\nlet workHistory = [\n  {\n    title: \"Delivery Driver\",\n    company: \"Celestine Logistics\",\n    focus: \"Standard Package Delivery\",\n    description: `I'm using this position to pay my living expenses while studying programming.\n    Here I've gained a deep understanding of the extremely high efficiency of modern parcel delivery techniques.\n    I've been able to practice steady, careful attention to detail for long durations.\n    I've honestly had a lot of fun exploring basically every part of Colorado Springs and the surrounding towns.\n    And, I've been powering through my to-do list of audiobooks.`,\n  },\n  {\n    title: \"Inside Sales Rep\",\n    company: \"Capstone Tax Consulting\",\n    focus: \"Cold-Call Phone Sales\",\n    description: `I got this job in order to get my first major experience with sales.\n    This was a cold-calling position selling tax debt negotiation services, so it was very difficult.\n    I'm grateful that is was difficult. It made it tremendously valuable experience.`,\n  },\n  {\n    title: \"Project Manager\",\n    company: \"Zitting Steel\",\n    focus: \"Project Management, Construction R&D, Conflict Resolution\",\n    description: `I was brought on to research, plan, and carry out the upgrade of our fabrication facilitie's quality control processes to meet AISC compliance.\n    After doing this and demonstrating with it how quickly I can take on new projects and learn new skills, I was put in charge of managing the installation of our steel on a large residential construction site.\n    Our work on this jobsite had been gridlocked for 4+ months, and there was a great deal of ill-will as a result.\n    I quickly got production moving again.\n    I learned BluBeam bidding software and completed several of our bids.\n    Errors and conflict were greatly reduced, and work has been completed.`,\n  },\n  {\n    title: \"C.O.O.\",\n    company: \"Slipwell Industries\",\n    focus: \"Business Development, Construction R&D, Project Management\",\n    description: `Here I lead the R&D of a proprietary new concrete tower production machine.\n    I learned Onshape 3D Design software and lead the design and testing of our machine.\n    I worked with an outside structral engineer to update and refine the designs.\n    I establish the legal entity, company structure, and business habits.\n    I kept the business books and filed the taxes.\n    I oversaw the production of marketing material.\n    I managed the social media and online presence of the company.`,\n  },\n  {\n    title: \"C.O.O.\",\n    company: \"Flickertail Holdings\",\n    focus: \"Business Development, R&D, and Financial Decision-Making\",\n    description: `Here I helped branstorm company ideas, research industries, and created financial models.\n    I established legal entities, and reviewed contracts.\n    I traveled and took part in negotiations.\n    I became familiar with using online financial exchanges.`,\n  },\n];\n\n\n\n//# sourceURL=webpack:///./src/ethan.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_prof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-prof.js */ \"./src/load-prof.js\");\n\n\nconst profBtn = document.getElementById(\"professionalBtn\");\nconst persBtn = document.getElementById(\"personalBtn\");\n\n(0,_load_prof_js__WEBPACK_IMPORTED_MODULE_0__.loadProf)();\n\nprofBtn.addEventListener(\"click\", () => {\n  (0,_load_prof_js__WEBPACK_IMPORTED_MODULE_0__.loadProf)();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/load-prof.js":
/*!**************************!*\
  !*** ./src/load-prof.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProf\": () => /* binding */ loadProf\n/* harmony export */ });\n/* harmony import */ var _ethan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ethan.js */ \"./src/ethan.js\");\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-div.js */ \"./src/make-div.js\");\n\n\n\nlet loadProf = () => {\n  const main = document.querySelector(\"main\");\n\n  // Clear Existing Page\n  main.innerHTML = \"\";\n\n  // Build HeadShot and Intro Bio\n  // Build broad container\n  \n  const introContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: 'main',\n    childId: 'intro-container',\n    classList: [\n      'intro-container',\n      'flex'\n    ]\n  });\n  \n  // Build HTML for my intro text and links\n  let bioHTML = `<h1>${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.header}</h1>`;\n  bioHTML += `<br><p>${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.bio}</p>`;\n  // Adds social media buttons\n  bioHTML += `<a href=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.email.link}\" target=\"_blank\">\n              <img class=\"social-icon\" src=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.email.src}\" alt=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.email.alt}\"/></a>`;\n  bioHTML += `<a href=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.linkedIn.link}\" target=\"_blank\">\n              <img class=\"social-icon\" src=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.linkedIn.src}\" alt=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.linkedIn.alt}\"/></a>`;\n  bioHTML += `<a href=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.github.link}\" target=\"_blank\">\n              <img class=\"social-icon\" src=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.github.src}\" alt=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.socials.github.alt}\"/></a>`;\n\n  // Build the container for my intro text and links\n  const bioContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: \"#intro-container\",\n    childId: \"bio-container\",\n    html: bioHTML,\n    classList: [\n      'bio-container',\n    ]\n  });\n\n  // Builds headshot on page\n  let picHTML = `<img class=\"headShot\" src=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.headshot.link}\" alt=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.headshot.alt}\"/>`;\n  const picContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: \"#intro-container\",\n    childId: \"pic-container\",\n    html: picHTML,\n    classList: [\n      'pic-container',\n    ]\n  });\n\n  // Build Technologies List and Character Traits\n  const skillsContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: \"main\",\n    childId: \"skills-container\",\n    classList: [\n      'skills-container',\n      'flex'\n    ]\n  });\n\n  // Build HTML for and add technologies div\n  let techHTML = `<h1>Technologies</h1>`;\n  for (let i = 0; i < _ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.technologies.length; i++) {\n    techHTML += `<br>${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.technologies[i]}`;\n  }\n  const techContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: '#skills-container',\n    childId: 'tech-container',\n    html: techHTML,\n    classList: [\n      'tech-container'\n    ]\n  });\n\n  // Build HTML for and add character traits list\n  let traitHTML = `<h1>Character Traits</h1>`;\n  for (let i = 0; i < _ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.traits.length; i++) {\n    traitHTML += `<br>${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.ethan.traits[i]}`;\n  }\n  const traitContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: '#skills-container',\n    childId: 'trait-container',\n    html: traitHTML,\n    classList: [\n      'trait-container'\n    ]\n  })\n\n  // Build Work History\n  let workContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: 'main',\n    childId: 'work-container',\n    html: '<h1>Work History</h1>',\n    classList: [\n      'work-container'\n    ]\n  })\n\n  // Add Container for job tiles\n  let workTileContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: \"#work-container\",\n    childId: \"work-tile-container\",\n    classList: [\n      'work-tile-container',\n      'flex',\n    ]\n  });\n\n  // Build Job Tiles\n  for (let i = 0; i < _ethan_js__WEBPACK_IMPORTED_MODULE_0__.workHistory.length; i++) {\n    let tileHTML = `<h1>${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.workHistory[i].title}</h1>\n                    <h3>${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.workHistory[i].company}</h3>\n                    <p>${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.workHistory[i].focus}</p>`;\n    let tile = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n      parentId: \"#work-tile-container\",\n      childId: `job-${i}`, \n      html: tileHTML,\n      classList: ['job-tile']\n    });\n  }\n\n  // Build Portfolio\n  let portContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: \"main\",\n    childId: \"port-container\",\n    html: `<h1>Portfolio</h1>`,\n    classList: ['port-container']\n  });\n\n  let portTileContainer = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n    parentId: \"#port-container\",\n    childId: \"port-tile-container\"\n  });\n  \n  for (let i = 0; i < _ethan_js__WEBPACK_IMPORTED_MODULE_0__.portfolio.length; i++) {\n    let tileHTML = `<h3>${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.portfolio[i].title}</h3>\n                    <a href=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.portfolio[i].link}\" target=\"_blank\">\n                    <img src=\"${_ethan_js__WEBPACK_IMPORTED_MODULE_0__.portfolio[i].desktopSrc}\"/></a>`;\n    (0,_make_div_js__WEBPACK_IMPORTED_MODULE_1__.makeDiv)({\n      parentId: \"#port-tile-container\",\n      childId: `port-${i}`,\n      html: tileHTML\n    });\n  }\n  \n\n};\n\n\n\n//# sourceURL=webpack:///./src/load-prof.js?");

/***/ }),

/***/ "./src/make-div.js":
/*!*************************!*\
  !*** ./src/make-div.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDiv\": () => /* binding */ makeDiv\n/* harmony export */ });\nconst makeDiv = (divObject) => {\n  const parent = document.querySelector(`${divObject.parentId}`);\n  const child = document.createElement(\"div\");\n  \n  if (divObject.childId) {\n    child.setAttribute(\"id\", `${divObject.childId}`);\n  }\n\n  const html = divObject.html || \"\";\n  child.innerHTML = html;\n\n  if (divObject.classList) {\n    for (let i = 0; i < divObject.classList.length; i++) {\n    child.classList.add(`${divObject.classList[i]}`)\n    }\n  }\n  \n  const placement = divObject.placement || \"after\";\n  if (placement == \"before\") {\n    parent.prepend(child);\n  } else if (placement == \"after\") {\n    parent.appendChild(child);\n  }\n\n  return child;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/make-div.js?");

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