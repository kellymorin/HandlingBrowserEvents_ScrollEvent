const audrey = document.getElementById("audrey")

window.addEventListener("scroll",() => {
  console.log("You are scrolling")

  scroll = window.scrollY

    let width = scroll/3
    if(width < 50 ){
      width = 50
    }

    audrey.style.width = width + 'px';

    let height = scroll/4
    if(height < 100){
      height = 100
    }

    audrey.style.height = height + 'px'
})