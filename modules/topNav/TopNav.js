import { getEntryFromDb } from '../../dataStorage.js';

const TopNav = async () => {
  const bioEntry = await getEntryFromDb('bio');
  return `
    <nav class="top-nav">
      <a href="#" class="logo"><i class="fab fa-facebook"></i></a>
      <span class="search-input">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Search Facebook">
      </span>
      <span class="primary-nav-links">
        <a href="#"><i class="glyphicon glyphicon-home"></i></a>
        <a href="#"><i class="fa fa-tv"></i></a>
        <a href="#"><i class='fas fa-users'></i></a>
        <a href="#"><i class="fa fa-gamepad"></i></a>
      </span>
      <span class="secondary-nav-links">
        <a href="#" class="image-link">
          <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
          class="nav-image bio-photo" alt="my profile picture">
          <strong class="user-name">${bioEntry[0] ? bioEntry[0].bioName : 'Jane Doe'}</strong>
        </a>
        <span>
          <a href="#" class="icon-link"><i class='fas fa-plus'></i></a>
          <a href="#" class="icon-link"><i class="fab fa-facebook-messenger"></i></a>
          <a href="#" class="icon-link"><i class="fa fa-bell"></i></a>
          <a href="#" id="open-nav-dropdown"><i class="fa fa-caret-down"></i></a>
          <a href="#" id="close-nav-dropdown"><i class="fa fa-caret-down"></i></a>
        </span>
      </span>
    </nav>
    <div id="entryMessage" class="info">
      <strong>ENTRY ADDED SUCCESSFULLY</strong>
      <button class="message-btn">OK</button>
    </div>
    <div id="bioMessage" class="info">
      <strong>Please Update Your Profile.</strong>
      <button class="message-btn">OK</button>
    </div>
  `
}
export default TopNav;