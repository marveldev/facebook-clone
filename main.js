const button = document.querySelector('.open-modal');
button.addEventListener('click', () => {
  app();
  console.log(button.nextElementSibling);
  
})