# WEB TECH Practicals

# Session 1

Here are some tags and how you use them
```html
<!doctype html> 
<html> (Says its html 5 code)
   <head> (Header)
            <title>Page title</title> (User doesnt see this)
   </head>
   <body> (What the user Actually sees)
      <center> (puts enclosed image in the center)
         <img src="images/fake_cv_pic.png" alt="picture for charlie's cv"> (Puts an image on the page)
      <h1> Heading 1 (User see's this) </h1>
      </center>
      <h2> Heading 2 (User sees this)
         | <a href="mailto:4mayoc64@solent.ac.uk">4mayoc64@solent.ac.uk</a> (Hyperlinks this email)
         | <a href="tel:+07452 844313">07452 844313 </a> (Hyperlinks telephone number)
      </h2>

      <h2> </h2>
      <ul>(Sets up a list)
         <li> List input </li>
         <li> List input </li>
      </ul>

      <h3> Heading 3 </h3>
      <p> Paragraph contents</p>
   </body>
</html> 
```
Block code (HTML):
Form a separate block of HTML.
Can be contained within other block elements.
Takes up entire contents of its containter.
Apart from p element, they can contain other block elements.
For example;
<p>....</p>
<h1>....</h1>
<table>....</table>

Inline elements:
Stay in line with rest of content.
Can only contain other inline elements, but may be contained by both inline and block elements.
For exameple; 
<img>....</img>
<a>....</a>

HTML <div> Tag:
Defines division or section in HTML document.
Used to group elements to format them with styles.
Can also use some other more descriptive tags, e.g <article></article>
<nav></nav>
Example of div tag in code;
<body>
   <div id="wrapper">
      <div id="header">
      ....
      </div> <! - - [end]#header - ->
      <div id="section">
         ....
      </div> <! - - [end]#section - ->
      <div id="footer">
      ....
      </div><!- - [end]#footer - -> (this is an HTML comment)
   </div> <!- -[end]#content - ->
</body>

HTML <span> Tag:
Provides way to add a hook to piece of text or part of document.
Difference between span and div is span element is inline and often used for small section of HTML, whereas div element use to group larger chunks of code.
For example;
<p>She has <span class="blue">light blue</span> eyes.</p> 

class and id Attributes:
class specifies element as member of one or more classes allow developers to define specific kinds of a given element. e.g, <element class="classname">

id specifies unique id for an HTML element, can only be used once. e.g, <element id="id">

HTML FORMS:

form tag:
Container for controls (i.e, text field, checkbox, radio buttons etc.).
e.g;
<form></form>
Using form with action and method;
action - Where form sent to 
method - specifies how form sent;
   get - data appended to URL.
   post - data included in body of form.
Example;
<form action ="http://www.google.com" method="post">

</form>

input tag: 
Handles most form controls.
Example;
<form action="http://www.google.com" method="post">
    <p> <label for="name">Name:</label> <input type="text" name="name"> </p>
    <p> <label for="email">Email:</label> <input type="text" name="email"> </p>
    <p><input type="submit" name="Submit" value="Submit"></p>
</form>

In above code there two different types of <input>, text and submit <inputs> have name attribute, important as tied to inputted user value (what the user types in). <inputs> can have value assigned to them.

<lable>'s specialists form elements used for marking form controls. Not how have for attribute typing them to specific input.
inputs and lables wrapped in <p> tags, considered good practice.

Further form inputs:
Radio buttons let user select ONE choice, Excellent, Good or Bad in this case. Example;
<label for="rating">  Please enter rating   </label>
  <p><input type="radio" name="rating" value="excellent"> Excellent </p>
  <p> <input type="radio" name="rating" value="good"> Good </p>
  <p><input type="radio" name="rating" value="bad"> Bad </p>


Checkbox allows users to select multiple choices, in this instance user can select ipad, tv and video if wants to.
Example;
<label for="rating"> What device do you use  </label>
  <p><input type="checkbox" name="rating" value="ipad"> Ipad</p>
  <p><input type="checkbox" name="rating" value="tv"> TV </p>
  <p><input type="checkbox" name="rating" value="video"> Video </p>


Drop Down List's allow user to select one option from a list, in ths case Volvo or Saab or Audi etc. They are created using the <select></select> tags. Example;
<select id="cars" name="car">
  <option value="">  Select Car </option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select

Text Area, used for multiple lines of input. Attributes rows and cols specify size. Example;
<label  for="suggestion"> Enter a suggestion </label>
<textarea name="suggestions" rows="5" cols="25">
my suggestions are:
</textarea>

