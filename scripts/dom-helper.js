function clearDOMElement(box) {
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
}
function clearDOMElements() {
    var $elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        $elements[_i] = arguments[_i];
    }
    $elements.forEach(clearDOMElement);
}
//# sourceMappingURL=dom-helper.js.map