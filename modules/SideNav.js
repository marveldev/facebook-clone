const sideNav = () => {
  return `
    <nav class="side-nav">
      <a href="#">
        <img src="./team1.jpg" class="nav-image" alt="my profile picture">
        <span>Marvelwonders</span>
      </a>
      <a href="#"><i class='fas fa-user-friends'></i>Friends</a>
      <a href="#"><i class='fab fa-facebook-messenger'></i>Messenger</a>
      <a href="#"><i class="fa fa-flag"></i>Pages</a>
      <a href="#"><i class="fa fa-heart"></i>Fundraisers</a>
      <a href="#"><i class="material-icons">&#xe63a;</i>Videos</a>
      <a href="#"><i class="fa fa-calendar-times-o"></i>Events</a>
      <a href="#"><i class='fas fa-users'></i>Groups</a>
      <a href="#"><i class="fa fa-caret-down"></i>See More</a>
    </nav>
  `
}
export default sideNav();