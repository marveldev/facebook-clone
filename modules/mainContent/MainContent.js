import { getEntryFromDb } from '../../dataStorage.js';

const MainContent = async () => {
  const bioEntry = await getEntryFromDb('bio');
  return `
    <section class="main-content">
      <div class="user-options">
        <div class="user-profile"> 
          <a href="#">
            <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
            class="profile-photo bio-photo" alt="my profile picture">
          </a>
          <textarea id="postInput" placeholder="What's on your mind?"></textarea>
        </div>
        <div class="chat-options">
          <a href="#"><i class="material-icons">&#xe413;</i>Photo/Video</a>
          <a href="#"><i class='fas fa-user-tag'></i>Tag Friends</a>
          <a href="#"><i class="material-icons">&#xe420;</i>Feeling/Activity</a>
        </div>
      </div>
      <div class="output"></div>
    </section>   
  `
}
export default MainContent;
