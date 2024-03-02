// // Add event listener to the document body for click events
// document.body.addEventListener('click', (event) => {
//     console.log("aaaaaaaaaas");
//     const frame1 = document.getElementById("frame1");
//     console.log(frame1);

    
//     // Check if the frame1 is visible and if the clicked element is not part of frame1
//     if (frame1.style.visibility === 'visible' && !frame1.contains(event.target)) {
//         // If so, hide frame1
//         frame1.style.visibility = 'hidden';
//         frame1.classList.remove('style');
//     }
// });

// const frame1 = document.getElementById("frame1");

// frame1.addEventListener('click', (event) => {
//   // Check if the clicked element is an ancestor of any info element
//   if (event.target.closest('.info')) {
//     const clickedText = event.target.closest('.info').querySelector('span').textContent;
//     alert(`You are in ${clickedText} mode.`);
//   }
// });


// function func(){
//     document.getElementById("frame1").style.visibility="visible";
//     document.getElementById("frame1").classList.add("style");
// } 

// function rmv(){
//     document.getElementById("frame1").style.visibility="hidden";
//     document.getElementById("frame1").classList.remove("style");
// }

// function toggleDots(){
//     let dots = document.getElementById('frame1');
//     // console.log(dots.style.display);
//     // Check frame1 is hidden or not
//     if( dots.style.visibility === 'hidden')
//     // if hidden, then visible.
// {
//     dots.style.visibility='visible';
//     dots.classList.add('style');
// }
//     // if visible, then hidden.
//     else{
//         dots.style.visibility = 'hidden';
//         dots.classList.remove("style");

//     }  
// }

function toggleDots() {
    console.log('Toggle dots function called');
    let dots = document.getElementById('frame1');
    console.log('Frame1 visibility before toggle:', dots.style.visibility);
    
    if (dots.style.visibility === 'hidden') {
        dots.style.visibility = 'visible';
        dots.classList.add('style');
    } else {
        dots.style.visibility = 'hidden';
        dots.classList.remove("style");
    }
    
    console.log('Frame1 visibility after toggle:', dots.style.visibility);
}
// Add event listener to the document body for click events
document.body.addEventListener('click', (event) => {
    const frame1 = document.getElementById("frame1");
    
    // Check if the frame1 is visible and if the clicked element is not part of frame1
    if (frame1.style.visibility === 'visible' && !frame1.contains(event.target) && 
    !document.querySelector('.group-menu').contains(event.target)) {
        // If so, hide frame1
        frame1.style.visibility = 'hidden';
        frame1.classList.remove('style');
    }
});
