!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n=n||self)["vt-augment"]=t()}(this,(function(){"use strict";var n=function(){function n(n,t){var e,r;this._container=n,this._options=t,console.log("VT AUGMENT","constructor",n,t),e=!0,(r=document.createElement("style")).innerHTML=e?"\n  \n  @keyframes spin-4rrgf4 {\n    to { transform: rotate(360deg); }\n  }\n  .spinner-4rrgf4 {\n    border: 8px solid rgba(0, 0, 0, 0.2);\n    border-left-color: white;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin-4rrgf4 1.2s linear infinite;\n  };\n\n  .vt-augment-drawer-4rrgf4 {\n    width: 700px;\n    background: #313d5a;\n    border: 1px solid #e6e6e6;\n    text-align: left;\n    z-index: 102;\n    position: fixed;\n    right: 0;\n    top: 0;\n    height: 100vh;\n    box-shadow: -4px 5px 8px -3px rgba(17, 17, 17, .16);\n    animation: slideToRight-4rrgf4 0.5s 1 forwards;\n    transform: translateX(100vw);\n  }\n  .vt-augment-drawer-4rrgf4[opened] {\n    display: block;\n    animation: slideFromRight-4rrgf4 0.2s 1 forwards;\n  }\n  @keyframes slideFromRight-4rrgf4 {\n    0% {\n      transform: translateX(100vw);\n    }\n    100% {\n      transform: translateX(0);\n    }\n  }\n  @keyframes slideToRight-4rrgf4 {\n    100% {\n      transform: translateX(100vw);\n      display: none;\n    }\n  }\n":"",document.body.appendChild(r)}return n.factory=function(t,e){return void 0===t&&(t=null),void 0===e&&(e={}),new n(t,e)},n.prototype.defaults=function(n){return this},n.prototype.url=function(n){var t=this;this.loading(!0);var e=function(n){var t=n.querySelector("iframe");t||((t=document.createElement("iframe")).style.width="100%",t.style.height="100%",t.setAttribute("frameborder","0"),this._container.appendChild(t));return t}(this._container);return e.onload=function(){t.loading(!1)},e.src=n,this},n.prototype.openDrawer=function(){this._container.setAttribute("opened","")},n.prototype.closeDrawer=function(){this._container.removeAttribute("opened")},n.prototype.listen=function(){},n.prototype.loading=function(n){(function(n){var t=n.querySelector("div.spinner");t||((t=document.createElement("div")).classList.add("spinner-4rrgf4"),this._container.appendChild(t));return t})(this._container).style.display=n?"block":"none"},n}();var t=n.factory;return t.default=n.factory,t}));
//# sourceMappingURL=vt-augment.js.map