Can use required operator in order to specify required field. Example;
<input type="text" name="Name" required>
Could use further input types to restrict user choice.
Examples of HTML5 input types;
- color
- date
- datetime
- month
- search
- tel
- time
- week

<fieldset>....</fieldset> tag used to group common elements together. Example;
<fieldset>
          <label> First Name </label> <input type = "text" name="firstName">
          <label> Last Name </label> <input type  = "text" name="lastName">
</fieldset>

Can use <legend>....</legend> element to add title to <fieldset>. Example;
<fieldset>
     <legend> Name </legend>
         <label> First Name: </label> <input type = "text" name="firstName">
         <label> Last Name: </label> <input type  = "text" name="lastName">
 </fieldset>

Input and lable elements are inline, so need wrap them in block level element to make them sit on own line. W3C reccomend wrap in <p> tags to create new lines. Example; 
<fieldset>
    <legend> Name </legend>
   <p> <label> First Name: </label> <input type = "text" name="firstName"> </p>
   <p><label> Last Name: </label> <input type  = "text" name="lastName"> </p>
</fieldset>

CSS:
Stands for Cascading Style Sheets.
Define how to display HTML elements.
Two main parts: a selector and one or more delcarations, e.g; h1 {color:blue; font-size:12px;}
Proper example;
body {
      font-family: Tahoma, Arial, sans-serif;
      color: black;
      background-color: white;
      margin: 8px;
     }

Selectors:
Element selectors -
   - Name of an HTML element, e.g 
   p {
      color: red;
     }
   - Grouping selectors together same style applies to    all elements, e.g 
   h1 - 6 {
           color: grey;
          }

class selectors -
   "." followed by value of class e.g, 
   .section {
      font-size: 20px;
            }

id selectors - 
   "#" followed by id name, e.g 
   #footer {
      font-size: 10px;
           }

Breakpoint - The point at which wensite changes layouth based on width of viewport.

Viewport - What you are viewing the website therough, e.g Iphone 4, Ipad pro, Pixel 2 etc.

Media Queries:
Need to make sure viewport is representitative of device width. So we use viewport meta tag; <meta name="viewport" content="width=device=width,initial-scale=1">.
Example of media query; 
@media (query) {
   /* place rules in here */
}
Bigger example;
body {
   background-color:green;
}

@media(max-width:500px){
   body{
      background-color:yellow;
   }
}

Common devices e.g,
 /* Large Devices, Wide Screens */
    @media (max-width : 1200px) {
    }

     /* Medium Devices, Desktops */
    @media (max-width : 992px) {
    }

     /* Small Devices, Tablets */
    @media (max-width : 768px) {
    }

       /* Extra Small Devices, Phones */ 
    @media (max-width : 480px) {
    }
 
   /* Custom, iPhone Retina */ 
    @media (max-width : 320px) {
    }

#id {
   border-radius: 4px; (sets the radius of the border to 4 pixels).
   background-color: grey; (sets the colour of the background to grey (can use other colours)).
   border: solid 2px black; (Makes the border a solid line (not dotted or lined. Sets the border width to 2 pixles and makes it black).
   display: block; (displays element as block instead of inline element).
   display: inline; (displays element as inline instead of block element).
   height: 40%; (sets the height of the entire item to 40% (can be done in pixels)).
   margin: 50%; (sets the thickeness of margin area (can also be in pixels). If left is empty same as right. Same for top and bottom to 50%).
   margin-right: 50%; (sets the value of the margin area to the right to 50%).
   margin-left: 50%; (sets the value of the margin area to the left to 50%).
   max-width: 700px; (sets the maximum width of the item (often used with @media)).
   font-size: 12px; (sets the size of the text to 4 pixels).
   font-family: Arial, Helvetica, sans-serif; (sets the font family to Arial, then if can't do arial Helvetica then sans-serif).
   float: left; (floats the text to the left (can use right or center instead)).
   padding: 0% 1% 1% 10% (sets the thickness of the padding area. If left is empty, it is the same as right. Same for top and bottom).
   padding-left: 45%; (sets the thickness of the left side padding area to 45% (can also be in pixels)).
   padding-right: 45%; (sets the thickness of the left side padding area to 45% (can also be in pixels)).
   text-align: center; (aligns the items text to the center (can also use left, right etc.)).
   width: 50%; (sets the width of the entire id section (not just text) to 50% (can also be done in pixels)).
}
Git:
git add = adds something to be saved
git commit -m '' = Save work with message.
git status = shows whats been add and what hasn't.
git diff = shows whats been changed since last save.
git push origin master (or git push -u origin master) = Pushes everything to remote repository.
