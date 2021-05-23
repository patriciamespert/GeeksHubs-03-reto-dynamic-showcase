//AXIOS
const renderProducts = products => {
    for(const product of products){
        document.querySelector('main.products').innerHTML += `

        <div class="product">           
            <table>
                <thead>
                    <th> Product </th>
                    <th> Category </th>
                    <th> Price </th>
                    <th> Quantity </th>
                </thead>
                <tbody>
                    <tr>
                        <td> ${product.name} </td>
                        <td> ${product.category[0].general} </td>
                        <td> ${product.price} </td>
                        <td> ${product.quantity} </td>
                    </tr>
                </tbody>
            </table>

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




