import TopNav from './modules/topNav/TopNav.js';
import LeftSideNav from './modules/sideNav/LeftSideNav.js';
import RightSideNav from './modules/sideNav/RightSideNav.js';
import MainContent from './modules/mainContent/MainContent.js';
import ModalNav from './modules/ModalNav.js';
import { request, addEntryToDb } from './dataStorage.js';
import addPostEventListeners from './modules/mainContent/events.js';

const app = async () => {
  return `
    ${ModalNav()}
    ${TopNav()}
    ${LeftSideNav()}
    <section class="grid-container">
      ${await MainContent()}
      ${RightSideNav()}
    </section>
  `
}

request.onsuccess = async () => { 
  document.getElementById('root').innerHTML = await app();
  // addEntryToDb();
  addPostEventListeners();

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
}

request.onerror = () => {
  console.log('error accessing indexDb');
}