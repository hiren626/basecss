/*  RESETing "BODY" TO MARGIN=0 PADDING=0 BOX-SIZING=BORDERBOX */
let reset_the_base = document.querySelectorAll(".reset_base");
for (i = 0; i <reset_the_base.length; i++) {
  reset_the_base[i].setAttribute('style',
  'margin:0px; padding:0px; box-sizing:border-box;');}

/* GETTING CLASS FROM NODE LIST */
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
let BG_color_set = [];
let BG_color_class = [];
let T_color_set = [];
let T_color_class = [];
let Text_size_set = [];
let Text_size_class = [];
for (i=0;i<allClasses.length;i++){
  if (allClasses[i].startsWith('bg_color')){
    let bg_color = allClasses[i].slice(8,15);
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
/*  NO OF ITERATION TAKE PLACES FOR Text_size  */
for (i=0;i<Text_size_class.length;i++){
  let no_t_size = document.getElementsByClassName(Text_size_class[i]).length;
    for (j=0;j<no_t_size;j++){
      let no_t_size_1 = document.getElementsByClassName(Text_size_class[j]).length;
      document.getElementsByClassName(Text_size_class[i])[j].style.fontSize = Text_size_set[i];
    }
}
/*  TEXT BE BOLD*/
let text_be_bold = document.querySelectorAll(".bold");
for (i = 0; i <text_be_bold.length; i++) {
  text_be_bold[i].style.fontWeight = "bold";}
/*  TEXT BE ITALIC*/
let text_be_italic = document.querySelectorAll(".italic");
for (i = 0; i <text_be_italic.length; i++) {
  text_be_italic[i].style.fontStyle = "italic";}


/**
 * more advanced ready to use design 
 */

/*  basic design of card*/
let be_card = document.querySelectorAll(".card_view");
for (i = 0; i <be_card.length; i++) {
  be_card[i].style.padding = "5px";
  be_card[i].style.margin = "18px 8px 15px 8px ";
  be_card[i].style.borderRadius = "3.5px";
  be_card[i].style.textAlign = "center";}