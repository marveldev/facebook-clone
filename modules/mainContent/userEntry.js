import { getEntryFromDb } from '../../dataStorage.js';
import { displayPostOptions, editPostText, deleteItemText } from './events.js';

const getPostItemsFromDb = async () => {
  const output = document.querySelector('.output');
  const bioEntry = await getEntryFromDb('bio');
  const userEntry = await getEntryFromDb('post-item');
  const userEntryItems = userEntry.reverse().map((singleEntry) => {
    return `  
      <section class="post-container" id=${singleEntry.postItemId}>
        <div class="post-content"> 
          <div class="post-entry">
            <a href="#">
              <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
              class="profile-photo bio-photo" alt="my profile picture">
            </a>
            <strong class="user-name">${bioEntry[0] ? bioEntry[0].bioName : 'Jane Doe'}</strong>
          </div>
          <div class="edit-post-buttons">
            <button class="display-options-button">...</button>
            <div class="post-item-options">
              <button class="edit-text-button" title=${singleEntry.modalId}>EDIT TEXT</button>
              <button class="delete-post-button" title=${singleEntry.postItemId}>DELETE POST</button>
            </div>
          </div>
        </div>
        <p id="userText" class=${singleEntry.modalId}>${singleEntry.userPost}</p>
        <div class="photo-content">
          <a href="#">
            <img src=${singleEntry.userPhoto} class="add-photo" alt="photo">
          </a>
          <div class="tweet-options">
            <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
            <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
            <a href="#"><i class="fa fa-share"></i>Share</a>
          </div>
        </div>
        <div class="edit-post-modal" id=${singleEntry.modalId}>
          <div class="edit-post">
            <strong>Edit Post</strong>
            <button class="close-edit-modal">X</button>
          </div>
          <div id="userInfo"> 
            <a href="#">
            <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
            class="profile-photo bio-photo" alt="my profile picture">
            </a>
            <strong id="displayName" class="user-name">${bioEntry[0] ? bioEntry[0].bioName : 'Jane Doe'}</strong>
          </div>
          <textarea id="userPostInput" placeholder="What's on your mind?"></textarea>
          <button class="save-text-button" title=${singleEntry.postItemId}>Save</button>
        </div>
        <div class="delete-modal ${singleEntry.postItemId}">
          <h3>Delete Tweet?</h3>
          <p>This can't be undone and it will be removed from your post.</p>
          <button class="cancel-button">Cancel</button>
          <button class="confirm-button" title=${singleEntry.postItemId}>Delete</button>
        </div>
      </section>
    `
  })
  output.innerHTML = userEntryItems.join('');
  displayPostOptions();
  editPostText();
  deleteItemText();
}

const getBioProfileFromDb = async () => {
  const bioEntry = await getEntryFromDb('bio');
  const modalBioPhoto = document.querySelector('#photo')
  modalBioPhoto.src = bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'

  const bioPhotos = document.querySelectorAll('.bio-photo')
  for (let index = 0; index < bioPhotos.length; index++) {
    const bioPhoto = bioPhotos[index];
    bioPhoto.src = bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  }
  
  const userNames = document.querySelectorAll('.user-name')
  for (let index = 0; index < userNames.length; index++) {
    const userName = userNames[index];
    userName.innerText = bioEntry[0] ? bioEntry[0].bioName : 'Jane Doe';  
  }
}

export { getPostItemsFromDb, getBioProfileFromDb };
