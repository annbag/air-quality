function clearDOMElement(box: HTMLElement) {
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
}

export function clearDOMElements(...$elements: HTMLElement[]) {
    $elements.forEach(clearDOMElement);
}
