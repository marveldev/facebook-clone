import { getEntryFromDb } from '../../dataStorage.js';

const addUserEntriesFromDb = async () => {
  const output = document.querySelector('.output');
  const userEntry = await getEntryFromDb('post-item');
  const userEntryItems = userEntry.reverse().map((singleEntry) => {
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
  output.innerHTML = userEntryItems.join('');

  const bioEntry = await getEntryFromDb('bio');
  // const bioEntryItem = bioEntry
  console.log(bioEntry[0].bioName);
  
  // const bioPhotos = document.querySelectorAll('.bio-photo')
  //   for (let index = 0; index < bioPhotos.length; index++) {
  //     const bioPhoto = bioPhotos[index];
  //     bioPhoto.src = photoSource
  //   }
    
    const userNames = document.querySelectorAll('.user-name')
    for (let index = 0; index < userNames.length; index++) {
      const userName = userNames[index];
      userName.innerText = bioEntry[0].bioName;  
    }

  return userNames 
}
export default addUserEntriesFromDb;
