const head = document.createElement('div');
head.className = "head colorItem";
for (i = 0; i < 2; i++) {
  let divs = document.createElement('div')
  divs.classList = `head${i + 1}`
  divs.id = `head${i + 1}`
  head.append(divs)
}
document.body.append(head)

let ul1 = document.createElement("ul")
ul1.classList = "ul1"
let arrMenu = ["Home", "About", "Contact"]
for (let i = 0; i <= 2; i++) {
  let li = document.createElement("li");
  li.classList = `li${i}`
  li.innerHTML = arrMenu[i]
  ul1.append(li)
}
document.getElementById("head1").append(ul1)

let ul2 = document.createElement("ul")
ul2.classList = "ul2"
let arrIcons = ["fa fa-facebook", "fa fa-instagram"]
for (let j = 0; j <= 1; j++) {
  let li = document.createElement("li")
  li.classList = `li${j}`
  let i = document.createElement("i")
  i.classList = arrIcons[j]
  li.append(i);
  ul2.append(li)
}
document.getElementById("head2").append(ul2)


const boddy = document.createElement("div")
boddy.classList = "boddy"
for (let i = 0; i <= 1; i++) {
  let divs = document.createElement("div")
  divs.classList = `boddy${i}`
  divs.id = `boddy${i}`
  let divsChild0 = document.createElement('div')
  divsChild0.classList = `boddy${i + 'a'}`
  divsChild0.id = `boddy${i + 'a'}`
  let divsChild1 = document.createElement('div')
  divsChild1.classList = `boddy${i + 'b'}`
  divsChild1.id = `boddy${i + 'b'}`
  let divsChild2 = document.createElement('div')
  divsChild2.classList = `boddy${i + 'c'}`
  divsChild2.id = `boddy${i + 'c'}`
  divs.append(divsChild0)
  divs.append(divsChild1)
  divs.append(divsChild2)
  boddy.append(divs)
}
document.body.append(boddy)

let arrImages = ["https://www.itu.int/hub/wp-content/uploads/sites/4/2022/04/pexels-geoff-williamson-endangered-animals.jpg", "https://wpapers.ru/wallpapers/animals/Tigers/6078/1280x960_%D0%94%D0%B2%D0%B0-%D1%82%D0%B8%D0%B3%D1%80%D0%B0-%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D1%82.jpg", "https://wpapers.ru/wallpapers/animals/Horses/2574/1280x960_%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BD%D1%8C.jpg", "https://wpapers.ru/wallpapers/animals/Wolfs/4545/1280x960_%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B2%D0%BE%D0%BB%D0%BA.jpg"]

let mainImage = document.createElement('img');
mainImage.src = arrImages[0]
mainImage.id = "mainImage"
document.getElementById("boddy0a").append(mainImage)


let arrArrow = ["fa fa-arrow-circle-o-left colorItem2", "fa fa-arrow-circle-o-right colorItem2",]
for (let j = 0; j <= 1; j++) {
  let divs = document.createElement("div")
  divs.classList = `arrowDiv${j}`
  divs.id = `arrowDiv${j}`
  let i= document.createElement("i")
  i.classList = arrArrow[j]
  i.id = `arrow${j}`
  divs.append(i)
  document.getElementById("boddy0b").append(divs)
}


for (let i = 0; i <= 3; i++) {
  let divImage = document.createElement("div")
  divImage.classList = "divImage"
  let image = document.createElement("img")
  image.classList = "image"
  image.id = `image${i}`
  image.src = arrImages[i]
  divImage.append(image)
  document.getElementById("boddy0c").append(divImage)
}


const titl = document.createElement("h1")
titl.classList = "titl colorItem2"
titl.innerHTML = "Lorem Ipsum"
document.getElementById("boddy1a").append(titl)

let arrText = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.", "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."]

let text = document.createElement("p");
text.innerHTML = arrText[0]
text.id = "text"
document.getElementById("boddy1b").append(text)


let button = document.createElement("button")
button.className = "button colorItem"
button.id = "button"
button.innerHTML = "text change"
document.getElementById("boddy1c").append(button)


let colorChange = document.createElement("i")
colorChange.className = "fa fa-cog"
colorChange.id = "cog"
document.body.append(colorChange  )


const arrSlide = document.querySelectorAll('.divImage')

let n = 0
document.getElementById("arrow1").addEventListener("click", function () {
  if (n < arrSlide.length-1) {
    n++
  } else {
    n = 0
  }
  document.getElementById("mainImage").src = arrImages[n] ;

  for (element of arrSlide) {
    element.style = 'border: 1px solid black'
  }

  arrSlide[n].style = 'border: 1px solid red'
})

document.getElementById("arrow0").addEventListener("click", function () {
  if (n > 0) {
    n--
  } else {
    n = arrSlide.length-1
  }
  document.getElementById("mainImage").src = arrImages[n] ;

  for (element of arrSlide) {
    element.style = 'border: 1px solid black'
  }

  arrSlide[n].style = 'border: 1px solid red'

})


let t = 0

document.getElementById("button").addEventListener("click", function () {
  if (t < arrText.length-1) {
    t++
  } else {
    t = 0
  }
  document.getElementById("text").innerHTML = arrText[t];

})


let arrItems = document.body.querySelectorAll('.colorItem')
let arrItems2 = document.body.querySelectorAll('.colorItem2')

document.getElementById("cog").addEventListener("click", function(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  for (let element of arrItems) {
    element.style.background = `rgb(${r},${g},${b})`;
  };

  for (let element of arrItems2) {
    element.style.color = `rgb(${r},${g},${b})`;
  }

})




