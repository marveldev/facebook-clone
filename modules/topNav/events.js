import { addEntryToDb, clearAllEntries } from '../../dataStorage.js';

const dropdown = () => {
  const openTopNavDropdown = document.querySelector('#open-nav-dropdown');
  const closeTopNavDropdown = document.querySelector('#close-nav-dropdown');
  const overlay = document.querySelector('#overlay');
  const toggleBox = document.querySelector('#toggleBox');
  const dropdownContent = document.querySelector('#dropdown-content');
  const root = document.querySelector('#root');

  root.className = localStorage.getItem('theme');
  document.querySelector('body').style.backgroundColor = localStorage.getItem('background-color');
  root.className === 'dark-theme' ? toggleBox.checked = true : toggleBox.checked = false;

  const messageButtons = document.querySelectorAll('.message-btn');
  for (let index = 0; index < messageButtons.length; index++) {
    const messageButton = messageButtons[index];
    messageButton.addEventListener('click', () => {
      const message = messageButton.parentElement;
      message.style.display = 'none';
    })
  }

  const toggleDropdown = (
    dropdownDisplay,
    overlayDisplay,
    openButtonDisplay,
    closeButtonDisplay
  ) => {
    dropdownContent.style.display = dropdownDisplay;
    overlay.style.display = overlayDisplay;
    openTopNavDropdown.style.display = openButtonDisplay;
    closeTopNavDropdown.style.display = closeButtonDisplay;
  }

  openTopNavDropdown.addEventListener('click', () => {
    toggleDropdown('block', 'block', 'none', 'inline-block');
  })

  closeTopNavDropdown.addEventListener('click', () => {
    toggleDropdown('none', 'none', 'inline-block', 'none');
  })

  overlay.addEventListener('click', () => {
    toggleDropdown('none', 'none', 'inline-block', 'none');
    document.querySelector('.edit-profile-modal').style.display = 'none';
  })
  
  const themeSwitcher = document.querySelector('#themeSwitchContainer');

  themeSwitcher.addEventListener('click', () => {
    if (toggleBox.checked === false) {
      root.className = 'dark-theme';
      document.querySelector('body').style.backgroundColor = '#18191A';
      toggleBox.checked = true

      localStorage.setItem('theme', 'dark-theme')
      localStorage.setItem('background-color', '#18191A')
    }
    else {
      root.className = 'light-theme';
      document.querySelector('body').style.backgroundColor = '#F0F2F5';
      toggleBox.checked = false

      localStorage.setItem('theme', 'light-theme')
      localStorage.setItem('background-color', '#F0F2F5')
    }
  })

  const profileInfo = document.querySelector('.profile-info');
  profileInfo.addEventListener('click', () => {
    document.querySelector('.edit-profile-modal').style.display = 'block';
    dropdownContent.style.display = 'none';
  })
}

const addBioProfileEventListeners = () => {
  const profilePhoto = document.querySelector('#profilePhoto');
  const bioPhoto = document.querySelector('#photo');
  const bioForm = document.querySelector('.bio-form');
  const overlay = document.querySelector('#overlay');

  profilePhoto.addEventListener('change', () => {
    const photoReader = new FileReader();
    photoReader.readAsDataURL(profilePhoto.files[0])
    photoReader.addEventListener('load', () => {
      bioPhoto.src = photoReader.result;
    })
  })

  bioForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const bioName = document.querySelector('#profileInput').value;
    if (bioName.trim().length >= 1) {
      const bioPhoto = document.querySelector('#photo');
      const photoSource = bioPhoto.src

      document.querySelector('.edit-profile-modal').style.display = 'none';
      overlay.style.display = 'none';

      const bioPhotos = document.querySelectorAll('.bio-photo')
      for (let index = 0; index < bioPhotos.length; index++) {
        const bioPhoto = bioPhotos[index];
        bioPhoto.src = photoSource
      }

      const userNames = document.querySelectorAll('.user-name')
      for (let index = 0; index < userNames.length; index++) {
        const userName = userNames[index];
        userName.innerText = bioName;  
      }

      document.querySelector('#bioMessage').style.display = 'none';

      clearAllEntries('bio');
      addEntryToDb('bio', { bioName, photoSource })
    }
  })
}

export { dropdown, addBioProfileEventListeners };
