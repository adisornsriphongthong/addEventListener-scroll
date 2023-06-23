document.addEventListener('scroll' , events);

function events(){
    let x = Math.floor(window.scrollY);

    let box_1scroll = 100 - x;
    let box_2scroll = -100 + x;
    let background_2 = 0 - x;
    document.getElementById("box-1").style.cssText = 'transform: translateX('+ box_1scroll + 'px);';
    document.getElementById("box-2").style.cssText = 'transform: translateX('+ box_2scroll + 'px);';
    document.getElementById("background-2").style.cssText = 'transform: translateY('+ background_2 + 'px);';
}
