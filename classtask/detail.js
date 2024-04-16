const body = document.querySelector("body")
let id= new URLSearchParams(location.search).get("id")
async function getProductById(){
    const res = await fetch("https://fakestoreapi.com/products/" + id)
    const data = await res.json()
    return data
}
getProductById()
async function showProductById(){
    let element= await getProductById()
 
        body.innerHTML += `
        <div class="card">
                <div class="cardimg col-6">
                    <img src=${element.image} alt="">

                </div>
                    <div class="cardcontent col-6">
                        <div class="title">${element.title}</div>
                        <div class="price">${element.price}</div>
                        <div class="category">${element.category}</div>
                        <div class="count">${element.rating.count}</div>
                        <div class="description">${element.description}</div>
                        <div class="rating">${element.rating.rate} <i class="fa-solid fa-star"></i></div>
                    </div>
                
            </div>
        `
   
}
showProductById()