# gscanner-js
Scans strings of text into tokens based on a set of splitting tokens
 

gscanner-js is a simple Javascript library that helps you quickly scan a string and split it into 
substrings based on an array of supplied tokens.
 
This library benchmarks very fast and is stable.

There are times when you either can do without the overhead of regular expressions, or the tokens required to 
split a string are a finite number.

There is no need to resort to regular expressions in this case.

This simple library lends itself as an hi-speed scanner/splitter and returns an array containing the substrings of the original
string. Whether you would love to retain the splitting tokens in the scanner's output is totally up to you! 

Simply set the ```IncludeTokensInOutput``` property of your ```GScanner``` to true to retain the splitting tokens.
Else set it to false.

The most sensible way of implementing this scan is to prioritize the splitter-tokens by sorting them by length in descending order.
So, longer tokens are first split out, and if they are not found, the consecutive shorter ones are.

If you have other requirements, modify the scanner.js file and specify the priority order for scanning tokens by changing
the sort function as appropriate.



 ## Example

A beautiful example usage would be for scanning an arithmetic expression or other expression into a form wherein the input tokens are very visible:

```Javascript

function example(){
    var sc = new Scanner("34+45+sin(33cos(8.24))/22^cosh(4-tan(2))+sinsinh(3)-sinh(sin(2))", true, 
    new Array("+","-","sin","sinh","cos","cosh","^","/","(",")")); 
    print(sc.scan()); 
}
```
	



  The output would be:
  
  
  ```Javascript
   34,+,45,+,sin,(,33,cos,(,8.24,),),/,22,^,cosh,(,4,-,tan,(,2,),),+,sin,sinh,(,3,),-,sinh,(,sin,(,2,),)
   ```



 

The square braces and the commas are just for formatting.

If you set 
```Javascript 
IncludeTokensInOutput
``` 
to false by doing this:

```Javascript
function example(){
    var sc = new Scanner("34+45+sin(33cos(8.24))/22^cosh(4-tan(2))+sinsinh(3)-sinh(sin(2))", false, 
    new Array("+","-","sin","sinh","cos","cosh","^","/","(",")")); 
    print(sc.scan()); 
}
```
  
  Then the output is:
  
```Javascript
34,45,33,8.24,22,4,tan,2,3,2
```


Enjoy!

