  const openModalBtnElement = document.querySelector("#openModal");
  const modalElement = document.querySelector(".modal");
  const modalContantElement = document.querySelector(".modal_content");


  openModalBtnElement.addEventListener("click",()=>{
    modalElement.classList.add("open");
  });

  modalContantElement.addEventListener("click",()=>{
    modalElement.classList.remove("open");
  });