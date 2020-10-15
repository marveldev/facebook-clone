import { addEntryToDb } from '../../dataStorage.js';

const addEntries = () => {
  const output = document.querySelector('.main-content');
  const userPost = document.querySelector('#userPostInput').value;
  const target = document.querySelector('#userPhoto');
  const imageSource = target.src

  const userEntryItems = `
    <div class="user-content">
      <div class="user-profile"> 
        <a href="#">
          <img src="./team1.jpg" class="profile-photo" alt="my profile picture">
        </a>
        <strong>Jane Doe</strong>
        <p id="userPost">${userPost}</p>
      </div>
      <a href="#">
        <img src=${target.src} class="add-photo" alt="photo">
      </a>
      <div class="tweet-options">
        <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
        <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
        <a href="#"><i class="fa fa-share"></i>Share</a>
      </div>
    </div>  
  `
  output.innerHTML += userEntryItems;
  addEntryToDb({post: userPost, userPhoto: imageSource});
}

const addPhotoEventListeners = () => {
  const photo = document.querySelector('#addPhoto');
  const target = document.querySelector('#userPhoto');
  
  photo.addEventListener('change', () => {
    const photoReader = new FileReader();
    photoReader.readAsDataURL(photo.files[0])
    photoReader.addEventListener('load', () => {
      target.src = photoReader.result;
    })
  })
}

const addPostEventListeners = () => {
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
    console.log('ok');
  })
    
  userPostButton.addEventListener('click', () => {
    addEntries();
    toggleUserPostModal('none');
  })

  userPostOverlay.addEventListener('click', () => {
    toggleUserPostModal('none');
  })

  closePostModalButton.addEventListener('click', () => {
    toggleUserPostModal('none');
  })
}

export { addPostEventListeners, addPhotoEventListeners }
