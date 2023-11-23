const myImage=document.querySelector("img");

myImage.onclick = ()=>{
    const nowSrc=myImage.getAttribute("src");
    if(nowSrc=="images/icon.png"){
        myImage.setAttribute("src","images/icon2.png");
    }else{
        myImage.setAttribute("src","images/icon.png");
    }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName(){
    const myName=prompt("名前を入力すればいいらしい");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent = `Welcome, ${myName}!`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}!`;
}

myButton.onclick=()=>{
    setUserName();
};