const pics_src = ["./js/slide_show_pics/pic1.jpg","./js/slide_show_pics/pic2.jpg","./js/slide_show_pics/pic3.jpg"];
let num = -1;

function start_slide_show() {
    setInterval(slideshow_timer,5000);
  }

function slideshow_timer(){

  if (num == 2){
      num = 0;
  }
  else {
      num ++;
  }

  document.getElementById("slide_show").src = pics_src[num];
}