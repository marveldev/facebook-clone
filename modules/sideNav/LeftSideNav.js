import { getEntryFromDb } from '../../dataStorage.js';

const LeftSideNav = async () => {
  const bioEntry = await getEntryFromDb('bio');
  return `
    <nav class="left-side-nav">
      <a href="#">
        <img src="${bioEntry[0] ? bioEntry[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
        class="nav-image bio-photo" alt="my profile picture">
        <span class="user-name">${bioEntry[0] ? bioEntry[0].bioName : 'Jane Doe'}</span>
      </a>
      <a href="#"><i class='fas fa-user-friends'></i>Friends</a>
      <a href="#"><i class='fab fa-facebook-messenger'></i>Messenger</a>
      <a href="#"><i class="fa fa-flag"></i>Pages</a>
      <a href="#"><i class="fa fa-heart"></i>Fundraisers</a>
      <a href="#"><i class="material-icons">&#xe63a;</i>Videos</a>
      <a href="#"><i class="fa fa-calendar-times-o"></i>Events</a>
      <a href="#"><i class='fas fa-users'></i>Groups</a>
      <a href="#" id="see-more"><i class="fa fa-caret-down"></i>See More</a>
      <nav class="dropdown-left-nav">
        <a href="#"><i class='fas fa-user-alt'></i>Friend Lists</a>
        <a href="#"><i class="material-icons">videogame_asset</i>Games</a>
        <a href="#"><i class="fa fa-briefcase"></i>Jobs</a>
        <a href="#"><i class="material-icons">live_tv</i>Live Videos</a>
        <a href="#"><i class='fab fa-facebook-messenger'></i>Messenger Kids</a>
        <a href="#"><i class='fas fa-hand-holding'></i>Offers</a>
        <a href="#"><i class='fas fa-cloud-sun'></i>Weather</a>
        <a href="#" id="see-less"><i class="material-icons">arrow_drop_up</i>See Less</a>
      </nav>   
    </nav>  
  `
}
export default LeftSideNav;
