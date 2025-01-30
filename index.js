let foldingContent = document.getElementById("folding-content");
    document.getElementById("folding-btn").addEventListener("click", function(e) {
    foldingContent.classList.toggle("hidden");
    e.target.style.animation = "foldingAnimation 0.5s ease-in-out forwards";
});

document.getElementById("night-btn").addEventListener("click", function(e) {
    e.currentTarget.children[0].classList.toggle("fa-sun");
    e.currentTarget.children[0].classList.toggle("fa-moon");
    document.querySelector("html").classList.toggle("dark");
});



max = document.querySelectorAll("#wrapper-galley .myimg").length - 1;
index = 0;
 document.getElementById("prev").addEventListener("click", () => {
   index--;
   if(index<0) index=max;
   console.log(max);
   document.getElementById("wrapper-galley").scrollTo({left:screen.width*index, behavior: "smooth"});
   console.log(document.getElementById("wrapper-galley").scrollLeft);
 });

 document.getElementById("next").addEventListener("click", () => {
     index++;
     if (index == 4) 
      {index = 0;
      }
      ;
     document
       .getElementById("wrapper-galley")
       .scrollTo({ left: screen.width * index, behavior: "smooth" });
     console.log(document.getElementById("wrapper-galley").scrollLeft);
 })