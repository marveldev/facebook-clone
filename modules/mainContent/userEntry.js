import { getEntryFromDb } from "../../dataStorage.js";

const userEntry = async () => {
  const stuff = document.querySelector('.main-content');
  const userPostData = await getEntryFromDb();
  console.log(userPostData[0].userFeeling);
  const postItems = () => {
    return `  
      <div class="user-content">
        <div class="user-profile"> 
          <a href="#">
            <img src="./team1.jpg" class="profile-photo" alt="my profile picture">
          </a>
          <strong>Jane Doe</strong>
          <p id="userPost">${userPostData[0].userFeeling}</p>
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
    `
  }
  stuff.innerHTML += postItems;
}
export default userEntry;
