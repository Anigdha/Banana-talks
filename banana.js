var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output");
//console.log(textInput);
function clickHandler()
{
    // console.log("clicked!");
    // console.log("input",textInput.value);
    outputDiv.innerText="ajahayabjbau"+textInput.value;
}
btnTranslate.addEventListener("click",clickHandler);

