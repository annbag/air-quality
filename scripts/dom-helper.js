function clearDOMElement(box) {
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
}

function clearDOMElements(...$elements) {
    $elements.forEach(clearDOMElement);
}
