
function change(){

//get the div of the image as it is the second child of the first childern
let imageContainer = document.body.firstElementChild.children.item(1)

//get the image
let image = imageContainer.firstElementChild

//deep copy for the image and then append it at the end of the page
let copiedImage=image.cloneNode();

//style the new image
image.style.float='right';
imageContainer.style.width='100%';
imageContainer.style.height='229px';

//get the menu div and the menu it self
let listContainer = document.body.firstElementChild.children.item(2)
let list = document.body.firstElementChild.children.item(2).firstElementChild
//style the original menu
list.style.listStyleType ='circle';
listContainer.style.display='inline-block'

//append the new image copied
document.body.append(copiedImage);

}