const body = document.body;
const menu = document.querySelector(".menu");
const borderLeft = document.querySelector(".border.left");
const bigOverlay = document.querySelector(".total-overlay-work");
const hamburgerDesktop = document.querySelector(".hamburger.desktop");
const hamburgerMobile = document.querySelector(".hamburger.mobile");
const mainBoxInner = document.querySelector(".main-box-inner");
const studentGallery = document.querySelectorAll(".gallery .img-box");
const workCROGallery = document.querySelectorAll(".cro .projects .img-box");
const luxusGallery = document.querySelectorAll(".luxus .projects .img-box");

const projects = {
  cms: {
    title: "Full page re-design for Companies Madesimple",
    para: "This project involved re-designing most of the components on the 'company formation' page for Companies Madesimple. My changes are fully responsive as the test run on desktop and mobile.<br><br>\
        I enjoyed building this, especially the second to last section, which is a testimonials carousel that moves on its own.<br><br>\
        Given the nature of the industry, the page might not look like that anymore, as the test code usually runs for only a few months, below is a screenshot of the full page.",
    tech: ["HTML", "CSS", "Javascript", "jQuery"],
    images: ["media/cms.png"],
    ctas: [
      {
        text: "View Page",
        url: "https://www.companiesmadesimple.com/company-formation-name-search.html",
      },
    ],
  },
  tso: {
    title: "TSOHost hero changes",
    para: "I developed the first 3 areas of the 'domain names' page for Tsohost, the hero, and the 2 sections below it. I liked seeing this going live as it's such a nice and clean design for people to enjoy.<br><br>\
        Given the nature of the industry, the page might not look like that anymore, as the test code usually runs for only a few months, below is a screenshot of the full page.",
    tech: ["HTML", "CSS", "Javascript", "jQuery"],
    images: ["media/tso.png"],
    ctas: [{ text: "View Page", url: "https://www.tsohost.com/domain-names" }],
  },
  heart: {
    title: "Full page re-design for Heartinternet",
    para: "This build was about re-designing some components on the Heartinternet home page. I liked working on the 3 cards section, as I think it gives some equilibrium between the hero and the other segments.<br><br>\
        Given the nature of the industry, the page might not look like that anymore, as the test code usually runs for only a few months, below is a screenshot of the full page.",
    tech: ["HTML", "CSS", "Javascript", "jQuery"],
    images: ["media/heart.png"],
    ctas: [{ text: "View Page", url: "https://www.heartinternet.uk/" }],
  },
  listPagination: {
    title: "List Pagination",
    para: "A webpage that filters a list of students and provides pagination links. Each page displays 10 students, you can also filter by name using the search box on the top right corner of the page.",
    tech: ["HTML", "CSS", "Javascript"],
    images: [
      "media/list_pagination_and_filtering_1.png",
      "media/list_pagination_and_filtering_2.png",
      "media/list_pagination_and_filtering_3.png",
    ],
    ctas: [
      {
        text: "Live Demo",
        url: "https://joemessi.github.io/list_pagination_and_filtering/",
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/JoeMessi/list_pagination_and_filtering",
      },
    ],
  },
  libraryManager: {
    title: "SQL library manager",
    para: "A web application for listing, adding, updating, and deleting books in a library application. Download the GitHub repo and follow the instructions in the README file to view the project.",
    tech: ["Javascript", "Node.js", "Express", "Pug", "Sequelize"],
    images: [
      "media/sql-library-manager_1.png",
      "media/sql-library-manager_2.png",
      "media/sql-library-manager_3.png",
    ],
    ctas: [
      {
        text: "GitHub Repo",
        url: "https://github.com/JoeMessi/sql_library_manager",
      },
    ],
  },
  apiRequest: {
    title: "Public API request",
    para: 'An app for a fictional company called "Awesome Startup". It includes working with public APIs, making API requests, and asynchronously handling the data that is returned from the requests.',
    tech: ["HTML", "CSS", "Javascript", "Ajax"],
    images: [
      "media/public_api_request_1.png",
      "media/public_api_request_2.png",
      "media/public_api_request_3.png",
    ],
    ctas: [
      {
        text: "Live Demo",
        url: "https://joemessi.github.io/public_api_request/",
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/JoeMessi/public_api_request",
      },
    ],
  },
  oopGame: {
    title: "OOP game",
    para: "A browser-based, word guessing game built with JavaScript following OOP (Object-Oriented Programming) principles.",
    tech: ["HTML", "CSS", "Javascript", "OOP"],
    images: [
      "media/oop_game_1.png",
      "media/oop_game_2.png",
      "media/oop_game_3.png",
    ],
    ctas: [
      { text: "Live Demo", url: "https://joemessi.github.io/oop_game/" },
      { text: "GitHub Repo", url: "https://github.com/JoeMessi/oop_game" },
    ],
  },
  reactApp: {
    title: "React gallery app",
    para: "A gallery app built with React that asynchronously fetches and displays data from the famous photo hosting site Flickr.",
    tech: ["HTML", "CSS", "Javascript", "React"],
    images: [
      "media/react-gallery-app_1.png",
      "media/react-gallery-app_2.png",
      "media/react-gallery-app_3.png",
    ],
    ctas: [
      {
        text: "Live Demo",
        url: "https://joemessy-react-gallery-app.netlify.app/cats",
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/JoeMessi/react-gallery-app",
      },
    ],
  },
  interactiveForm: {
    title: "Interactive form",
    para: 'A webpage for an interactive registration form for a fictional conference called "FullStack Conf".',
    tech: ["HTML", "CSS", "Javascript", "jQuery"],
    images: [
      "media/interactive_form_1.png",
      "media/interactive_form_2.png",
      "media/interactive_form_3.png",
    ],
    ctas: [
      {
        text: "Live Demo",
        url: "https://joemessi.github.io/interactive-form/",
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/JoeMessi/interactive-form",
      },
    ],
  },
  reactRestApiApp: {
    title: "React and a REST API App",
    para: "A full-stack JavaScript application that allows users to view a list of courses and the detail for a specific course, sign up to create an account or sign in with an existing account, and create, update, or delete courses. Download the GitHub repo and follow the instructions in the README file to view the project.",
    tech: ["React", "Javascript", "Node.js", "Express", "Sequelize"],
    images: [
      "media/app-with-react-and-rest-api_1.png",
      "media/app-with-react-and-rest-api_2.png",
      "media/app-with-react-and-rest-api_3.png",
    ],
    ctas: [
      {
        text: "GitHub Repo",
        url: "https://github.com/JoeMessi/full_stack_app_with_react_and_a_rest_api",
      },
    ],
  },
};

