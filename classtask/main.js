

// .then((res)=>res.json())
// .then((data)=>{
//     // console.log(data);
// })


// async function getCategory() {
//     const res = await fetch ("https://northwind.vercel.app/api/categories/1" , {method : "put"})
//     const data = await res.json()
//     console.log(data);
    
// }
// getCategory()

// async function deleteCategory(id) {
//     const res = await fetch ("https://northwind.vercel.app/api/categories/" + id,{method : "delete"})
//     const data = await res.json()
//     console.log(data);
    
// }
// console.log(deleteCategory(3));
const img = document.querySelector("img")
const title = document.querySelector(".title")
const price = document.querySelector(".price")
const category = document.querySelector(".category")
const rating = document.querySelector(".rating")
const row=document.querySelector(".row")
async function getProduct(){
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
}
async function showProducts(){
    let arr = await getProduct()
    arr.forEach(element => {
         row.innerHTML+=`
         
         <div class="card col-3">
                <div class="cardimg">
                    <img src=${element.image} alt="">

                </div>
                <a href="detail.html?id=${element.id}">
                   <div class="title">${element.title}</div>
                </a>
                    <div class="price">Price: ${element.price}</div>
                    <div class="category">Category: ${element.category}</div>
                    <div class="rating"> Rating: ${element.rating.rate} <i class="fa-solid fa-star"></i> </div>
                
            </div>
            
         
         
         
         `
         
    });
}

showProducts()