const ModalNav = () => {
  return `
    <div id="dropdown-overlay"></div>
    <div id="dropdown-content">
      <a href="#">
        <img src="./team1.jpg" id="dropdown-photo" alt="my profile picture">
        <strong>Marvelwonders</strong>
      </a>  
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
          <img src="./team1.jpg" class="profile-photo" alt="my profile picture">
        </a>
        <strong>Jane Doe</strong>
      </div>
      <div id="previewEntry">
        <textarea id="userPostInput" placeholder="What's on your mind, Marvelwonders?"></textarea>
        <button id="previewImageButton">X</button>
        <img src="./team1.jpg" id="userPhoto" alt="photo">
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
