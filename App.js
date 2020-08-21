import topNav from './modules/TopNav.js';
import sideNav from './modules/SideNav.js';
import sideNav2 from './modules/sideNav2.js';
import MainContent from './modules/MainContent.js';

const app = () => {
  return `
    ${topNav}
    <section class="grid-container">
      ${sideNav}
      ${MainContent}
      ${sideNav2}
    </section>
  `
}

document.getElementById('root').innerHTML = app();