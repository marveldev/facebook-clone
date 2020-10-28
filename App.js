import TopNav from './modules/topNav/TopNav.js';
import LeftSideNav from './modules/sideNav/LeftSideNav.js';
import RightSideNav from './modules/sideNav/RightSideNav.js';
import MainContent from './modules/mainContent/MainContent.js';
import ModalNav from './modules/ModalNav.js';
import toggleLeftNavModal from './modules/sideNav/events.js';
import { dropdown, addBioProfileEventListeners } from './modules/topNav/events.js';
import { request } from './dataStorage.js';
import { userPostModal, postItemPhoto, deleteEntry } from './modules/mainContent/events.js';
import { getPostItemsFromDb, getBioProfileFromDb } from './modules/mainContent/userEntry.js';

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
  userPostModal(); //opens and close the post modal
  addBioProfileEventListeners() // adds bio profile
  postItemPhoto(); // adds post item photo event
  getPostItemsFromDb(); //gets post item from db
  getBioProfileFromDb(); // get bio profile from db 
  deleteEntry(); // removes post item from db
}

request.onerror = () => {
  console.log('error accessing indexDb');
}