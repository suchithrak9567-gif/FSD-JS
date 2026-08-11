  const card =document.querySelector("#card");
 const caerdTitle = document.querySelector(".card-title");
  const togglebtn = document.querySelector("#toggle");
    const userform = document.querySelector("#userform");
    const username = document.querySelector("#username");
    const message = document.querySelector("#message");
    const charcount = document.querySelector("#charcount");
    const submitBtn = document.querySelector("#submitBtn");
    const form = document.querySelector("#form");
//  const cardTitles = document.querySelectorAll(".card-title");
// // console.log("card=",cardTitles[1]);
// // console.log("card=",cardTitles);


// cardTitles.forEach((cardTitle)=>{
//     console.log(cardTitle);
// })

// const card = document.querySelector("#card");
// const cardTitle = document.querySelector("#cardTitle");

// cardTitle.textContent = "new-title"; // Displays plain text

// To insert HTML
// cardTitle.innerHTML = "<i>new title</i>";

// const cardTitle = document.querySelector("#cardTitle");
// cardTitle.textContent = "New Title";
card.addEventListener("click", (e) => {

    card.classList.toggle("selected");

    // card.classList.add("selected");
    // card.classList.remove("selected");
    console.log("card clicked");
})

togglebtn.addEventListener("click", (e) => {
console.log("event=", e);
    e.stopPropagation();   //reload
    userform.classList.toggle("toggle");
    console.log("toggle clicked");


})
username.addEventListener("input", (e) => {
    let username=e.target.value;
    charcount.textContent=username.length;
    charcount.textContent = `Character count: ${username.length}`;
    charcount.textContent=`$(username.length)/10 characters `;
    chaercount.textContent = username.length>10? 'red':'green'
    // const para =document.createElement("p");
    // para.textContent = username;
    // console.log(e.target.value);
})
form.addEventListener('submit', (e) => {
  
    e.preventDefault();
      console.log(username.value);
      const para = document.createElement("p");
      para.textContent = `Hello, ${username.value}!`;
    message.appendChild(para);
})
    