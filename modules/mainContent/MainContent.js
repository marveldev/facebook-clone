const MainContent = () => {
  return `
    <section class="main-content">
      <div class="user-options">
        <div class="user-profile"> 
          <a href="#">
            <img src="https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
