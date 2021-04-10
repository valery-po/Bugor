let cardBtn = document.querySelectorAll(".card-button");
const cardEl = document.querySelectorAll(".card");


const hideBlock = (e) => {
  for(let i = 0; i < cardEl.length; i++){
    cardEl[i].addEventListener("click", () => {
     cardEl[i].style.display = "none";
      })
    
  }
    
}


cardBtn.forEach(el => {
  el.addEventListener("click", hideBlock);
  
});


