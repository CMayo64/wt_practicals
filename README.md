# WEB TECH Practicals

# Session 1

Here are some tags and how you use them
```html
<!doctype html> 
<html> (Says its html 5 code)
   <head> (Header)
            <title> Page title (User doesnt see this)</title>
   </head>
   <body> (What the user Actually sees)
      <center> (puts enclosed img in the center)
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

Git:
git add = adds something to be saved
git commit -m '' = Save work with message.
git status = shows whats been add and what hasn't.
git diff = shows whats been changed since last save.
git push origin master (or git push -u origin master) = Pushes everything to remote repository.
