let data = JSON.parse(localStorage.getItem('products'))

data.map(function (elem, index) {
    let box = document.createElement('div');

    let type = document.createElement('p')
    type.innerText = elem.type

    let desc = document.createElement('p')
    desc.innerText = elem.desc;

    let price = document.createElement('p')
    price.innerText = elem.price;


    let image = document.createElement('img')
    image.src = elem.image;

    let remove = document.createElement('button')
    remove.innerText = 'Remove'
    remove.setAttribute('id', 'remove_product')
    remove.addEventListener('click', function () {
        removeIteam(elem, index)
    })

    box.append(image, type, desc, price, remove)
    document.getElementById('all_products').append(box)
})



function removeIteam(elem, index) {
    // console.log(elem, index)

    data.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(data))
    window.location.reload()
}