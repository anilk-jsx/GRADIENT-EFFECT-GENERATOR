const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const copyCode = document.getElementById("copyCode");
const universal = "0123456789abcdef";

let hex1 = "#72ff5f";
let hex2 =  "#7b9afe";

const handleBtn = (event)=>{
    let hex = "#";
    let i;
    for(i=1; i<=6; i++){
        hex = hex + universal[Math.floor(Math.random()*16)];
    }
    if(event.target == btn1){
        btn1.innerHTML = hex;
        btn1.style.backgroundColor = hex;
        hex1 = hex; 
    }
    if(event.target == btn2){
        btn2.innerHTML = hex;
        btn2.style.backgroundColor = hex;
        hex2 = hex; 
    }
    document.body.style.background = `linear-gradient(to right, ${hex1}, ${hex2})`;
    copyCode.innerText = `background-image: linear-gradient(to right, ${hex1}, ${hex2})`;
}

btn1.addEventListener('click',(event)=>{
    handleBtn(event);
});

btn2.addEventListener('click',(event)=>{
    handleBtn(event);
});

copyCode.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copyCode.value);
    alert("code is copied to clipboard");
});