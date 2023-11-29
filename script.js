const formwrapper=document.querySelector(".form-wrapper");
const form=document.querySelector("#form");
const SearchInput=document.querySelector("#SearchInput");
const buttonwrapper=document.querySelector(".button-wrapper");
const SearchButton=document.querySelector("#Search")
const ClearButton=document.querySelector("#Clear")
const imageList=document.querySelector(".imageList");

function RunEventListener(){
    form.addEventListener("submit", search);
    ClearButton.addEventListener("click",clear);
}
RunEventListener();

// Buton Temizleme
function clear(){
    SearchInput.value="";
    imageList.innerHTML=""
}

// Resim Getirme
function search(e){
    const value=SearchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${value}`,{
        method:"Get",
        headers:{
            Authorization: "Client-ID F4eNA0xdTicET6J1ETTrY5QolEv-UtHfOff5_U4LDrI"
        }
    })
    .then((response)=>response.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            addImageToUı(image.urls.small);
        })
    })
    .catch((err)=>console.log(Error));   
    e.preventDefault();
}

// Resim Ayarlama
function addImageToUı(url){
    const div=document.createElement("div");
    div.className="card"

    const img=document.createElement("img");
    img.setAttribute("src",url);
    img.height='400';
    img.width='400';
    
    div.appendChild(img);
    imageList.appendChild(div);
}