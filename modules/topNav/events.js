const dropdown = () => {
  const openTopNavDropdown = document.querySelector('#open-nav-dropdown');
  const closeTopNavDropdown = document.querySelector('#close-nav-dropdown');
  const dropdownOverlay = document.querySelector('#dropdown-overlay');
  const toggleBox = document.querySelector('#toggleBox');
  const dropdownContent = document.querySelector('#dropdown-content');

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
      document.querySelector('#root').className = 'dark-theme';
      document.querySelector('body').style.backgroundColor = '#18191A';
      toggleBox.checked = true
    }
    else {
      document.querySelector('#root').className = 'root';
      document.querySelector('body').style.backgroundColor = '#F0F2F5';
      toggleBox.checked = false
    }
  })

  const profileInfo = document.querySelector('.profile-info');
  
  profileInfo.addEventListener('click', () => {
    document.querySelector('.edit-profile-modal').style.display = 'block';
    dropdownOverlay.style.display = 'block';
    dropdownContent.style.display = 'none';
  })

}
export default dropdown;
