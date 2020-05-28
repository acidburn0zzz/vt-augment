import conf from "./config";
var CSS_SCOPE = '4rrgf4';
var COMMON_CSS = "\n  @keyframes spin-" + CSS_SCOPE + " {\n    to { transform: rotate(360deg); }\n  }\n  .spinner-" + CSS_SCOPE + " {\n    border: 8px solid rgba(0, 0, 0, 0.2);\n    border-left-color: white;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin-" + CSS_SCOPE + " 1.2s linear infinite;\n  };\n";
var DRAWER_MODE_STYLESHEET = "\n  " + COMMON_CSS + "\n  .vt-augment-drawer-" + CSS_SCOPE + " {\n    width: 700px;\n    background: #313d5a;\n    border: 1px solid #e6e6e6;\n    text-align: left;\n    z-index: 102;\n    position: fixed;\n    right: 0;\n    top: 0;\n    height: 100vh;\n    box-shadow: -4px 5px 8px -3px rgba(17, 17, 17, .16);\n    animation: slideToRight-" + CSS_SCOPE + " 0.5s 1 forwards;\n    transform: translateX(100vw);\n  }\n  .vt-augment-drawer-" + CSS_SCOPE + "[opened] {\n    display: block;\n    animation: slideFromRight-" + CSS_SCOPE + " 0.2s 1 forwards;\n  }\n  @keyframes slideFromRight-" + CSS_SCOPE + " {\n    0% {\n      transform: translateX(100vw);\n    }\n    100% {\n      transform: translateX(0);\n    }\n  }\n  @keyframes slideToRight-" + CSS_SCOPE + " {\n    100% {\n      transform: translateX(100vw);\n      display: none;\n    }\n  }\n";
var EMBEDDED_MODE_STYLESHEET = ""; // TODO
var VTAugment = /** @class */ (function () {
    function VTAugment(_container, _options) {
        this._container = _container;
        this._options = _options;
        console.log('VT AUGMENT', 'constructor', _container, _options);
        createStyleSheet(true);
    }
    VTAugment.factory = function (container, options) {
        if (container === void 0) { container = null; }
        if (options === void 0) { options = {}; }
        return new VTAugment(container, options);
    };
    /**
     * Sets the default options.
     *
     * @param options options dict
     */
    VTAugment.prototype.defaults = function (options) {
        conf.defaults = options;
        return this;
    };
    VTAugment.prototype.url = function (url) {
        var _this = this;
        this.loading(true);
        var _iframe = getIframe(this._container);
        _iframe.onload = function () {
            _this.loading(false);
        };
        _iframe.src = url;
        return this;
    };
    VTAugment.prototype.openDrawer = function () {
        this._container.setAttribute('opened', '');
    };
    VTAugment.prototype.closeDrawer = function () {
        this._container.removeAttribute('opened');
    };
    VTAugment.prototype.listen = function () {
        // TODO
    };
    VTAugment.prototype.loading = function (active) {
        var _spinner = getSpinner(this._container);
        _spinner.style.display = active ? 'block' : 'none';
    };
    return VTAugment;
}());
export { VTAugment };
function createStyleSheet(drawerMode) {
    var _stylesheet = document.createElement('style');
    _stylesheet.innerHTML = drawerMode ? DRAWER_MODE_STYLESHEET : EMBEDDED_MODE_STYLESHEET;
    document.body.appendChild(_stylesheet);
}
function getIframe(container) {
    var _iframe = container.querySelector('iframe');
    if (!_iframe) {
        _iframe = document.createElement('iframe');
        _iframe.style.width = '100%';
        _iframe.style.height = '100%';
        _iframe.setAttribute('frameborder', '0');
        this._container.appendChild(_iframe);
    }
    return _iframe;
}
function getSpinner(container) {
    var _spinner = container.querySelector('div.spinner');
    if (!_spinner) {
        _spinner = document.createElement('div');
        _spinner.classList.add("spinner-" + CSS_SCOPE);
        this._container.appendChild(_spinner);
    }
    return _spinner;
}
//# sourceMappingURL=vt-augment.js.map