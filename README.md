# MyJSPolyfills

Hi! here is a simple polyfill library allows you to have access to some functions of ES5 or ES6 in the Wrapper Objects that are behind the distinct data types in JavaScripts.

Right now the library supports the following Wrapper Objects and functions:

* String
	* includes
* Array
	* map
	* filter
	* find

The library was tested in IE7.

# How to Install

In your project folder just simply type:
`npm install myjspolyfills`

## How to use

Just import the library then, there are two different way to apply the polyfills:
* Specifying the exact polyfill required:
	 ```javascript
   //import the library
	 var myjspolyfills = require("myjspolyfills");
     //execute the function to apply the include polyfill into the String definition object
     myjspolyfills.String.applyIncludes();
     
     //Then you can use the new function in the code no matter where you are 
     var example = "This is and example";
     console.log(example.includes("is")); //return true
     console.log(example.includes("not")); //return false
	 ```

* If you want to apply all the functions of certain Wrapper just execute the function **loadCompleteModule** in the library please check the code below:
```javascript
	//import the library
	 var myjspolyfills = require("myjspolyfills");
     /*Here is how to implemente the loadCompleteModule function
       just make sure you add as parameter the name of the 
       Wrapper Object that you want to affect in this case the Array object.*/
     myjspolyfills.loadCompleteModule("Array");
     
     //Then you can use the new functions in the code no matter where you are 
     var example = [1,2,3,4,5];
     console.log(example.map(function (element) {
			return element + 1;
	 })); //return [2,3,4,5,6];
     console.log(example.find(function (element) {
			return element > 2;
	 })); //return 3
```

## Contribute

Let me know if you have any sugestion about what to impruve and feel free to send me any pull request with some new feature or fix I checked and let you know once I reviewed.


## License

[MIT](LICENSE)
