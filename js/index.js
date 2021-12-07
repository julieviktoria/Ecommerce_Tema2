/*
    
    MVC
    Model View Controller

*/

// product array
const products = [
    {
        name: "Satin Wrap Blouse",
        id: "1",
        price: 49,
        preview: "./assets/product7_1.webp"
    },
    {
        name: "Split Hem Trousers Vinyl",
        id: "2",
        price: 69,
        preview: "./assets/product5_1.webp"
    },
    {
        name: "Bodycon Satin Dress",
        id: "3",
        price: 99,
        preview: "./assets/product6_1.webp"
    },
    {
        name: "Poplin Blouse",
        id: "4",
        price: 49,
        preview: "./assets/product1_1.webp"
    },
    {
        name: "Faux Leather Purse",
        id: "5",
        price: 39,
        preview: "./assets/product2_1.webp"
    },
    {
        name: "Mom Jeans Light Blue",
        id: "6",
        price: 59,
        preview: "./assets/product3_1.webp"
    },
]

const cart = [
    {
        name: "cart",
        id: "1",
        preview: "./assets/shopping-cart.png"
    },
]


// fetching classes & setting up grid
const viewItems = function (itemsArray) {
    const grid = itemsArray.map((product) => {
        const productContainer = document.querySelector("#container")
        const productCard = document.createElement("div")
        const productDescription = document.createElement("div")
        const productTitle = document.createElement("div")
        const productPrice = document.createElement("div")
        const productImg = document.createElement("img")
        const productCart = document.createElement("div")

        productCard.className = "product"
        productDescription.className = "description"
        productTitle.className = "product-title"
        productPrice.className = "price"
        productCart.className = "cart"

        productTitle.innerHTML = product.name
        productPrice.innerHTML = `$${product.price}`
        productImg.src = product.preview

        productContainer.appendChild(productCard)
        productCard.appendChild(productDescription)
        productDescription.appendChild(productTitle)
        productDescription.appendChild(productPrice)
        productCard.appendChild(productImg)
    })
}

viewItems(products)

console.log(products)