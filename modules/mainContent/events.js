import { addEntryToDb, deleteEntry, updateEntry } from '../../dataStorage.js';

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
  const userPostModal = document.querySelector('#postInput');
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
    const editPostModals = document.querySelectorAll('.edit-post-modal')
    for (let index = 0; index < editPostModals.length; index++) {
      const editPostModal = editPostModals[index];
      editPostModal.style.display = 'none'
    }
  })

  closePostModalButton.addEventListener('click', () => {
    toggleUserPostModal('none');
  })
}

const addPostItemToDb = () => {
  const output = document.querySelector('.output');
  const userPost = document.querySelector('#userPostInput').value
  const userName = document.querySelector('#displayName')
  const bioPhoto = document.querySelector('#displayPicture').src
  const userPhoto = document.querySelector('#userPhoto').src
  const postItemId = 'id' + Math.random().toString(36).substring(7); //2
  const modalId = 'id' + Math.random().toString(36).substring(7);  //1

  let userEntryItem = `
    <section class="post-container" id=${postItemId}>
      <div class="post-content">
        <div class="post-entry">
          <a href="#">
            <img src="${bioPhoto ? bioPhoto : 'https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}"
            class="profile-photo bio-photo" alt="my profile picture">
          </a>
          <strong class="user-name">${userName ? userName.innerText : 'Jane Doe'}</strong>
        </div>
        <div class="edit-post-buttons">
          <button class="display-options-button">...</button>
          <div class="post-item-options">
            <button class="edit-text-button" title=${modalId}>EDIT TEXT</button>
            <button class="delete-post-button" title=${postItemId}>DELETE POST</button>
          </div>
        </div>
      </div>
      <p id="userText" class=${modalId}>${userPost}</p>
      <div class="photo-content">
        <a href="#">
          <img src=${userPhoto} class="add-photo" alt="photo">
        </a>
        <div class="tweet-options">
          <a href="#"><i class="fa fa-thumbs-o-up"></i>Like</a>
          <a href="#"><i class='far fa-comment-alt'></i>Comment</a>
          <a href="#"><i class="fa fa-share"></i>Share</a>
        </div>
      </div>
      <div class="edit-post-modal" id=${modalId}>
        <div class="edit-post">
          <strong>Edit Post</strong>
          <button class="close-edit-modal">X</button>
        </div>
        <div id="userInfo"> 
          <a href="#">
            <img src="${bioPhoto ? bioPhoto : 'https://images.pexels.com/photos/5031633/pexels-photo-5031633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}"
            class="profile-photo bio-photo" alt="my profile picture">
          </a>
          <strong id="displayName" class="user-name">${userName ? userName.innerText : 'Jane Doe'}</strong>
        </div>
        <textarea id="userPostInput" placeholder="What's on your mind?"></textarea>
        <button id="userPostButton" title=${modalId}>Save</button>
      </div>
    </section>
  `
  userEntryItem += output.innerHTML;
  output.innerHTML = userEntryItem;
  displayPostOptions();

  const addItemToIndexDb = {
    postItemId: postItemId,
    modalId: modalId,
    userPost: userPost,
    userPhoto: userPhoto
  }
  addEntryToDb('post-item', addItemToIndexDb);
}

const displayPostOptions = () => {
  const output = document.querySelector('.output');
  const userPostOverlay = document.querySelector('#createPostOverlay');
  const displayOptionsButtons = document.querySelectorAll('.display-options-button');
  for (let index = 0; index < displayOptionsButtons.length; index++) {
    const displayOptionsButton = displayOptionsButtons[index];
    displayOptionsButton.addEventListener('click', () => {
      displayOptionsButton.nextElementSibling.classList.toggle('show');
    })
  }

  const editPostButtons = document.querySelectorAll('.edit-text-button')
  for (let index = 0; index < editPostButtons.length; index++) {
    const editPostButton = editPostButtons[index];
    editPostButton.addEventListener('click', () => {
      const editModalId = editPostButton.title;
      const editModal = document.querySelector(`#${editModalId}`);
      editModal.style.display = 'block';
      userPostOverlay.style.display = 'block';
    })
  }

  const closeEditButtons = document.querySelectorAll('.close-edit-modal')
  for (let index = 0; index < closeEditButtons.length; index++) {
    const closeEditButton = closeEditButtons[index];
    closeEditButton.addEventListener('click', () => {
      const editPostModal = closeEditButton.parentElement.parentElement;
      editPostModal.style.display = 'none';
      userPostOverlay.style.display = 'none';
    })
  }

  const savePostButtons = document.querySelectorAll('.save-text-button')
  for (let index = 0; index < savePostButtons.length; index++) {
    const savePostButton = savePostButtons[index];
    savePostButton.addEventListener('click', () => {
      const newUserText = savePostButton.previousElementSibling.value;
      const elementId = savePostButton.title;
      const oldUserText = document.querySelector(`.${elementId}`);
      oldUserText.innerHTML = newUserText;
      savePostButton.parentElement.style.display = 'none';
      userPostOverlay.style.display = 'none';
      updateEntry('post-item', elementId, newUserText)
    })
  }

  const deletePostButtons = document.querySelectorAll('.delete-post-button')
  for (let index = 0; index < deletePostButtons.length; index++) {
    const deletePostButton = deletePostButtons[index];
    deletePostButton.addEventListener('click', () => {
      const elementId = deletePostButton.title;
      const postItem = document.querySelector(`#${elementId}`); 
      output.removeChild(postItem);
      deleteEntry('post-item', elementId)
    })
  }
}

export { userPostModal, postItemPhoto, displayPostOptions }
