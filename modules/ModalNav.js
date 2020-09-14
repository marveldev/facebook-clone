const ModalNav = () => {
  return `
    <div id="dropdown-overlay"></div>
    <div id="dropdown-content">
      <a href="#">
        <img src="./team1.jpg" id="dropdown-photo" alt="my profile picture">
        <strong>Marvelwonders</strong>
      </a>  
      <hr> 
      <a href="#"><i class="material-icons">&#xe87f;</i><strong>Feedback</strong></a>
      <a href="#"><i class="material-icons">settings</i><strong>Settings & Privacy</strong></a>
      <a href="#"><i class="fa fa-question-circle"></i><strong>Help & Support</strong></a>
      <a href="#">
        <i class='fas fa-moon'></i>
        <strong>Dark Mode</strong>
        <label class="switch">
          <input type="checkbox" id="toggleBox">
          <span class="slider round"></span>
        </label>
      </a>
      <a href="#"><i class="glyphicon">&#xe163;</i><strong>Log Out</strong></a>
    </div>
  `
}
export default ModalNav;
