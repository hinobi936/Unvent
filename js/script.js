document.addEventListener("DOMContentLoaded", () => {
  const modalBtns = document.querySelectorAll("*[data-modal-btn]");
  const close = document.querySelectorAll(".modal-close");
  const map = document.querySelector(".adresse-link");
  // console.log(map);

  modalBtns.forEach((item) => {
    item.addEventListener("click", () => {
      let name = item.getAttribute("data-modal-btn");
      let modal = document.getElementById(`${name}`);
      modal.style.display = "block";
      modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
          modal.style.display = "none";
        }
      });
      close.forEach((item) => {
        item.addEventListener("click", () => closeModal(modal, item));
      });
    });
  });

  function closeModal(modal, close) {
    modal.style.display = "none";
    close.removeEventListener("click", closeModal, false);
  }

  // map.addEventListener("mouseover", ()=>{
  //     console.log(map);
  // })
  map.onmouseover = () => {
    console.log(map, "зашел");
  };
  map.onmouseout = () => {
    console.log(map, "вышел");
  };
});
