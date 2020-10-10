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
      <div class="user-content">
        <div class="user-profile"> 
          <a href="#">
            <img src="./team1.jpg" class="profile-photo" alt="my profile picture">
          </a>
          <strong>Jane Doe</strong>
          <p id="userPost">hey all, today is good</p>
        </div>
        <a href="#">
          <img src="https://images.pexels.com/photos/2108769/pexels-photo-2108769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="add-photo" alt="picture of a girl">
        </a>
        <div class="tweet-options">
          <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
          <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
          <a href="#"><i class="fa fa-share"></i>Share</a>
        </div>
      </div>   
    </section>   
  `
}
export default MainContent;
