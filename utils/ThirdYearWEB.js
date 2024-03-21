export const questions = [
  {
    id: 1,
    questionText: " HTML is a subset of ______ ",

    answerOptions: [
      { answerID: "a", answerText: "SGMD" },
      { answerID: "b", answerText: "SGML" },
      { answerID: "c", answerText: "SGMH" },
      { answerID: "d", answerText: "None of the above" },
    ],
    correctResponse: "b",
  },
  {
    id: 2,
    questionText:
      "The tag which allows some Web server search engines to search your Web page ",

    answerOptions: [
      { answerID: "a", answerText: "<SEARCH>" },
      { answerID: "b", answerText: "<ISINDEX>" },
      { answerID: "c", answerText: "<HEAD>" },
      { answerID: "d", answerText: "<LINK>" },
    ],
    correctResponse: "b",
  },
  {
    id: 3,
    questionText: "If you create an HTML page in word processor,",

    answerOptions: [
      { answerID: "a", answerText: "save it with binary file" },
      { answerID: "b", answerText: "save it with WMF file" },
      { answerID: "c", answerText: "save it with ASCII text file" },
      { answerID: "d", answerText: "All of the above" },
    ],
    correctResponse: "c",
  },
  {
    id: 4,
    questionText: "JavaScript Statement in Regular expressions that matches the pattern",
code:`
var text = "testing: 1, 2, 3"; 
var pattern = /d+/g;
`,
    answerOptions: [
      { answerID: "a", answerText: " text.check(pattern)" },
      { answerID: "b", answerText: "pattern.test(text)" },
      { answerID: "c", answerText: "text==pattern" },
      { answerID: "d", answerText: "text.equals(pattern)" },
    ],
    correctResponse: "b",
  },
  {
    id: 5,
    questionText: "The HTML tags are all",

    answerOptions: [
      { answerID: "a", answerText: "in lower case" },
      { answerID: "b", answerText: "in upper case" },
      { answerID: "c", answerText: "case sensitive" },
      { answerID: "d", answerText: "not case sensitive" },
    ],
    correctResponse: "d",
  },
  {
    id: 6,
    questionText: "The attribute used choose the type of font in HTML is?",

    answerOptions: [
      { answerID: "a", answerText: "Character" },
      { answerID: "b", answerText: "Face" },
      { answerID: "c", answerText: "Text-type" },
      { answerID: "d", answerText: "All of the above" },
    ],
    correctResponse: "b",
  },
  {
    id: 7,
    questionText: "When making bulleted lists, which options do you have?",

    answerOptions: [
      { answerID: "a", answerText: "triangle, disc, circle" },
      { answerID: "b", answerText: "triangle, square, circle" },
      { answerID: "c", answerText: "disc, circle, square" },
      { answerID: "d", answerText: "square, disc, polygon" },
    ],
    correctResponse: "d",
  },
  {
    id: 8,
    questionText: "To create a list using lowercase letters, use",

    answerOptions: [
      { answerID: "a", answerText: "<ol “a”>" },
      { answerID: "b", answerText: "<ol “a”>" },
      { answerID: "c", answerText: "<ol letter=”a”>" },
      { answerID: "d", answerText: "<ol type=”a”>" },
    ],
    correctResponse: "d",
  },
  {
    id: 9,
    questionText: "How emphasis display in the following code :",
code:`
<p>This is a <b>paragraph</b> with <i>emphasis</i>.</p>`,
    answerOptions: [
      { answerID: "a", answerText: "Bold and italicized" },
      { answerID: "b", answerText: "Bold only" },
      { answerID: "c", answerText: "Italicized only" },
      { answerID: "d", answerText: "Underlined" },
    ],
    correctResponse: "c",
  },
  {
    id: 10,
    questionText:
      "What should be added to create a horizontal menu?",

    answerOptions: [
      { answerID: "a", answerText: "pure-menu-horizontal" },
      { answerID: "b", answerText: "pure-menu-selected" },
      { answerID: "c", answerText: "pure-menu-has-children" },
      { answerID: "d", answerText: "pure-menu-scrollable" },
    ],
    correctResponse: "a",
  },
  {
    id: 11,
    questionText:
      "Which of the following is not a value for font-style property?",

    answerOptions: [
      { answerID: "a", answerText: "normal" },
      { answerID: "b", answerText: "italic" },
      { answerID: "c", answerText: "oblique" },
      { answerID: "d", answerText: "None of the above" },
    ],
    correctResponse: "d",
  },
  {
    id: 12,
    questionText:
      "What is the CSS Property Equivalent for the align attribute?",

    answerOptions: [
      { answerID: "a", answerText: "float" },
      { answerID: "b", answerText: "text-align" },
      { answerID: "c", answerText: "centre" },
      { answerID: "d", answerText: "both (a) and (b)" },
    ],
    correctResponse: "a",
  },
  {
    id: 13,
    questionText: "What is the main purpose of the <noscript> element?",

    answerOptions: [
      { answerID: "a", answerText: "To define alternative content for browsers with JavaScript disabled" },
      { answerID: "b", answerText: "To hide content from screen reader" },
      { answerID: "c", answerText: "To improve SEO ranking" },
      { answerID: "d", answerText: "To group related scripts" },
    ],
    correctResponse: "a",
  },
  {
    id: 14,
    questionText:
      "Which of the following is used to specify the subscript of text using CSS?",

    answerOptions: [
      { answerID: "a", answerText: "vertical-align: sub" },
      { answerID: "b", answerText: "vertical-align: super" },
      { answerID: "c", answerText: "vertical-align: subscript" },
      { answerID: "d", answerText: "None of the above" },
    ],
    correctResponse: "a",
  },
  {
    id: 15,
    questionText:
      "Which of the following measurement defines a measurement relative to a font’s x-height?",

    answerOptions: [
      { answerID: "a", answerText: "ex" },
      { answerID: "b", answerText: "em" },
      { answerID: "c", answerText: "pt" },
      { answerID: "d", answerText: "px" },
    ],
    correctResponse: "a",
  },
  {
    id: 16,
    questionText:
      "Which of the following property sets the amount of spacing between letters?",

    answerOptions: [
      { answerID: "a", answerText: "space" },
      { answerID: "b", answerText: "line-height" },
      { answerID: "c", answerText: "letter-spacing" },
      { answerID: "d", answerText: "none of the mentioned" },
    ],
    correctResponse: "c",
  },
  {
    id: 17,
    questionText: "You can refresh the webpage in JavaScript by using ________",

    answerOptions: [
      { answerID: "a", answerText: "window.reload" },
      { answerID: "b", answerText: "location.reload" },
      { answerID: "c", answerText: "window.refresh" },
      { answerID: "d", answerText: "page.refresh" },
    ],
    correctResponse: "b",
  },
  {
    id: 18,
    questionText: "JavaScript is interpreted by _________",

    answerOptions: [
      { answerID: "a", answerText: "Client" },
      { answerID: "b", answerText: "Server" },
      { answerID: "c", answerText: "Object" },
      { answerID: "d", answerText: "None of the above" },
    ],
    correctResponse: "a",
  },
  {
    id: 19,
    questionText: "Which of the following is the correct output for the following JavaScript code",
    code:`
var x=5,y=1  
var obj ={ x:10}  
with(obj)  
{  
      alert(y)  
}  
    `,
    answerOptions: [
      { answerID: "a", answerText: "1" },
      { answerID: "b", answerText: "5" },
      { answerID: "c", answerText: "10" },
      { answerID: "d", answerText: "None of the above" },
    ],
    correctResponse: "a",
  },
  {
    id: 20,
    questionText: "Quess the answer",
    code:`
<script language="javascript">
function x()
{
document.write(2+5+"8");
}
</script>
     `,
    answerOptions: [
      { answerID: "a", answerText: "258" },
      { answerID: "b", answerText: "Error" },
      { answerID: "c", answerText: "7" },
      { answerID: "d", answerText: "78" },
    ],
    correctResponse: "d",
  },
  {
    id: 21,
    questionText: "Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",
   
    answerOptions: [
      { answerID: "a", answerText: "(a!==null)" },
      { answerID: "b", answerText: "if(a!)" },
      { answerID: "c", answerText: "if(a!null)" },
      { answerID: "d", answerText: "if(a!=null)" },
    ],
    correctResponse: "a",
  },
  {
    id: 22,
    questionText: "What is the use of this JavaScript statement?",
   code:`<button onclick="window.print()">Submit</button>`,
    answerOptions: [
      { answerID: "a", answerText: "It will write 'Submit' on the current Window" },
      { answerID: "b", answerText: "It will print the content of the current page" },
      { answerID: "c", answerText: "It will write the content of the current page in the browser’s console" },
      { answerID: "d", answerText: "None of the above" },
    ],
    correctResponse: "b",
  },
  {
    id: 23,
    questionText: "What will be the value of VALUE?",
   code:`
<script>
  const VALUE = 10;
  VALUE = 20;
</script>
`,
    answerOptions: [
      { answerID: "a", answerText: "10" },
      { answerID: "b", answerText: "20" },
      { answerID: "c", answerText: "valueError" },
      { answerID: "d", answerText: "Type Error" },
    ],
    correctResponse: "d",
  },
  {
    id: 24,
    questionText: "What will be the output of the following JavaScript code?",
   code:`
<script>
   Console.log(0.1+0.2===0.3)
</script>
`,
    answerOptions: [
      { answerID: "a", answerText: "true" },
      { answerID: "b", answerText: "false" },
      { answerID: "c", answerText: "TypeError" },
      { answerID: "d", answerText: "Undefined" },
    ],
    correctResponse: "b",
  },
  {
    id: 25,
    questionText: "What will be the output of the following JavaScript code?",
   code:`
<script>
  let cars1 = ['Honda', 'Hyundai'];
  let cars2 = cars1;
  cars1.push('Mahinda');
  document.write(cars1 + "---" + cars2);
</script>

`,
    answerOptions: [
      { answerID: "a", answerText: "Honda,Hyundai,Mahinda---Honda,Hyundai" },
      { answerID: "b", answerText: "Honda,Hyundai,Mahinda---Honda,Hyundai,Mahinda" },
      { answerID: "c", answerText: "Honda,Hyundai ---Honda,Hyundai" },
      { answerID: "d", answerText: "[Honda,Hyundai,Mahinda]---[Honda,Hyundai,Mahinda]" },
    ],
    correctResponse: "b",
  },
  {
    id: 26,
    questionText: "What will be the output of the following JavaScript code?",
   code:`
function equalto()
{
    let num=10;
    if(num==="10")
        return true;
    else
        return false;
}
`,
    answerOptions: [
      { answerID: "a", answerText: "false" },
      { answerID: "b", answerText: "true" },
      { answerID: "c", answerText: "compilation error" },
      { answerID: "d", answerText: "runtime error" },
    ],
    correctResponse: "a",
  },
  {
    id: 27,
    questionText: "What is React js?",
   
    answerOptions: [
      { answerID: "a", answerText: "Open-source JavaScript back-end library" },
      { answerID: "b", answerText: "JavaScript front-end library to create a database" },
      { answerID: "c", answerText: "Free and open-source JavaScript front-end library" },
      { answerID: "d", answerText: "None of the above" },
    ],
    correctResponse: "c",
  },
  {
    id: 28,
    questionText: "When using the defer attribute on a script tag, what happens?",
   
    answerOptions: [
      { answerID: "a", answerText: "The script is downloaded asynchronously but executed only after the HTML has parsed" },
      { answerID: "b", answerText: " The script is downloaded and executed after the HTML has completely loaded" },
      { answerID: "c", answerText: "The script is downloaded and executed in the order it appears in the HTML " },
      { answerID: "d", answerText: "The script is not downloaded or executed" },
    ],
    correctResponse: "c",
  },
  {
    id: 29,
    questionText: "What will be the output of the following PHP code?",
   code:`
<?php
  $x = 10;
  $y = 20;
  if ($x > $y && 1||1)
      print "welcome to codecombat" ;
  else
      print "Welcome to SRKREC";
?>
   `,
    answerOptions: [
      { answerID: "a", answerText: "no output" },
      { answerID: "b", answerText: "Welcome to SRKREC" },
      { answerID: "c", answerText: "welcome to codecombat" },
      { answerID: "d", answerText: "error" },
    ],
    correctResponse: "c",
  },
  {
    id: 30,
    questionText: "Which is the right way of declaring a variable in PHP?",

    answerOptions: [
      { answerID: "a", answerText: "$3hello" },
      { answerID: "b", answerText: "$_hello" },
      { answerID: "c", answerText: "$this" },
      { answerID: "d", answerText: "$5_Hello" },
    ],
    correctResponse: "b",
  },
  {
    id: 31,
    questionText: "What will be the output of the following PHP program?",
    code :`
<?php
  $a = 100;
  if ($a > 10)
      printf("PHP Quiz");
  else if ($a > 20)
      printf("PHP MCQ");
  else if($a > 30)
      printf("PHP Program");
?>
    `,
    answerOptions: [
      { answerID: "a", answerText: "PHP Quiz <br> PHP MCQ <br> PHP Program" },
      { answerID: "b", answerText: "PHP Quiz" },
      { answerID: "c", answerText: "no output" },
      { answerID: "d", answerText: "PHP MCQ" },
    ],
    correctResponse: "b",
  },
  {
    id: 32,
    questionText: `
Which of the looping statements is/are supported by PHP? 
 i)for loop 
ii)while loop 
iii)do-while-loop
iv)foreach loop` ,
  
    answerOptions: [
      { answerID: "a", answerText: "Only (iv)" },
      { answerID: "b", answerText: "(i)and(ii)" },
      { answerID: "c", answerText: "(i),(ii)and(iii)" },
      { answerID: "d", answerText: "(i),(ii),(iii)and(iv)" },
    ],
    correctResponse: "d",
  },
  {
    id: 33,
    questionText: "What will be the output of the following PHP program?" ,
    code:`
<?php
  $a = "$winner";
  $b = "/$looser";
  echo $a,$b;
?>
    `,
    answerOptions: [
      { answerID: "a", answerText: "/" },
      { answerID: "b", answerText: "$looser" },
      { answerID: "c", answerText: "/$looser" },
      { answerID: "d", answerText: "$winner/$looser" },
    ],
    correctResponse: "a",
  },
  {
    id: 34,
    questionText: "Which of the following scoping type does JavaScript use?" ,
    
    answerOptions: [
      { answerID: "a", answerText: "Sequential" },
      { answerID: "b", answerText: "Segmental" },
      { answerID: "c", answerText: "Lexical" },
      { answerID: "d", answerText: "Literal" },
    ],
    correctResponse: "c",
  },
  {
    id: 35,
    questionText: "Which of the following is used for concatenation in PHP?" ,
    
    answerOptions: [
      { answerID: "a", answerText: "+ (plus)" },
      { answerID: "b", answerText: "* (Asterisk)" },
      { answerID: "c", answerText: ". (dot)" },
      { answerID: "d", answerText: "append()" },
    ],
    correctResponse: "c",
  },
  {
    id: 36,
    questionText: "Which SQL function is used to count the number of rows in a SQL query?" ,
    
    answerOptions: [
      { answerID: "a", answerText: "COUNT ()" },
      { answerID: "b", answerText: "NUMBER ()" },
      { answerID: "c", answerText: "SUM ()" },
      { answerID: "d", answerText: "COUNT(*)" },
    ],
    correctResponse: "d",
  },
  {
    id: 37,
    questionText: "Which type of JOIN is used to returns rows that do not have matching values?" ,
    
    answerOptions: [
      { answerID: "a", answerText: "Natural JOIN" },
      { answerID: "b", answerText: "Outer JOIN" },
      { answerID: "c", answerText: "EQUI JOIN" },
      { answerID: "d", answerText: "All of the above" },
    ],
    correctResponse: "b",
  },
  {
    id: 38,
    questionText: "Which of the following is the correct order of a SQL statement?" ,
    
    answerOptions: [
      { answerID: "a", answerText: "SELECT, GROUP BY, WHERE, HAVING" },
      { answerID: "b", answerText: "SELECT, WHERE, GROUP BY, HAVING" },
      { answerID: "c", answerText: "SELECT, HAVING, WHERE, GROUP BY" },
      { answerID: "d", answerText: "SELECT, WHERE, HAVING, GROUP BY" },
    ],
    correctResponse: "b",
  },
  {
    id: 39,
    questionText: "How many Primary keys can have in a table? " ,
    
    answerOptions: [
      { answerID: "a", answerText: "Only 1" },
      { answerID: "b", answerText: "Only 2" },
      { answerID: "c", answerText: "Depends on no of Columns" },
      { answerID: "d", answerText: "Depends on DBA" },
    ],
    correctResponse: "a",
  },
  {
    id: 40,
    questionText: "What is the purpose of the HAVING clause in SQL?  " ,
    
    answerOptions: [
      { answerID: "a", answerText: "It orders the results in ascending or descending order. " },
      { answerID: "b", answerText: " It filters the rows returned by the SELECT statement" },
      { answerID: "c", answerText: "It specifies the columns to be retrieved. " },
      { answerID: "d", answerText: "It filters the summary rows created by the GROUP BY clause" },
    ],
    correctResponse: "d",
  },
  {
    id: 41,
    questionText: "Which of the following statement is correct regarding the difference between TRUNCATE, DELETE and DROP command?" ,
    code:
`I. DELETE operation can be rolled back but TRUNCATE and DROP operations cannot be rolled back.
II. TRUNCATE and DROP operations can be rolled back but DELETE operations cannot be rolled back.
III. DELETE is an example of DML, but TRUNCATE and DROP are examples of DDL.
IV. All are an example of DDL.
    `,
    answerOptions: [
      { answerID: "a", answerText: "I and III" },
      { answerID: "b", answerText: "II and III" },
      { answerID: "c", answerText: "II and IV" },
      { answerID: "d", answerText: "II and IV" },
    ],
    correctResponse: "a",
  },
  {
    id: 42,
    questionText: "What will be the output of the following code snippet?" ,
    code:`
var name = "John";
function sayName() {
  console.log(name);
  var name = "Jane";
}
sayName();
    `,
    answerOptions: [
      { answerID: "a", answerText: "John" },
      { answerID: "b", answerText: "Jane" },
      { answerID: "c", answerText: "Undefined" },
      { answerID: "d", answerText: "ReferenceError" },
    ],
    correctResponse: "c",
  },
  {
    id: 43,
    questionText: "What will be the output of the following code snippet?" ,
    code:`
function foo() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Promise resolved.");
      }, 1000);
    });
  }
      
console.log("Start");
foo().then(function (result) {
  console.log(result);
});
console.log("End");
      
    `,
    answerOptions: [
      { answerID: "a", answerText: "Start, Promise resolved., End " },
      { answerID: "b", answerText: "Start, End, Promise resolved. " },
      { answerID: "c", answerText: "Promise resolved., Start, End " },
      { answerID: "d", answerText: "Start, End, Promise resolved. " },
    ],
    correctResponse: "b",
  },
  {
    id: 44,
    questionText: "Which is the element that has a src property to initiate HTTP GET request?" ,

    answerOptions: [
      { answerID: "a", answerText: "img " },
      { answerID: "b", answerText: "iframe" },
      { answerID: "c", answerText: " script " },
      { answerID: "d", answerText: "both img and script " },
    ],
    correctResponse: "d",
  },
  {
    id: 45,
    questionText: "Which is the appropriate code to begin a HTTP GET request?" ,

    answerOptions: [
      { answerID: "a", answerText: "request.open(“GET”,”data”); " },
      { answerID: "b", answerText: "request.open(GET,”data.csv”);" },
      { answerID: "c", answerText: "request.open(“GET”,”data.csv”);" },
      { answerID: "d", answerText: "request.open(“GET”);" },
    ],
    correctResponse: "c",
  },
];