// click events
body.addEventListener("click", (e) => {
  var elem = e.target;

  // hamburger icon x2 (desktop and mobile)
  if (elem.classList.contains("click-overlay-hamb")) {
    // on opening
    if (!elem.parentNode.classList.contains("open")) {
      menu.style.top = window.scrollY + "px";
      elem.parentNode.classList.add("open");
      body.classList.add("overF-hidden");
      mainBoxInner.classList.add("menu-open");
    }
    // on closing
    else if (elem.parentNode.classList.contains("open")) {
      elem.parentNode.classList.remove("open");
      body.classList.remove("overF-hidden");
      mainBoxInner.classList.remove("menu-open");

      if (navigator.userAgent.match(/mobile|android/i)) {
        elem.parentNode.classList.remove("opening");
        borderLeft.classList.remove("expand-leftB");
      }
    }
  }
  // menu is open and link is clicked
  else if (elem.classList.contains("span-menu-link")) {
    e.preventDefault();
    closeMenuOnLinkClicked();
    setTimeout(() => {
      window.location = elem.parentNode.href;
    }, 500);
    mainBoxInner.classList.remove("menu-open");
  }
  // project is clicked and modal is shown
  else if (elem.className.match(/proj-hoverlay/)) {
    body.classList.add("overF-hidden");
    bigOverlay.classList.add("show-overlay");

    let projName = elem.classList[1];
    drawProject(projects[projName]);
  }
  // close overlay project
  else if (
    elem.classList.contains("overlay-close-prj") ||
    elem.classList.contains("total-overlay-work")
  ) {
    body.classList.remove("overF-hidden");
    bigOverlay.classList.remove("show-overlay");
  }
}); // end click event

