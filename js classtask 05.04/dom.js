// const body = document.body;
// const card = document.createElement("div");
// card.setAttribute("class", "card");
// const img = document.createElement("img");
// img.setAttribute("src", "./marvel.jpg");
// img.setAttribute("alt", "...");
// img.setAttribute("class", "card-top-img");
// const cardBody = document.createElement("div");
// cardBody.setAttribute("class", "card-body");
// const h5 = document.createElement("h5");
// h5.setAttribute("class", "card-title");
// h5.textContent = "Card title";
// const p = document.createElement("p");
// p.setAttribute("class", "card-text");
// p.textContent =
//   "Some quick example text to build on the card title and make up the bulk of the card's content.";
// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.setAttribute("class", "btn btn-primary");
// a.textContent = "Go somewhere";
// cardBody.append(h5, p, a);
// card.append(img, cardBody);
// body.append(card);
// card.style.width = "286px";
// img.style.width = "100%";
// img.style.height = "180px";
// card.style.alignItems = "center";
// h5.style.fontSize = "1.25rem";
// h5.style.textAlign = "center";
const students = ["Emin", "Serxan", "Elvin", "Babos", "Ogul"];
const body = document.body;
const div = document.createElement("div");
div.setAttribute("class", "wrapper");
body.append(div);
const wrapper = document.querySelector(".wrapper");
const studentList = document.createElement("ul");
students.forEach((item) => {
  const liElem = document.createElement("li");
  liElem.textContent = item;
  studentList.appendChild(liElem);
  wrapper.append(studentList);
  liElem.addEventListener("click", function () {
    this.remove();
  });
});

const button = document.createElement("button");
wrapper.append(button);
button.style.width = "50px";
button.style.height = "20px";
button.style.borderRadius = "15px";
button.textContent = "click me";
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let random1 = parseInt(Math.random() * 256);
  let random2 = parseInt(Math.random() * 256);
  let random3 = parseInt(Math.random() * 256);
  document.body.style.backgroundColor = `rgb( ${random1} ${random2} ${random3})`;
});
