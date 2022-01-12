var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output");

//var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"; //o/p= testing, you are
var serverUrl="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text)
{
    return serverUrl+"?text="+text;
}

function errorHandler(error)
{
    console.log("error occured",error);
    alert("something wrong with server");
}

//console.log(textInput);

function clickHandler()
{
    // console.log("clicked!");
    // console.log("input",textInput.value);
    //outputDiv.innerText="ajahayabjbau"+textInput.value;

    var inputText=textInput.value;//taking input

    //calling serevr fro processing
    fetch(getTranslationURL(inputText)) //fetching the url
        .then(response=>response.json())  //coverting the fetched response into json
        //.then(json=>console.log(json))  //console the json value
        .then(json=>{
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText; //output
        })
        .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler);