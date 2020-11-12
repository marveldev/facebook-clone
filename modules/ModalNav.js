import { getEntryFromDb } from '../../dataStorage.js';

const ModalNav = async () => {
const bioEntry = await getEntryFromDb('bio');
  return `
    <div id="overlay"></div>
    <div id="dropdown-content">
      <div class="profile-info">
        <a href="#">
          <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
          id="dropdown-photo" class="bio-photo" alt="my profile picture">
        </a>  
        <div>
          <strong class="user-name">Jane Doe</strong>
          <strong>Edit Profile Info</strong>
        </div>
      </div>
      <hr> 
      <a href="#"><i class="material-icons">&#xe87f;</i><strong>Feedback</strong></a>
      <a href="#"><i class="material-icons">settings</i><strong>Settings & Privacy</strong></a>
      <a href="#"><i class="fa fa-question-circle"></i><strong>Help & Support</strong></a>
      <a href="#" id="themeSwitchContainer">
        <i class='fas fa-moon'></i>
        <strong>Dark Mode</strong>
        <label class="switch">
          <input type="checkbox" id="toggleBox">
          <span class="slider round"></span>
        </label>
      </a>
      <a href="#"><i class="glyphicon">&#xe163;</i><strong>Log Out</strong></a>
    </div>
    <div class="create-post-modal">
      <div id="createPost">
        <strong>Create Post</strong>
        <button id="closePostButton">X</button>
      </div>
      <div id="userInfo"> 
        <a href="#">
          <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
          id="displayPicture" class="profile-photo bio-photo" alt="my profile picture">
        </a>
        <strong id="displayName" class="user-name">Jane Doe</strong>
      </div>
      <div id="previewEntry">
        <textarea id="userPostInput" placeholder="What's on your mind?"></textarea>
        <button id="previewImageButton">X</button>
        <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
        id="userPhoto" alt="photo">
      </div>
      <div class="post-options">
        <span>Add To Your Post</span>
        <input type="file" id="addPhoto">
        <label for="addPhoto">
          <i class="material-icons" id="photoIcon">&#xe413;</i>
        </label>
        <a href="#"><i class='fas fa-user-tag' id="userTagIcon"></i></a>
        <a href="#"><i class="material-icons" id="smilyFaceIcon">&#xe420;</i></a>
      </div>
      <button id="userPostButton" disabled>POST</button>
    </div>
    <div class="edit-profile-modal">
      <h3>Edit Profile</h3>
      <form class="bio-form">
        <div class="profile-entry">
          <div>
            <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
            id="photo" alt="photo">
            <input type="file" id="profilePhoto">
            <label for="profilePhoto">
              <strong id="editPhoto" tabindex="1">EDIT PHOTO</strong>
            </label>
          </div>
          <input type="text" id="profileInput" value="${bioEntry[0] ? bioEntry[0].bioName : ''}"
          placeholder="Enter new name..." required/>
        </div>
        <button type="submit" id="editPhotoButton">SAVE</button>
      </form>
    </div>
  `
}
export default ModalNav;
