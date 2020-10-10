const TopNav = () => {
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
          <img src="./team1.jpg" class="nav-image" alt="my profile picture">
          <strong>Marvelwonders</strong>
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
  `
}
export default TopNav;