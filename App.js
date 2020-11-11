import TopNav from './modules/topNav/TopNav.js';
import LeftSideNav from './modules/sideNav/LeftSideNav.js';
import RightSideNav from './modules/sideNav/RightSideNav.js';
import MainContent from './modules/mainContent/MainContent.js';
import ModalNav from './modules/ModalNav.js';
import toggleLeftNavModal from './modules/sideNav/events.js';
import { dropdown, addBioProfileEventListeners } from './modules/topNav/events.js';
import { request } from './dataStorage.js';
import { userPostModal, postItemPhoto } from './modules/mainContent/events.js';
import getPostItemsFromDb from './modules/mainContent/getEntry.js';

const app = async () => {
  return `
    ${await ModalNav()}
    ${await TopNav()}
    ${await LeftSideNav()}
    <section class="grid-container">
      ${await MainContent()}
      ${RightSideNav()}
    </section>
  `
}

request.onsuccess = async () => { 
  document.getElementById('root').innerHTML = await app();
  toggleLeftNavModal();
  dropdown();
  userPostModal();
  addBioProfileEventListeners()
  postItemPhoto();
  getPostItemsFromDb();
}
