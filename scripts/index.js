//store the products array in localstorage as "products"

let array = JSON.parse(localStorage.getItem('products')) || [];
let form = document.getElementById('products');
form.addEventListener('submit', myFunction)

// form.innerHTML = null
function myFunction() {
    event.preventDefault();
    // console.log("ppp")
    // form.innerText = null
    let Ptype = form.type.value;
    let Pdesc = form.desc.value;
    let Pprice = form.price.value;
    let Pimage = form.image.value;

    // console.log(type, desc, price, image)

    let obj = {

        type: Ptype,
        desc: Pdesc,
        price: Pprice,
        image: Pimage
    }

    // console.log(obj)
    array.push(obj)

    localStorage.setItem('products', JSON.stringify(array))
}