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
const openTopNavDropdown = document.querySelector('#open-nav-dropdown');
const closeTopNavDropdown = document.querySelector('#close-nav-dropdown');
const dropdownOverlay = document.querySelector('#dropdown-overlay');
const toggleBox = document.querySelector('#toggleBox');

openLeftNavModal.addEventListener('click', () => {
  openLeftNavModal.nextElementSibling.style.display = 'block';
})

closeLeftNavModal.addEventListener('click', () => {
  closeLeftNavModal.parentElement.style.display = 'none';
})

openTopNavDropdown.addEventListener('click', () => {
  document.querySelector('#dropdown-content').style.display = 'block';
  dropdownOverlay.style.display = 'block';
  openTopNavDropdown.style.display = 'none';
  closeTopNavDropdown.style.display = 'inline-block';
})

closeTopNavDropdown.addEventListener('click', () => {
  document.querySelector('#dropdown-content').style.display = 'none';
  dropdownOverlay.style.display = 'none';
  openTopNavDropdown.style.display = 'inline-block';
  closeTopNavDropdown.style.display = 'none';
})

dropdownOverlay.addEventListener('click', () => {
  document.querySelector('#dropdown-content').style.display = 'none';
  dropdownOverlay.style.display = 'none';
  openTopNavDropdown.style.display = 'inline-block';
  closeTopNavDropdown.style.display = 'none';
})

function toggleCheck() {
  if(toggleBox.checked === true) {
    document.querySelector('#root').className = 'dark-theme';
    document.querySelector('body').style.backgroundColor = '#18191A';
  } else {
    document.querySelector('#root').className = 'root';
    document.querySelector('body').style.backgroundColor = '#F0F2F5';
  }
}

toggleBox.addEventListener('change', () => {
  toggleCheck();
})                                                                      
