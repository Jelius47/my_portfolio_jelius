// // Bellow are the classses to be targeted in the html index.html
// const sections = document.querySelectorAll(".section");
// const secBtns = document.querySelectorAll(".controls");
// const secBtn = document.querySelectorAll(".control");
// const allSections = document.querySelectorAll(".main-content");




// // fUNCTIONS
 
// function pageTransitions(){
// // Button click active class
// for(let i=0;i<secBtn.length;i++){
//     secBtn[i].addEventListener('click',function(){
//         let currentBtn = document.querySelectorAll('.active-btn');
//         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//         this.className += "active-btn";

//     })
// }
// // Section Active class
// allSections.addEventListener('click',(e)=>{
//     const id = e.target.dataset.id;
//     if(id){
//         // Remove selected from the other buttons 
//         secBtns.forEach((btn)=>{
//             btn.classList.remove('active')//this is not similar active-btn because it deals with sections
//         })
//         e.target.classList.add('active');
//         // Hide other sections
//         sections.forEach((section)=>{
//             section.classList.remove('active')
//         })
//         const  element = document.getElementById(id);
//         element.classList.add('active'); 
//     }

// })
// }

// pageTransitions()

// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();

(function () {
    // Attach event listener for buttons and sections
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            // Switch active button
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            // Switch active section
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Theme toggle functionality
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
