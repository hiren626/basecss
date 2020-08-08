"basecss" is a CSS framework.


Date-2nd/july/2020
*BASECSS(v1.0-alpha)*

-in this version you can use some basic css attributes by simply adding this class names to the relative element such as : ---reset_base, bg_color#xxxxxx (where '#xxxxxx' stands for hex color code), t_color#xxxxxx, text_xxpx (where 'xxpx' represents '15px',it's the size of relative text), bold, italic. -and card_view (as pre-fixed design).
on 10th/july/2020,
-it was pointed out to me that previous was not working when it was in the head. And style which was written by basecss was inline.(solved)


Date-8/Aug/2020
*BASECSS(v2.0-alpha)*
- Use class="base" in the element where you want custom basic properties such as shown:

-- data-base contains five values
-- USE as shown class="base" data-base = "backgroundcolor |fontcolor |fontsize |margin |padding"
Ex.  ```class='base' data-base='white|black|25px|10px|5px'```

-- you can use any format of color like name,rgb,rgba,hex,etc... whatever caught your fancy and it is same goes for 'fontsize','margin' & 'padding'.

-- if you want to skip any property just leave it empty, In this example i'm don't want assign any color to fontcolor so, it goes like this....    
Ex. ```class='base' data-base='white||25px|10px|5px'```

- other classes you can use are 'bold','italic','card_light','card','card_dark' & 'reset_basic'.
-- RULES As per CSS
```
.reset_basic {margin : 0px;  
                    padding : 0px;  
                    box-sizing : border-box;}
.italic{font-style: italic;}
.bold{font-weight: bold;}
.card_light{margin: 12px;
                 padding: 7px;
                 border-radius: 5px;
                 text-align: center;
                 box-shadow: 0px 0px 7px rgba(0, 0, 0,0.30);}
.card{margin: 12px; 
         padding: 7px;
         border-radius: 5px;
         text-align: center;
         box-shadow: 2px 2px 4px rgba(0, 0, 0,0.4);}
.card_dark{margin: 12px;
                 padding: 7px;
                 border-radius: 5px;
                 text-align: center;
                 box-shadow: 0 0 7px rgba(0, 0, 0,1);}```
