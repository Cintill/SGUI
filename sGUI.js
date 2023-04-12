// Made by BSOD with <3


const SGUI = (function() {
  class Element {
    constructor(type) {
      this._type = type;
      this._el = document.createElement(this._type);
      this._el.style.color = "#000";
    };

    get type() {
      return this._type;
    };

    get el() {
      return this._el;
    };

    set style(styles) {
      this._el.setAttribute("style", styles);
    };

    setAttribute(attr, value) {
      this._el.setAttribute(attr, value);
    };

    appendTo(parent) {
      parent.appendChild(this._el);
    };

    remove() {
      this._el.parentNode.removeChild(this._el);
    };
  };

  return {
    Element: Element,
  };
})();
