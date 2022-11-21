const boxes = document.querySelector('.boxes');

const alphabets = ["",'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let highlightedBox=""
let colorBoolean = false;
let fontBoolean = false;
const colorPicker = document.querySelector('#colorPicker');
const fontPicker  = document.querySelector('#fontPicker');
const activateColor =()=>{
    colorBoolean = true;
}
const activateFontColor = ()=>{
    fontBoolean=true;
}
colorPicker.addEventListener('click',activateColor)
fontPicker.addEventListener('click',activateFontColor)
const colorTheBox =(ID)=>{
    const j = document.querySelector(`#${ID}`)
    colorBoolean ? j.style.backgroundColor = colorPicker.value :""
    fontBoolean ? j.style.color = fontPicker.value :""
    colorBoolean = false
    fontBoolean=false
}
const highlightedFunction=(targetedId)=>{   
    colorBox  = document.getElementById(targetedId.id).id
    colorTheBox(colorBox)
    
}
alphabets.map((item,index)=>{
    
    boxes.innerHTML+=`<button class="buttons">${item}</button>`
})
for(let i=1;i<alphabets.length;i++){
    boxes.innerHTML+=`<button class="buttons">${i}</button>`
    for(let item=0;item<alphabets.length-1;item++){
        boxes.innerHTML+=`<input type="text" class="buttons" id="${alphabets[item+1]}${i}" onclick=highlightedFunction(${alphabets[item+1]}${i})>`
    }
}