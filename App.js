import TopNav from './modules/topNav/TopNav.js';
import LeftSideNav from './modules/sideNav/LeftSideNav.js';
import RightSideNav from './modules/sideNav/RightSideNav.js';
import MainContent from './modules/mainContent/MainContent.js';
import ModalNav from './modules/ModalNav.js';
import toggleLeftNavModal from './modules/sideNav/events.js';
import { dropdown, addBioPhotoEventListeners } from './modules/topNav/events.js';
import { request } from './dataStorage.js';
import { addPostEventListeners, addPhotoEventListeners } from './modules/mainContent/events.js';
import addUserEntriesFromDb from './modules/mainContent/userEntry.js';

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

  addBioPhotoEventListeners()
  addPostEventListeners();
  addPhotoEventListeners();
  addUserEntriesFromDb();
}

request.onerror = () => {
  console.log('error accessing indexDb');
}