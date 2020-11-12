import { addEntryToDb, getEntryFromDb, deleteEntry, updateEntry } from '../../dataStorage.js';

const userPostModal = () => {
  const userPostModal = document.querySelector('#postInput');
  const overlay = document.querySelector('#overlay');
  const closePostModalButton = document.querySelector('#closePostButton');
  const userPostButton = document.querySelector('#userPostButton');

  const toggleUserPostModal = (value) => {
    document.querySelector('.create-post-modal').style.display = value;
    overlay.style.display = value;
  }

  userPostModal.addEventListener('click', async () => {
    const bioEntry = await getEntryFromDb('bio');
    if (bioEntry.length === 1) {
      toggleUserPostModal('block');
    } else {
      const bioMessage = document.querySelector('#bioMessage');
      bioMessage.style.display = 'block';
    }
  })

     for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];
      input.addEventListener('keyup', () => {
        if (input.value.trim().length >= 1) {
          const element = input.id
          const tweetButton = document.querySelector(`[title=${element}]`);
          tweetButton.removeAttribute('disabled')
        } else {
          const element = input.id
          const tweetButton = document.querySelector(`[title=${element}]`);
          tweetButton.setAttribute('disabled', '')
        }
      })
    }
    
  userPostButton.addEventListener('click', () => {
 
    toggleUserPostModal('none');
    addPostItemToDb();
  })

  overlay.addEventListener('click', () => {
    toggleUserPostModal('none');
    const editPostModals = document.querySelectorAll('.edit-post-modal')
    for (let index = 0; index < editPostModals.length; index++) {
      const editPostModal = editPostModals[index];
      editPostModal.style.display = 'none'
    }

    const deletePostModals = document.querySelectorAll('.delete-modal')
    for (let index = 0; index < deletePostModals.length; index++) {
      const deletePostModal = deletePostModals[index];
      deletePostModal.style.display = 'none'
    }
  })

  closePostModalButton.addEventListener('click', () => {
    toggleUserPostModal('none');
  })
}

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

const addPostItemToDb = () => {
  const output = document.querySelector('.output');
  const userPost = document.querySelector('#userPostInput').value
  const userName = document.querySelector('#displayName')
  const bioPhoto = document.querySelector('#displayPicture').src
  const userPhoto = document.querySelector('#userPhoto').src
  const postItemId = 'id' + Date.parse(new Date()).toString();
  const modalId = 'id' + Math.random().toString(36).substring(7);

  let userEntryItem = `
    <section class="post-container" id=${postItemId}>
      <div class="post-content">
        <div class="post-entry">
          <a href="#">
            <img src="${bioPhoto ? bioPhoto : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
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
      <p id="userText" class="${modalId}">${userPost}</p>
      <div class="photo-content">
        <a href="#">
          <img src="${userPhoto}" class="add-photo" alt="photo">
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
            <img src="${bioPhoto ? bioPhoto : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
            class="profile-photo bio-photo" alt="my profile picture">
          </a>
          <strong id="displayName" class="user-name">${userName ? userName.innerText : 'Jane Doe'}</strong>
        </div>
        <textarea id="userPostInput" placeholder="What's on your mind?"></textarea>
        <button class="save-text-button" title=${modalId}>Save</button>
      </div>
      <div class="delete-modal ${postItemId}">
        <h3>Delete Tweet?</h3>
        <p>This can't be undone and it will be removed from your post.</p>
        <button class="cancel-button">Cancel</button>
        <button class="confirm-button" title=${postItemId}>Delete</button>
      </div>
    </section>
  `
  const postInfo = document.querySelector('.post-info');
  postInfo ? postInfo.style.display = 'none' : '';

  userEntryItem += output.innerHTML;
  output.innerHTML = userEntryItem;
  
  displayPostOptions();
  editPostText();
  deleteItemText();

  const addItemToIndexDb = {
    postItemId: postItemId,
    modalId: modalId,
    userPost: userPost,
    userPhoto: userPhoto
  }
  addEntryToDb('post-item', addItemToIndexDb);
}

const displayPostOptions = () => {
  const displayOptionsButtons = document.querySelectorAll('.display-options-button');
  for (let index = 0; index < displayOptionsButtons.length; index++) {
    const displayOptionsButton = displayOptionsButtons[index];
    displayOptionsButton.addEventListener('click', () => {
      displayOptionsButton.nextElementSibling.classList.toggle('show');
    })
  }
}

const editPostText = () => {
  const editPostButtons = document.querySelectorAll('.edit-text-button')
  const overlay = document.querySelector('#overlay');
  for (let index = 0; index < editPostButtons.length; index++) {
    const editPostButton = editPostButtons[index];
    editPostButton.addEventListener('click', () => {
      const editModalId = editPostButton.title;
      const editModal = document.querySelector(`#${editModalId}`);
      editModal.style.display = 'block';
      overlay.style.display = 'block';
    })
  }

  const savePostButtons = document.querySelectorAll('.save-text-button')
  for (let index = 0; index < savePostButtons.length; index++) {
    const savePostButton = savePostButtons[index]
    savePostButton.addEventListener('click', () => {
      const newUserText = savePostButton.previousElementSibling.value;
      const elementId = savePostButton.title;
      const oldUserText = document.querySelector(`.${elementId}`);
      oldUserText.innerHTML = newUserText;
      savePostButton.parentElement.style.display = 'none';
      overlay.style.display = 'none';
      const postId = savePostButton.parentElement.parentElement.id;
      updateEntry('post-item', postId, newUserText)
    })
  }

  const closeEditButtons = document.querySelectorAll('.close-edit-modal')
  for (let index = 0; index < closeEditButtons.length; index++) {
    const closeEditButton = closeEditButtons[index];
    closeEditButton.addEventListener('click', () => {
      const editPostModal = closeEditButton.parentElement.parentElement;
      editPostModal.style.display = 'none';
      overlay.style.display = 'none';
    })
  }
}

const deleteItemText = () => {
  const deleteButtons = document.querySelectorAll('.delete-post-button');
  const overlay = document.querySelector('#overlay');
  const output = document.querySelector('.output');

  for (let index = 0; index < deleteButtons.length; index++) {
    const deleteButton = deleteButtons[index];
    deleteButton.addEventListener('click', () => {
      const element = deleteButton.title;
      const deleteModal = document.querySelector(`.${element}`);
      deleteModal.style.display = 'block';
      overlay.style.display = 'block';
    })
  }

  const cancelButtons = document.querySelectorAll('.cancel-button')
  for (let index = 0; index < cancelButtons.length; index++) {
    const cancelButton = cancelButtons[index];
    cancelButton.addEventListener('click', () => {
      const deleteModal = cancelButton.parentElement;
      deleteModal.style.display = 'none';
      overlay.style.display = 'none';
    })
  }

  const postDeleteButtons = document.querySelectorAll('.confirm-button')
  for (let index = 0; index < postDeleteButtons.length; index++) {
    const postDeleteButton = postDeleteButtons[index];
    postDeleteButton.addEventListener('click', () => {
      const element = postDeleteButton.title;
      const postItem = document.querySelector(`#${element}`);
      output.removeChild(postItem);
      overlay.style.display = 'none';
      deleteEntry('post-item', element);
    })
  }
}

export { userPostModal, postItemPhoto, displayPostOptions, editPostText, deleteItemText }
