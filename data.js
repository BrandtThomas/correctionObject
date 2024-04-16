let data = {
    "id": "0001",
    "type": "gateau",
    "nom": "donuts",
    "price": 0.55,
    "nappages":
    {
        "nappage":
            [
                { "id": "1001", "type": "Chocolat" },
                { "id": "1002", "type": "Fraise" },
                { "id": "1003", "type": "Framboise" },
                { "id": "1004", "type": "Vanille" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "Sans Topping" },
            { "id": "5002", "type": "Perles de sucre" },
            { "id": "5003", "type": "Copos de coco" },
            { "id": "5004", "type": "Billes de chocolat" },
            { "id": "5005", "type": "Vermisselles de chocolat" },
        ]
}

const card = document.createElement('div')
const body = document.querySelector('body')
card.classList.add("card")
body.appendChild(card)

let conc = data.nom + " " + data.type


const h1 = document.createElement('h1')
h1.textContent = conc
card.appendChild(h1)

const para = document.createElement('p')
para.textContent = data.price + "€"
card.appendChild(para)

data.nappages.nappage.forEach(element => {
    const nappagePara = document.createElement('p')
    nappagePara.textContent = element.type
    card.appendChild(nappagePara)

})