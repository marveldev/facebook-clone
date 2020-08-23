const MainContent = () => {
  return `
    <section class="main-content">
      <div class="user-options">
        <div class="user-profile"> 
          <a href="#">
            <img src="./team1.jpg" class="profile-photo" alt="my profile picture">
          </a>
          <input type="text" id="" placeholder="What's on your mind, Marvelwonders?">
        </div>
        <div class="options">
          <a href="#"><i class="material-icons">&#xe413;</i>Photo/Video</a>
          <a href="#"><i class='fas fa-user-tag'></i>Tag Friends</a>
          <a href="#"><i class="material-icons">&#xe420;</i>Feeling/Activity</a>
        </div>
      </div>
      <div class="item">
        <div class="user-profile"> 
          <a href="#">
            <img src="./team1.jpg" class="profile-photo" alt="my profile picture">
          </a>
          <strong>Jane Doe</strong>
          <p>Prepare while u can, so u will be well equipped when it's time to shine</p>
        </div>
        <a href="#">
          <img class="add-photo" src="https://images.pexels.com/photos/2108769/pexels-photo-2108769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        </a>
        <div class="user options">
          <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
          <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
          <a href="#"><i class="fa fa-share"></i>Share</a>
        </div>
      </div>
      <div class="item">
        <div class="user-profile"> 
          <a href="#">
            <img class="profile-photo" src="https://images.pexels.com/photos/5060987/pexels-photo-5060987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          </a>
          <strong>Samuel Bush</strong>
          <p>Push yourself, because no one else is going to do it for you.</p>
        </div>
        <a href="#">
          <img class="add-photo" src="https://images.pexels.com/photos/5100247/pexels-photo-5100247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        </a>
        <div class="user options">
          <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
          <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
          <a href="#"><i class="fa fa-share"></i>Share</a>
        </div>
      </div>
      <div class="item">
        <div class="user-profile"> 
          <a href="#">
            <img class="profile-photo" src="https://images.pexels.com/photos/4972053/pexels-photo-4972053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          </a>
          <strong>David Becham</strong>
          <p>Great things never come from comfort zones.</p>
        </div>
        <a href="#">
          <img class="add-photo" src="https://images.pexels.com/photos/406199/pexels-photo-406199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        </a>
        <div class="user options">
          <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
          <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
          <a href="#"><i class="fa fa-share"></i>Share</a>
        </div>
      </div>
    </section>
  `
}
export default MainContent;
