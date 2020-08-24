const ModalNav = () => {
  return `
    <span id="modal-content">
      <a href="#">
        <img src="./team1.jpg" class="nav-image" alt="my profile picture">
        <strong>Marvelwonders</strong>
      </a>
      <hr>
      <a href="#"><i class="material-icons">&#xe87f;</i><strong>Feedback</strong></a>
      <a href="#"><i class="material-icons">settings</i><strong>Settings & Privacy</strong></a>
      <a href="#"><i class="fa fa-question-circle"></i><strong>Help & Support</strong></a>
      <a href="#"><i class='fas fa-moon'></i><strong>Dark Mode</strong></a>
      <a href="#"><i class="glyphicon">&#xe163;</i><strong>Log Out</strong></a>
    </span>
  `
}
export default ModalNav;
