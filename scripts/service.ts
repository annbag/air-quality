import { config } from './config';

function signRequest() {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            apikey: config.apiKey
        }
    };
}

function fetchJSON(request: Request) {
    return fetch(request).then(response => response.json());
}

function makeRequest(url: string) {
    const headers = signRequest();
    const request = new Request(url, headers);
    return fetchJSON(request);
}

export function getStationLocation() {
    const url = config.buildStationLocationUrl(config);
    return makeRequest(url);
}

export function getMeasurements(station: StationLocation) {
    const url = config.buildMeasurementsUrl(station);
    return makeRequest(url);
}
