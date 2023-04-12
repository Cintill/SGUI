
# SGUI
SGUI is a lightweight and customizable JavaScript library for creating custom graphical user interfaces (GUI) for your web projects. It provides an easy-to-use API for creating and manipulating GUI elements with minimal coding.
## Installation
To use SGUI, you can include the library in your HTML file using a script tag:
```html
<script src="https://raw.githubusercontent.com/Cintill/SGUI/main/sGUI.js"></script>
```
If you use SGUI for making bookmarklets, consider the following code:
```js
javascript:(function () { var script = document.createElement('script'); script.src='https://raw.githubusercontent.com/Cintill/SGUI/main/sGUI.js'; document.body.appendChild(script); script.onload = yourCode() })();function yourCode() { your code here! }
```
## Usage
To create a new SGUI element, you can use the following syntax:
```js
const element = new SGUI.Element({ 
  type: 'div', 
  size: { width: '100px', height: '100px' }, 
  style: 'background-color: #fff;' 
});
```
You can set the type of the element, its size, and style. The type parameter can be any valid HTML element (e.g. 'div', 'span', 'button', 'img'). The size parameter is an object with width and height properties. The style parameter is a string of CSS styles to apply to the element.

You can also set event listeners on an element like this:
```js
element.on('click', () => {
  console.log('Element clicked!');
});
```
You can chain multiple event listeners to an element:
```js
element.on('click', () => {
  console.log('Element clicked!');
}).on('mouseover', () => {
  console.log('Mouse over element!');
});
```
## Examples
Here are some examples of how you can use SGUI to create GUI elements:
```js
const container = new SGUI.Element({ 
  type: 'div', 
  size: { width: '200px', height: '200px' }, 
  style: 'background-color: #eee; display: flex; justify-content: center; align-items: center;' 
});

const button = new SGUI.Element({ 
  type: 'button', 
  size: { width: '100px', height: '50px' }, 
  style: 'background-color: #fff; border: 2px solid #333; font-size: 16px;' 
}).on('click', () => {
  console.log('Button clicked!');
});

container.appendChild(button);
document.body.appendChild(container);
```
This code will create a container div element with a gray background and centered contents. Inside the container, it will create a button element with a white background, black border, and a click event listener. The button will be added to the container, and the container will be appended to the body element of the HTML document.
## Contributing
If you would like to contribute to SGUI, please feel free to submit pull requests or open issues on the (https://t.com)[GitHub repository].
# SGUI
SGUI is a lightweight and customizable JavaScript library for creating custom graphical user interfaces (GUI) for your web projects. It provides an easy-to-use API for creating and manipulating GUI elements with minimal coding.
## Installation
To use SGUI, you can include the library in your HTML file using a script tag:
```html
<script src="https://raw.githubusercontent.com/Cintill/SGUI/main/sgui.js"></script>
```
## Usage
To create a new SGUI element, you can use the following syntax:
```js
const element = new SGUI.Element({ 
  type: 'div', 
  size: { width: '100px', height: '100px' }, 
  style: 'background-color: #fff;' 
});
```
You can set the type of the element, its size, and style. The type parameter can be any valid HTML element (e.g. 'div', 'span', 'button', 'img'). The size parameter is an object with width and height properties. The style parameter is a string of CSS styles to apply to the element.

You can also set event listeners on an element like this:
```js
element.on('click', () => {
  console.log('Element clicked!');
});
```
You can chain multiple event listeners to an element:
```js
element.on('click', () => {
  console.log('Element clicked!');
}).on('mouseover', () => {
  console.log('Mouse over element!');
});
```
## Examples
Here are some examples of how you can use SGUI to create GUI elements:
```js
const container = new SGUI.Element({ 
  type: 'div', 
  size: { width: '200px', height: '200px' }, 
  style: 'background-color: #eee; display: flex; justify-content: center; align-items: center;' 
});

const button = new SGUI.Element({ 
  type: 'button', 
  size: { width: '100px', height: '50px' }, 
  style: 'background-color: #fff; border: 2px solid #333; font-size: 16px;' 
}).on('click', () => {
  console.log('Button clicked!');
});

container.appendChild(button);
document.body.appendChild(container);
```
This code will create a container div element with a gray background and centered contents. Inside the container, it will create a button element with a white background, black border, and a click event listener. The button will be added to the container, and the container will be appended to the body element of the HTML document.
## Contributing
If you would like to contribute to SGUI, please feel free to submit pull requests or open issues on the [GitHub repository](https://github.com/Cintill/SGUI/pulls).
## License
SGUI is licensed under the MIT license. See the [LICENSE](https://github.com/Cintill/SGUI/blob/main/LICENSE) file for more information.
