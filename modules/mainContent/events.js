import { addEntryToDb, clearAllEntries } from '../../dataStorage.js';
import addUserEntry from './userEntry.js';

const addPostEventListeners = async () => {
  const userPostModal = document.querySelector('#user-post');
  const userPostOverlay = document.querySelector('#createPostOverlay');
  const closePostModalButton = document.querySelector('#closePostButton');
  const userPostButton = document.querySelector('#userPostButton');

  const toggleUserPostModal = (value) => {
    document.querySelector('.create-post-modal').style.display = value;
    userPostOverlay.style.display = value;
  }

  userPostModal.addEventListener('click', () => {
    toggleUserPostModal('block');
  })
    
  userPostButton.addEventListener('click', () => {
    // clearAllEntries();
    const userPostInput = document.querySelector('#userPostInput').value;
    addEntryToDb(userPostInput);
    // addUserEntry();
    toggleUserPostModal('none');

  })

  userPostOverlay.addEventListener('click', () => {
    toggleUserPostModal('none');
  })

  closePostModalButton.addEventListener('click', () => {
    toggleUserPostModal('none');
  })
}
export default addPostEventListeners;
