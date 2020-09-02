let button = document.getElementById(id).addEventListener('click', buttonClick);

function buttonClick(id) {
  console.log(id === "googlesearch"? "I have submitted" :  "I'm feeling lucky!!"); 
}