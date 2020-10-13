import TopNav from './modules/topNav/TopNav.js';
import LeftSideNav from './modules/sideNav/LeftSideNav.js';
import RightSideNav from './modules/sideNav/RightSideNav.js';
import MainContent from './modules/mainContent/MainContent.js';
import ModalNav from './modules/ModalNav.js';
import toggleLeftNavModal from './modules/sideNav/events.js';
import dropdown from './modules/topNav/events.js';
import { request, addEntryToDb } from './dataStorage.js';
import addPostEventListeners from './modules/mainContent/events.js';
import addUserEntry from './modules/mainContent/userEntry.js';

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

request.onsuccess = () => { 
  document.getElementById('root').innerHTML = app();
  toggleLeftNavModal();
  dropdown();

  addPostEventListeners();
  // addUserEntry();
}

request.onerror = () => {
  console.log('error accessing indexDb');
}