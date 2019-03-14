import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // User clicks the 'Get in Touch' button (which opens the modal)
    this.openModalButton.click(this.openModal.bind(this));
    // User clicks the 'X' to close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    // User pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }
  // If the key being pressed is ESC (27), close the modal
  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
