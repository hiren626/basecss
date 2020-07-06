//NOTE: TO USE BASECSS COPY THIS FILE AND LINK IT IN THE "HEAD" TAG OF YOUR DOCUMENT(index.html).

// an eventlistener ....to delay the load, inspite located in the head. it will be loaded after the doc....   
document.addEventListener("DOMContentLoaded", () => {

// making list out of html node tree.....
var allClasses = [];
var allElements = document.querySelectorAll('[class]');
for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.toString().split(/\s+/);
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}

/* for  dynamic evaluation of color and size of relative element   */
/* LIST OF COLOR||font size AND RELATIVE CLASS NAME*/
// due to the name of class ... it will be written as "in-line" css.....
let BG_color_set = [];
let BG_color_class = [];
let T_color_set = [];
let T_color_class = [];
let Text_size_set = [];
let Text_size_class = [];
for (i=0;i<allClasses.length;i++){
  if (allClasses[i].startsWith('bg_color')){
    let bg_color = allClasses[i].slice(8,16);
    BG_color_set.push(bg_color);
    BG_color_class.push(allClasses[i]);
  }
  else if (allClasses[i].startsWith('t_color')){
    let t_color = allClasses[i].slice(7,15);
    T_color_set.push(t_color);
    T_color_class.push(allClasses[i]);
  }
  else if (allClasses[i].startsWith('text_')){
    let text_size = allClasses[i].slice(5,10);
    Text_size_set.push(text_size);
    Text_size_class.push(allClasses[i]);
  }
}
/*  NO OF ITERATION TAKE PLACES FOR BG_COLOR  */
for (i=0;i<BG_color_class.length;i++){
  let no_bg_color = document.getElementsByClassName(BG_color_class[i]).length;
    for (j=0;j<no_bg_color;j++){
      let no_bg_color_1 = document.getElementsByClassName(BG_color_class[j]).length;
      document.getElementsByClassName(BG_color_class[i])[j].style.backgroundColor = BG_color_set[i];
    }
}
/*  NO OF ITERATION TAKE PLACES FOR Text_COLOR  */
for (i=0;i<T_color_class.length;i++){
  let no_t_color = document.getElementsByClassName(T_color_class[i]).length;
    for (j=0;j<no_t_color;j++){
      let no_t_color_1 = document.getElementsByClassName(T_color_class[j]).length;
      document.getElementsByClassName(T_color_class[i])[j].style.color = T_color_set[i];
    }
}


// to write style in style element...
var style = (function() {
  var style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style;
})();
// easy one line style....
style.sheet.insertRule('.reset_base{margin:0;padding:0;box-sizing:content-box;font-size:17px;}', 0);
style.sheet.insertRule('.foo{color:red;font-size:50px;}', 0);
style.sheet.insertRule('.bold{font-weight: bold;}', 0);
style.sheet.insertRule('.italic{font-style: italic;}', 0);
style.sheet.insertRule('.card_view{border-radius: 3.5px;margin: 15px;text-align: center;}', 0);
// dynamic part for the font size....
for (i=0;i<Text_size_class.length;i++){
  let no_t_size = '.'+Text_size_class[i]+'{font-size:'+Text_size_set[i]+';}'
  style.sheet.insertRule(no_t_size, 0);
}

});
