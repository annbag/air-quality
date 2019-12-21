var config = {
    lat: 52.2405192,
    lng: 21.0811282,
    apiKey: 'qKEUGRSSVLE6AB710I7UR09ZgL2Xh2Md',
    buildStationLocationUrl: function (config) { return "https://airapi.airly.eu/v2/installations/nearest?lat=" + config.lat + "&lng=" + config.lng; },
    buildMeasurementsUrl: function (station) { return "https://airapi.airly.eu/v2/measurements/installation?installationId=" + station.id; }
};
//# sourceMappingURL=config.js.map