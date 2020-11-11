import { addEntryToDb, clearAllEntries } from '../../dataStorage.js';

const dropdown = () => {
  const root = document.querySelector('#root');
  const openTopNavDropdown = document.querySelector('#open-nav-dropdown');
  const closeTopNavDropdown = document.querySelector('#close-nav-dropdown');
  const dropdownOverlay = document.querySelector('#dropdown-overlay');
  const toggleBox = document.querySelector('#toggleBox');
  const dropdownContent = document.querySelector('#dropdown-content');

  root.className = localStorage.getItem('theme');
  document.querySelector('body').style.backgroundColor = localStorage.getItem('background-color');
  root.className === 'dark-theme' ? toggleBox.checked = true : toggleBox.checked = false;

  const toggleDropdown = (
    dropdownDisplay,
    overlayDisplay,
    openButtonDisplay,
    closeButtonDisplay
  ) => {
    dropdownContent.style.display = dropdownDisplay;
    dropdownOverlay.style.display = overlayDisplay;
    openTopNavDropdown.style.display = openButtonDisplay;
    closeTopNavDropdown.style.display = closeButtonDisplay;
  }

  openTopNavDropdown.addEventListener('click', () => {
    toggleDropdown('block', 'block', 'none', 'inline-block');
  })

  closeTopNavDropdown.addEventListener('click', () => {
    toggleDropdown('none', 'none', 'inline-block', 'none');
  })

  dropdownOverlay.addEventListener('click', () => {
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
      root.className = 'root';
      document.querySelector('body').style.backgroundColor = '#F0F2F5';
      toggleBox.checked = false

      localStorage.setItem('theme', 'root')
      localStorage.setItem('background-color', '#F0F2F5')
    }
  })

  const profileInfo = document.querySelector('.profile-info');
  profileInfo.addEventListener('click', () => {
    document.querySelector('.edit-profile-modal').style.display = 'block';
    dropdownOverlay.style.display = 'block';
    dropdownContent.style.display = 'none';
  })
}

const addBioProfileEventListeners = () => {
  const profilePhoto = document.querySelector('#profilePhoto');
  const bioPhoto = document.querySelector('#photo');
  profilePhoto.addEventListener('change', () => {
    const photoReader = new FileReader();
    photoReader.readAsDataURL(profilePhoto.files[0])
    photoReader.addEventListener('load', () => {
      bioPhoto.src = photoReader.result;
    })
  })

  const bioForm = document.querySelector('.bio-form');

  bioForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const bioName = document.querySelector('#profileInput').value;
    const bioPhoto = document.querySelector('#photo');
    const photoSource = bioPhoto.src

    document.querySelector('.edit-profile-modal').style.display = 'none';
    document.querySelector('#dropdown-overlay').style.display = 'none';
    
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

    clearAllEntries('bio');
    addEntryToDb('bio', { bioName, photoSource })
  })
}

export { dropdown, addBioProfileEventListeners };
