let API = "https://boykot.kg/api/v1/products/"
let wrapper = document.querySelector(".wrapper")
let content = document.querySelector(".products")

async function getProducts() {
    try {
        const res = await fetch(API)
        const data = await res.json()

        console.log(data);
        // showHeader(data)
        showProducts(data.results)
    } catch (error) {
        console.log(error);
        
    }
}

// function showHeader(data){
//     wrapper.innerHTML = `
//         <header class="header container">
//             <button>кыргызча</button>
//             <div class="header-box">
//                 <input placeholder="Марканы жазып изде..." type="text">
//                 <span>${data.count} <br>
//                 Товардын саны
//                 </span>
//             </div>
//         </header>
//     `
// }

function showProducts(data){
    content.innerHTML = data.map((item)=>{
        return `

        <div class="product">
            <span>${item.brand}</span>
            <img src="${item.logo}" />
            <button class="product-button ${item.status ? "green":"red"}">why</button>
        </div>
        `
    })
}

getProducts()