const ModalNav = () => {
  return `
    <div id="dropdown-overlay"></div>
    <div class="edit-profile-modal">
      <h3>Edit Profile</h3>
      <form class="bio-form">
        <div class="profile-entry">
          <div>
            <img src="https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            id="photo" alt="photo">
            <input type="file" id="profilePhoto">
            <label for="profilePhoto">
              <strong id="editPhoto" tabindex="1">EDIT PHOTO</strong>
            </label>
          </div>
          <input type="text" placeholder="Enter new name..."  id="profileInput" required/>
        </div>
        <button type="submit" id="editPhotoButton">OK</button>
      </form>
    </div>
    <div id="dropdown-content">
      <div class="profile-info">
        <a href="#">
          <img src="https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          id="dropdown-photo" class="bio-photo" alt="my profile picture">
        </a>  
        <div>
          <strong class="user-name"> Jane Doe</strong>
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
    <div id="createPostOverlay"></div>
    <div class="create-post-modal">
      <div id="createPost">
        <strong>Create Post</strong>
        <button id="closePostButton">X</button>
      </div>
      <div id="userInfo"> 
        <a href="#">
          <img src="https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          id="displayPicture" class="profile-photo bio-photo" alt="my profile picture">
        </a>
        <strong id="displayName" class="user-name">Jane Doe</strong>
      </div>
      <div id="previewEntry">
        <textarea id="userPostInput" placeholder="What's on your mind?"></textarea>
        <button id="previewImageButton">X</button>
        <img src="https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
      <button id="userPostButton">POST</button>
    </div>
  `
}
export default ModalNav;
