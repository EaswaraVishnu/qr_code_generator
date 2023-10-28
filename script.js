const link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let input = document.querySelector(".input")
let button = document.querySelector(".qrbutton")
let image = document.querySelector(".image")
let text = document.querySelector(".guide")

//generate button logic
button.addEventListener("click",function(){
  let data = input.value;
  if(data.length > 0){
    let imgsrc = link+data;
    image.src = imgsrc;
    text.textContent = "QR code generated"
  }
  else{
    text.textContent = "No URL found"
  }
})

//keypress logic
input.addEventListener("keypress",function(event){
  if(event.key === "Enter"){
    button.click();
  }
})
