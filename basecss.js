//NOTE: TO USE BASECSS COPY THIS FILE AND LINK IT IN THE "HEAD" TAG OF YOUR DOCUMENT(index.html).

// an eventlistener ....to delay the load, inspite located in the head. it will be loaded after the doc....   
document.addEventListener("DOMContentLoaded", () => {
/*  
- put class="base" in the element where you want custom basic properties such as below 
- to give custom values to the relative properties 
- data-base contains five values
-- USE as shown class="base" data-base = "backgroundcolor|fontcolor|fontsize|margin|padding"
- ex. class="base" data-base = "white|black|25px|10px|5px"
-- you can use any format of color like name,rgb,rgba,hex,etc... whatever caught your fancy...
*/
function BaseToStyle(DataBase, styleIt, allBaseClass, allBaselist, newI) {

  allBaseClass = document.querySelectorAll('.base');
  console.log(allBaseClass)
  allBaselist = allBaseClass.length;
  newI = 0;
  while (newI < allBaselist) {
    DataBase = allBaseClass[newI].dataset.base;
    if (DataBase == undefined || DataBase == '' || DataBase==null || DataBase==0){

    }
    else{
      DataBase = DataBase.split('|');
      styleIt = allBaseClass[newI].style
      //style from data-base...
      styleIt.backgroundColor = DataBase[0];
      styleIt.color = DataBase[1];
      styleIt.fontSize = DataBase[2];
      styleIt.margin = DataBase[3];
      styleIt.padding = DataBase[4];
    }

    newI++;
  }
}

// to run base class property....
BaseToStyle()


// making list out of html node tree.....
  var usedClassToStyle = [];
  var allElements = document.querySelectorAll('[class]');
  for (var i = 0; i < allElements.length; i++) {
    var classes = allElements[i].className.toString().split(/\s+/);
    for (var j = 0; j < classes.length; j++) {
      var cls = classes[j];
      if (cls && usedClassToStyle.indexOf(cls) === -1)
        usedClassToStyle.push(cls);
        usedClassToStyle.sort();
    }
  }

  // to remove base class from used classes list
  indexofBase = usedClassToStyle.indexOf('base');
  usedClassToStyle.splice(indexofBase,1);


  // to write style in style element...
  var style = (function() {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.body.appendChild(style);
    return style;
  })();



  bold=()=>{style.sheet.insertRule('.bold{font-weight: bold;}', 0);}
  italic=()=>{style.sheet.insertRule('.italic{font-style: italic;}', 0);}
  reset_basic=()=>{style.sheet.insertRule('.reset_basic{margin: 0px;padding: 0px;box-sizing: border-box;}', 0);}

  card_light=()=>{
    style.sheet.insertRule('.card_light{margin: 12px;padding: 7px;border-radius: 5px;text-align: center;box-shadow: 0px 0px 7px rgba(0, 0, 0,0.30);}', 0);}
  
  card=()=>{
    style.sheet.insertRule('.card{margin: 12px;padding: 7px;border-radius: 5px;text-align: center;box-shadow: 2px 2px 4px rgba(0, 0, 0,0.4);}',0);}
  
  card_dark=()=>{
    style.sheet.insertRule('.card_dark{margin: 12px;padding: 7px;border-radius: 5px;text-align: center;box-shadow: 0 0 7px rgba(0, 0, 0,1);}', 0);}


  // list of function name.....
  const functionNameAsClass = [bold, card, card_dark, card_light, italic, reset_basic];
  
  // list of class name .... 
  const allClassToStyle = ['bold','italic','card_light','card','card_dark','reset_basic'];
  allClassToStyle.sort();

  let newa = 0;  
  let uselessclassforbase = []
  const lengthusedclass = usedClassToStyle.length;
  while (newa<lengthusedclass) {
    find_index = allClassToStyle.indexOf(usedClassToStyle[newa]);
    if (find_index >=0) {
      functionNameAsClass[(find_index)]();
    } else{
    }
    newa++;
  }

});
