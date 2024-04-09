function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Diver.", "Camper.", "Nature Lover.", "Hug Puppies :).", "Physical Educator.", "Surfer.", "Hiker.", "Biker.", "Adventurer.", "Teacher.", "Modest."];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a'[href *= ' + id + ']).classList.add('active')
      })
    }
  })
}
menuIcon.onclick = () => {

  menuIcon.classList.toggle('bx-x')
  navBar.classList.toggle('active')
}