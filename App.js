import TopNav from './modules/TopNav.js';
import LeftSideNav from './modules/LeftSideNav.js';
import RightSideNav from './modules/RightSideNav.js';
import MainContent from './modules/MainContent.js';
import ModalNav from './modules/ModalNav.js';

const app = () => {
  return `
    ${ModalNav()}
    ${TopNav()}
    ${LeftSideNav()}
    <section class="grid-container">
      ${MainContent()}
      ${RightSideNav()}
    </section>
  `
}

document.getElementById('root').innerHTML = app();

const openLeftNavModal = document.querySelector('#see-more');
const closeLeftNavModal = document.querySelector('#see-less');

openLeftNavModal.addEventListener('click', () => {
  openLeftNavModal.nextElementSibling.style.display = 'block';
})

closeLeftNavModal.addEventListener('click', () => {
  closeLeftNavModal.parentElement.style.display = 'none';
})

const openTopNavDropdown = document.querySelector('#open-nav-dropdown');
const closeTopNavDropdown = document.querySelector('#close-nav-dropdown');
const dropdownOverlay = document.querySelector('#dropdown-overlay');
const toggleBox = document.querySelector('#toggleBox');

const toggleDropdown = (
  dropdownDisplay,
  overlayDisplay,
  openButtonDisplay,
  closeButtonDisplay
) => {
  document.querySelector('#dropdown-content').style.display = dropdownDisplay;
  dropdownOverlay.style.display = overlayDisplay;
  openTopNavDropdown.style.display = openButtonDisplay;
  closeTopNavDropdown.style.display = closeButtonDisplay;
}

openTopNavDropdown.addEventListener('click', () => {
  toggleDropdown('block', 'block', 'none', 'inline-block');
})

closeTopNavDropdown.addEventListener('click', () => {
  toggleDropdown('none', 'none', 'inline-block', 'none');
})

dropdownOverlay.addEventListener('click', () => {
  toggleDropdown('none', 'none', 'inline-block', 'none');
})

const themeSwitcher = document.querySelector('#themeSwitchContainer');

themeSwitcher.addEventListener('click', () => {
  if (toggleBox.checked === false) {
    document.querySelector('#root').className = 'dark-theme';
    document.querySelector('body').style.backgroundColor = '#18191A';
    toggleBox.checked = true
  }

  else {
    document.querySelector('#root').className = 'root';
    document.querySelector('body').style.backgroundColor = '#F0F2F5';
    toggleBox.checked = false
  }
})

const userPostModal = document.querySelector('#user-post');
userPostModal.addEventListener('click', () => {
  document.querySelector('.create-post-modal').style.display = 'block';
  document.querySelector('#createPostOverlay').style.display = 'block';
})

const userPostOverlay = document.querySelector('#createPostOverlay');
userPostOverlay.addEventListener('click', () => {
  document.querySelector('.create-post-modal').style.display = 'none';
  document.querySelector('#createPostOverlay').style.display = 'none';
})

const closePostModalButton = document.querySelector('#closePostButton');
closePostModalButton.addEventListener('click', () => {
  document.querySelector('.create-post-modal').style.display = 'none';
  document.querySelector('#createPostOverlay').style.display = 'none';
})