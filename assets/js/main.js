//AXIOS
const renderProducts = products => {
    for(const product of products){
        document.querySelector('div.products').innerHTML += `
            <div draggable="true" id="${product.id}" class="product draggable">
                <div class="picture">
                    <div>
                       <img src="${product.img}" alt="${product.name}  - ${product.id}">
                    </div>
                </div>
                <div class="item">
                    <div>
                        <p class="label"> PRODUCT </p>
                        <p class="data">${product.name}</p>
                    </div>
                </div>
                <div class="quantity">
                    <div>
                        <p class="label"> QUANTITY </p>
                        <p class="data">${product.quantity}</p>
                    </div>
                </div>
                <div class="price">
                    <div>
                        <p class="label"> PRICE </p>
                        <p class="data data_price">${product.price}</p>
                    </div>
                </div>        
            </div>
        `
    }    
}

const getProducts = async() =>{
    try{
    const res = await axios.get('http://localhost:3000/products')
    const products = res.data
    renderProducts(products)
    
    }catch(error){
        
    }  
}





