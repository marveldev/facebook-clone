import { addEntryToDb } from '../../dataStorage.js';

const postItemPhoto = () => {
  const photo = document.querySelector('#addPhoto');
  const userPhoto = document.querySelector('#userPhoto');
  
  photo.addEventListener('change', () => {
    const photoReader = new FileReader();
    photoReader.readAsDataURL(photo.files[0])
    photoReader.addEventListener('load', () => {
      userPhoto.src = photoReader.result;
    })
  })
}

const userPostModal = () => {
  const userPostModal = document.querySelector('#user-post');
  const userPostOverlay = document.querySelector('#createPostOverlay');
  const closePostModalButton = document.querySelector('#closePostButton');
  const userPostButton = document.querySelector('#userPostButton');

  const toggleUserPostModal = (value) => {
    document.querySelector('.create-post-modal').style.display = value;
    userPostOverlay.style.display = value;
  }

  userPostModal.addEventListener('click', () => {
    toggleUserPostModal('block');
  })
    
  userPostButton.addEventListener('click', () => {
    toggleUserPostModal('none');
    addPostItemToDb();
  })

  userPostOverlay.addEventListener('click', () => {
    toggleUserPostModal('none');
  })

  closePostModalButton.addEventListener('click', () => {
    toggleUserPostModal('none');
  })
}

const addPostItemToDb = () => {
  const output = document.querySelector('.output');
  const userPost = document.querySelector('#userPostInput').value;
  const userName = document.querySelector('#displayName')
  const bioPhoto = document.querySelector('#displayPicture').src
  const userPhoto = document.querySelector('#userPhoto');
  const imageSource = userPhoto.src

  let userEntryItem = `
    <div class="user-content">
      <div class="user-profile"> 
        <a href="#">
          <img src="${bioPhoto ? bioPhoto : 'https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}"
          class="profile-photo bio-photo" alt="my profile picture">
        </a>
        <strong class="user-name">${userName ? userName.innerText : 'Jane Doe'}</strong>
        <p id="userPost">${userPost}</p>
      </div>
      <a href="#">
        <img src=${imageSource} class="add-photo" alt="photo">
      </a>
      <div class="tweet-options">
        <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
        <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
        <a href="#"><i class="fa fa-share"></i>Share</a>
      </div>
    </div>  
  `
  userEntryItem += output.innerHTML
  output.innerHTML = userEntryItem;
  addEntryToDb('post-item', {post: userPost, userPhoto: imageSource});
}


export { userPostModal, postItemPhoto }
