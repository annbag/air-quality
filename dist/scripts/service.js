"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
function signRequest() {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            apikey: config_1.config.apiKey
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
    const url = config_1.config.buildStationLocationUrl(config_1.config);
    console.log(url);
    return makeRequest(url);
}
exports.getStationLocation = getStationLocation;
function getMeasurements(station) {
    const url = config_1.config.buildMeasurementsUrl(station);
    return makeRequest(url);
}
exports.getMeasurements = getMeasurements;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrQztBQUdsQyxTQUFTLFdBQVc7SUFDaEIsT0FBTztRQUNILE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxNQUFNLEVBQUUsZUFBTSxDQUFDLE1BQU07U0FDeEI7S0FDSixDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLE9BQWdCO0lBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxHQUFXO0lBQzVCLE1BQU0sT0FBTyxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBZ0Isa0JBQWtCO0lBQzlCLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hCLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFKRCxnREFJQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxPQUF3QjtJQUNwRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUhELDBDQUdDIn0=