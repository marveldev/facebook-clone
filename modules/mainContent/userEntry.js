import { getEntryFromDb } from '../../dataStorage.js';

const addUserEntryFromDb = async () => {
  const output = document.querySelector('.output');
  const userEntry = await getEntryFromDb();
  const userEntryItems = userEntry.map((singleEntry) => {
    return `  
      <div class="user-content">
        <div class="user-profile"> 
          <a href="#">
            <img src="./team1.jpg" class="profile-photo" alt="my profile picture">
          </a>
          <strong>Jane Doe</strong>
          <p id="userPost">${singleEntry.post}</p>
        </div>
        <a href="#">
          <img src=${singleEntry.userPhoto} class="add-photo" alt="photo">
        </a>
        <div class="tweet-options">
          <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
          <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
          <a href="#"><i class="fa fa-share"></i>Share</a>
        </div>
      </div>   
    `
  })
  output.innerHTML += userEntryItems.join('');
}
export default addUserEntryFromDb;
