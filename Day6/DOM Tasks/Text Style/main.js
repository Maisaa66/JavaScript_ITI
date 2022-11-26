
function ChangeFont(font){
    let element = document.getElementById("PAR")

element.style.fontFamily=font;
}

function ChangeAlign(align){
    let element = document.getElementById("PAR")

    element.style.textAlign=align;
    }

function ChangeHeight(height){
    let element = document.getElementById("PAR")

element.style.lineHeight=height;
        }

function ChangeLSpace(space){
    let element = document.getElementById("PAR")

    element.style.letterSpacing=space;

}

function ChangeIndent(txtIndent){
    let element = document.getElementById("PAR");
    element.style.textIndent=txtIndent;

}

function ChangeTransform(transform){
    let element = document.getElementById("PAR");
    element.style.textTransform=transform;

}

function ChangeDecorate(decoration){
    let element = document.getElementById("PAR");
    element.style.textDecoration=decoration;

}

function ChangeBorder(border){
    let element = document.getElementById("PAR");

    if(border==='insert'){
        element.style.border='5px solid';

    }
    else{
        element.style.border='5px '+border;
    }

}

function ChangeBorderColor(color){
    let element = document.getElementById("PAR");
    element.style.borderColor=color; 
}