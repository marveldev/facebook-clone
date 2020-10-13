const toggleLeftNavModal = () => {
  const openLeftNavModal = document.querySelector('#see-more');
  const closeLeftNavModal = document.querySelector('#see-less');

  openLeftNavModal.addEventListener('click', () => {
    openLeftNavModal.nextElementSibling.style.display = 'block';
  })

  closeLeftNavModal.addEventListener('click', () => {
    closeLeftNavModal.parentElement.style.display = 'none';
  })
}
export default toggleLeftNavModal;