// mouseover hamburger
body.addEventListener("mouseover", (e) => {
  var elem = e.target;

  // expands border left
  if (elem.classList.contains("click-overlay-hamb")) {
    if (
      !elem.parentNode.classList.contains("open") &&
      !elem.parentNode.classList.contains("mobile")
    ) {
      borderLeft.classList.add("expand-leftB");
      elem.parentNode.classList.add("opening");
    } else if (elem.parentNode.classList.contains("open")) {
      // little animation on hover closing X menu
      // add ca class
    }
  }

  // brings 1 gallery item above the others
  else if (elem.className.match(/proj-hoverlay|hover-overlay/)) {
    zIndexHoverGallery(studentGallery, elem);
    zIndexHoverGallery(workCROGallery, elem);
    zIndexHoverGallery(luxusGallery, elem);
  }
});

// mouseout hamburger
body.addEventListener("mouseout", (e) => {
  var elem = e.target;

  // srinks border left
  if (
    elem.classList.contains("click-overlay-hamb") &&
    !elem.parentNode.classList.contains("mobile")
  ) {
    if (!elem.parentNode.classList.contains("open")) {
      borderLeft.classList.remove("expand-leftB");
      elem.parentNode.classList.remove("opening");
    }
  }
});

function drawProject(proj) {
  // clear
  document.querySelector(
    ".total-overlay-work .inner .screenshots-box"
  ).innerHTML = "";
  document.querySelector(".total-overlay-work .inner").scroll(0, 0);
  // populate
  document.querySelector(
    ".total-overlay-work .inner .text h3.title"
  ).textContent = proj.title;
  document.querySelector(".total-overlay-work .inner .text p.desc").innerHTML =
    proj.para;
  document.querySelector(
    ".total-overlay-work .inner .text div.tech"
  ).innerHTML = proj.tech.map((t) => `<p>${t}</p>`).join("");
  document.querySelector(
    ".total-overlay-work .inner .text .tech-checkout-box .ctas"
  ).innerHTML = proj.ctas
    .map(
      (c) =>
        ` <a href="${c.url}" target="_blank"><button>${c.text}</button></a>`
    )
    .join("");
  document.querySelector(
    ".total-overlay-work .inner .screenshots-box"
  ).innerHTML = proj.images
    .map((i) => `<div class="img-outer"><img src="${i}" alt="${i}"></div>`)
    .join("");
}

function closeMenuOnLinkClicked() {
  hamburgerDesktop.classList.remove("open", "opening");
  hamburgerMobile.classList.remove("open");
  borderLeft.classList.remove("expand-leftB");
  body.classList.remove("overF-hidden");
  mainBoxInner.classList.remove("menu-open");
}

function inlineCloseMenuForInitials() {
  closeMenuOnLinkClicked();
  // if scroll-behavior: smooth; supported
  if (Boolean(getComputedStyle(document.body).scrollBehavior)) {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 400);
  } else {
    smoothScrollDelayed("body");
  }
}

function zIndexHoverGallery(group, elem) {
  group.forEach((item) => {
    item.classList.remove("above");
    item.classList.add("below");
  });
  elem.parentNode.classList.remove("below");
  elem.parentNode.classList.add("above");
}

// loading images beforehand
let imagesHtml = "";
for (p in projects) {
  projects[p].images.forEach((uri) => (imagesHtml += `<img src=${uri}>`));
}
document.querySelector(".images-loader").innerHTML = imagesHtml;

// when scroll-behavior: smooth; is not supperted (Safari)

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
}

function smoothScrollDelayed(eID) {
  if (!Boolean(getComputedStyle(document.body).scrollBehavior)) {
    setTimeout(() => {
      smoothScroll(eID);
    }, 500);
  }
}
