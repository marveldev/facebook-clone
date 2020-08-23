import TopNav from './modules/TopNav.js';
import LeftSideNav from './modules/LeftSideNav.js';
import RightSideNav from './modules/RightSideNav.js';
import MainContent from './modules/MainContent.js';

const app = () => {
  return `
    ${TopNav()}
    <section class="grid-container">
      ${LeftSideNav()}
      ${MainContent()}
      ${RightSideNav()}
    </section>
  `
}

document.getElementById('root').innerHTML = app();
