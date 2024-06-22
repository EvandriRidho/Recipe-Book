document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('myModal');
    const openModalButtons = document.querySelectorAll('button');
    const closeModalElements = document.querySelectorAll('#closeModal, #closeModalButton');

    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        modal.classList.remove('hidden');
      });
    });

    closeModalElements.forEach(element => {
      element.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });