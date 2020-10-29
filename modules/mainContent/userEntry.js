import { getEntryFromDb } from '../../dataStorage.js';
import { displayPostOptions } from './events.js';

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
              <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}"
              class="profile-photo bio-photo" alt="my profile picture">
            </a>
            <strong class="user-name">${bioEntry[0] ? bioEntry[0].bioName : 'Jane Doe'}</strong>
          </div>
          <p id="userText" class=${singleEntry.modalId}>${singleEntry.userPost}</p>
          <div class="edit-post-buttons">
            <button class="display-options-button">...</button>
            <div class="post-item-options">
              <button class="edit-text-button" title=${singleEntry.modalId}>EDIT TEXT</button>
              <button class="delete-post-button" title=${singleEntry.postItemId}>DELETE POST</button>
            </div>
          </div>
        </div>
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
            <button id="closePostButton">X</button>
          </div>
          <div id="userInfo"> 
            <a href="#">
              <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}"
              class="profile-photo bio-photo" alt="my profile picture">
            </a>
            <strong id="displayName" class="user-name">${bioEntry[0] ? bioEntry[0].bioName : 'Jane Doe'}</strong>
          </div>
          <div id="previewEntry">
            <textarea id="userPostInput" placeholder="What's on your mind?"></textarea>
          </div>
          <button class="save-text-button" title=${singleEntry.modalId}>Save</button>
        </div>
      </section>   
    `
  })
  output.innerHTML = userEntryItems.join('');
  displayPostOptions();
}

const getBioProfileFromDb = async () => {
  const bioEntry = await getEntryFromDb('bio');
  const modalBioPhoto = document.querySelector('#photo')
  modalBioPhoto.src = bioEntry[0] ? bioEntry[0].photoSource : 'https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  const bioPhotos = document.querySelectorAll('.bio-photo')
  for (let index = 0; index < bioPhotos.length; index++) {
    const bioPhoto = bioPhotos[index];
    bioPhoto.src = bioEntry[0] ? bioEntry[0].photoSource : 'https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
  
  const userNames = document.querySelectorAll('.user-name')
  for (let index = 0; index < userNames.length; index++) {
    const userName = userNames[index];
    userName.innerText = bioEntry[0] ? bioEntry[0].bioName : 'Jane Doe';  
  }
}

export { getPostItemsFromDb, getBioProfileFromDb };
