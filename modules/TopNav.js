const topNav = () => {
  return `
    <nav class="nav">
      <span class="logo">
        <a href="#"><i class='fab fa-facebook'></i></a>
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
          Marvelwonders
        </a>
        <span class="icon-links">
          <a href="#"><i class='fas fa-plus'></i></a>
          <a href="#"><i class="fab fa-facebook-messenger"></i></a>
          <a href="#"><i class="fa fa-bell"></i></a>
          <a href="#"><i class="fa fa-caret-down"></i></a>
        </span>
      </span>
    </nav>
  `
}
export default topNav();