let portfolio = [
  {
    title: 'Client: Silver Ridge',
    link: 'https://silverridgecontracting.com',
    alt: "preview of Ethan Zitting's work on silverridgeconsulting.com",
    mobileSrc: './images/websites/silver-mb.png',
    desktopSrc: './images/websites/silver-dt.png'
  },
  {
    title: 'Client: Epsilon',
    link: 'https://epsilonintegratedsolutions.com',
    alt: "preview of Ethan Zitting's work on epsilonintegratedsolutions.com",
    mobileSrc: './images/websites/epsilon-mb.png',
    desktopSrc: './images/websites/epsilon-dt.png'
  },
  {
    title: "Weather App",
    link: "https://ethanzitting.github.io/weather-app/",
    alt: "preview of Ethan Zitting's work on his to-go-app",
    mobileSrc: './images/websites/weather-mb.png',
    desktopSrc: './images/websites/weather-dt.png'
  },
  {
    title: "To-Do List App",
    link: "https://ethanzitting.github.io/to-do-app/",
    alt: "preview of Ethan Zitting's work on his to-go-app",
    mobileSrc: './images/websites/to-do-mb.png',
    desktopSrc: './images/websites/to-do-dt.png'
  },
  {
    title: "Meme Page",
    link: "https://ethanzitting.github.io/ACME-Cafe/",
    alt: "preview of Ethan Zitting's work on his acme-cafe-app",
    mobileSrc: './images/websites/acme-mb.png',
    desktopSrc: './images/websites/acme-dt.png'
  },
];

let workHistory = [
  {
    title: "Delivery Driver",
    company: "Celestine Logistics",
    focus: "Standard Package Delivery",
    description: `I'm using this position to pay my living expenses while studying programming.
    Here I've gained a deep understanding of the extremely high efficiency of modern parcel delivery techniques.
    I've been able to practice steady, careful attention to detail for long durations.
    I've honestly had a lot of fun exploring basically every part of Colorado Springs and the surrounding towns.
    And, I've been powering through my to-do list of audiobooks.`,
  },
  {
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
  {
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
  }
];

const $ = (element) => document.querySelector(element);


/* Loads portfolio of websites */
const portfolioDiv = $('#portfolio');

// Determine if the user is on mobile or desktop
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// Generate the HTML for each element accordingly
let userOnMobile = window.mobileCheck();


for (let i = 0; i < portfolio.length; i++) {
  portfolioDiv.innerHTML += `
    <a href="${portfolio[i].link}" class="website-card" target='_blank' rel='noreferrer'>
      <div class="card">
      <img class="card-img-top ${userOnMobile ? 'mobileHeight' : 'desktopHeight'}" src="${userOnMobile ? portfolio[i].mobileSrc : portfolio[i].desktopSrc}" alt="${portfolio[i].alt}">
        <div class="card-body">
          <h7 class="card-title">${portfolio[i].title}</h7>
        </div>
      </div>
    </a>
  `
}

/* Fixes broken mobile navbar hamburger button */

const navbarToggler = $('.navbar-toggler');
const collapsingMenu = $('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  collapsingMenu.classList.toggle('show');
})


