import TopNav from './modules/TopNav.js';
import LeftSideNav from './modules/LeftSideNav.js';
import RightSideNav from './modules/RightSideNav.js';
import MainContent from './modules/MainContent.js';
import ModalNav from './modules/ModalNav.js';

const app = () => {
  return `
    ${TopNav()}
    <section class="grid-container">
      ${LeftSideNav()}
      ${MainContent()}
      ${RightSideNav()}
    </section>
    ${ModalNav()}
  `
}

document.getElementById('root').innerHTML = app();

const openLeftNavModal = document.querySelector('#see-more');
const closeLeftNavModal = document.querySelector('#see-less');
const openRightNavModal = document.querySelector('#open-right-nav-modal');
const closeRightNavModal = document.querySelector('#close-right-nav-modal');

openLeftNavModal.addEventListener('click', () => {
  openLeftNavModal.nextElementSibling.style.display = 'block';
})

closeLeftNavModal.addEventListener('click', () => {
  closeLeftNavModal.parentElement.style.display = 'none';
})

openRightNavModal.addEventListener('click', () => {
  document.querySelector('#modal-content').style.display = 'block';
  openRightNavModal.style.display = 'none';
  closeRightNavModal.style.display = 'inline-block';
})

closeRightNavModal.addEventListener('click', () => {
  document.querySelector('#modal-content').style.display = 'none';
  openRightNavModal.style.display = 'inline-block';
  closeRightNavModal.style.display = 'none';
})
