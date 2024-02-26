const frame1 = document.getElementById("frame1");

frame1.addEventListener('click', (event) => {
  // Check if the clicked element is an ancestor of any info element
  if (event.target.closest('.info')) {
    const clickedText = event.target.closest('.info').querySelector('span').textContent;
    alert(`You are in ${clickedText} mode.`);
  }
});

function func(){
    document.getElementById("frame1").style.visibility="visible";
    document.getElementById("frame1").classList.add("style");
} 

function remove(){
    document.getElementById("frame1").style.visibility="hidden";
    document.getElementById("frame1").classList.remove("style");
}

function toggleDots(){
    let dots = document.getElementById('frame1');
    // console.log(dots.style.display);
    // Check frame1 is hidden or not
    if( dots.style.visibility === 'hidden')
    // if hidden, then visible.
{
    dots.style.visibility='visible';
    dots.classList.add('style');
}
    // if visible, then hidden.
    else{
        dots.style.visibility = 'hidden';
        dots.classList.remove("style");

    }

   
}