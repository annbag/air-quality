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
    return fetch(request).then(response => response.json());
}

function makeRequest(url) {
    const headers = signRequest();
    const request = new Request(url, headers);
    return fetchJSON(request);
}

function getStationLocation() {
    const url = config.buildStationLocationUrl(config);
    return makeRequest(url);
}

function getMeasurements(station) {
    const url = config.buildMeasurementsUrl(station);
    return makeRequest(url);
}
