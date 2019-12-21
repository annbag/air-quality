function clearDOMElement(box) {
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
}
function clearDOMElements(...$elements) {
    $elements.forEach(clearDOMElement);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvZG9tLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGVBQWUsQ0FBQyxHQUFnQjtJQUNyQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUU7UUFDbkIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDbkM7QUFDTCxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFHLFNBQXdCO0lBQ2pELFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkMsQ0FBQyJ9