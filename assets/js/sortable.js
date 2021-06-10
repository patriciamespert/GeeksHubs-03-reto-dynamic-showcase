const draggingArea = document.querySelector('.products');
const droppingArea = document.querySelector('.dropped-products');
const pricingArea = document.querySelector('.total');
let prices = new Array();
let prcs = new Array();
let droppingIdentifiers = new Array();
let draggingIdentifiers = new Array();

draggingArea.addEventListener('dragstart',(e) =>{ 
    draggingIdentifiers.push(e.target.id);
    droppingProducts(e.target.id);  
})

draggingArea.addEventListener('dragend',(e) =>{
     const btn = document.createElement('BUTTON');
     const t = document.createTextNode("Reset");

     btn.setAttribute("id","button-to-reset");
     btn.setAttribute("class","btn btn-primary");

     btn.appendChild(t);
     pricingArea.hasChildNodes() ? console.log('has') :pricingArea.appendChild(btn);

     btn.addEventListener('click',()=>{
        reset();
     })
})








const droppingProducts = id =>{
    
    const product = document.getElementById(id)

    const clon = product.cloneNode(true);

    clon.id="product"+id;

    const price = clon.querySelector('.data_price');
    droppingArea.append(clon);  

    droppingIdentifiers.push(clon.id);

    noRepeat(clon.id);

}


const addingProducts = (id,count)=>{

     const target = document.getElementById(id);
    
     target.parentNode.removeChild(target);

     droppingArea.children[id=id].querySelector('div.quantity > div> .data').innerText = 1 * count;

     const prc = draggingArea.querySelector('div.product > div.price > div> .data').innerText;

     droppingArea.children[id=id].querySelector('div.price > div> .data').innerText=prc*count;
}


const noRepeat = (id) => {

    var search = id;
    let count = droppingIdentifiers.reduce((n, x) => n + (x === search), 0);

    count > 1 ? addingProducts(id,count):null;

}

const reset = () =>{

        
    let child = droppingArea.lastElementChild; 
    while (child) {
        droppingArea.removeChild(child);
        child = droppingArea.lastElementChild;
    }

    window.location.href = window.location.href;
}


    