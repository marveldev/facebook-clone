const MainContent = () => {
  return `
    <section class="main-content">
      <div class="user-options">
        <div class="user-profile"> 
          <a href="#">
            <img src="./team1.jpg" class="profile-photo" alt="my profile picture">
          </a>
          <textarea id="user-post" placeholder="What's on your mind, Marvelwonders?"></textarea>
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
