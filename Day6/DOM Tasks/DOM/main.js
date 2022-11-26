//deep copy for the image and then append it at the end of the page

function change(){


let imageContainer = document.body.firstElementChild.children.item(1)

let image = imageContainer.firstElementChild

let copiedImage=image.cloneNode();

image.style.float='right';
imageContainer.style.width='100%';
imageContainer.style.height='229px';

let listContainer = document.body.firstElementChild.children.item(2)
let list = document.body.firstElementChild.children.item(2).firstElementChild
list.style.listStyleType ='circle';
listContainer.style.display='inline-block'

document.body.append(copiedImage);

}