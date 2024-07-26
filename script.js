const content = document.querySelectorAll('.content');

const page_scroll = () =>{
   var windowH = window.innerHeight;
   for(var i =0; i <content.length; i++){
      var top = content[i].getBoundingClientRect().top;
      if(windowH > top){
        content[i].classList.add("show");
      }else{
        content[i].classList.remove("show");
      }
   }
}
page_scroll();
window.addEventListener("scroll", page_scroll);