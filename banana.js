var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input");
//console.log(textInput);
function clickHandler()
{
    console.log("clicked!");
    console.log("input",textInput.value);
}
btnTranslate.addEventListener("click",clickHandler);

