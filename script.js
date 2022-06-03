const responsiveDiv = document.getElementById('responsive');
const hamBurger = document.getElementById('hamburger');
const profileIcons = document.getElementById('my-profiles');
const profileIcons1 = document.getElementById('my-profiles1');
const footerProfileIcons = document.getElementById('footer-my-profiles');
const skillsLink = document.getElementById('skills-link');
const eduLink = document.getElementById('education-link');
const expLink = document.getElementById('exp-link');
const projectLink = document.getElementById('projects-link');
const contactsLink = document.getElementById('contacts-link');

const iconUrls = {
  'github-icon': 'https://github.com/navag',
  'linkedin-icon': 'https://www.linkedin.com/in/navnath-galande-60a726118/',
  'youtube-icon': '',
  'insta-icon': ''
};

const focusIds = {
  'skills-link': 'skill-set',
  'education-link': 'education',
  'exp-link': 'experience',
  'projects-link': 'projects',
  'contacts-link': 'footer'
}
const showMenus = () => {
  if (responsiveDiv.classList.contains('responsive')) {
    responsiveDiv.classList.remove('responsive');
  } else {
    responsiveDiv.classList.add('responsive');
  }
}

const iconClick = (e) => {
  const url = iconUrls[e.target.id];
  if (url) { 
    window.open(url, "_blank");
  }
}
const linkClick = (e) => {
  console.log(e.target);
  showMenus();
  document.getElementById(focusIds[e.target.id]).focus();
}

//Auto text logic
const textEl = document.getElementById('text');
const text = 'I am Navnath Galande, son of farmer who loves to solve problem by technology';
let idx = 1;
let speed = 300;

const writeText = () => {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
      idx = 1
    }
    setTimeout(writeText, speed)
}
  writeText()

  //attache events
hamBurger?.addEventListener('click', showMenus);
profileIcons?.addEventListener('click', iconClick);
profileIcons1?.addEventListener('click', iconClick);
skillsLink?.addEventListener('click', linkClick);
expLink?.addEventListener('click', linkClick);
eduLink?.addEventListener('click', linkClick);
projectLink?.addEventListener('click', linkClick);
contactsLink?.addEventListener('click', linkClick);