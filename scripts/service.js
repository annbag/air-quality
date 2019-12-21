function signRequest() {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            apikey: config.apiKey
        }
    };
}
function fetchJSON(request) {
    return fetch(request).then(function (response) { return response.json(); });
}
function makeRequest(url) {
    var headers = signRequest();
    var request = new Request(url, headers);
    return fetchJSON(request);
}
function getStationLocation() {
    var url = config.buildStationLocationUrl(config);
    return makeRequest(url);
}
function getMeasurements(station) {
    var url = config.buildMeasurementsUrl(station);
    return makeRequest(url);
}
//# sourceMappingURL=service.js.map