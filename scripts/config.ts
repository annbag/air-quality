const config = {
    lat: 52.2405192,
    lng: 21.0811282,
    apiKey: 'qKEUGRSSVLE6AB710I7UR09ZgL2Xh2Md',
    buildStationLocationUrl: (config: any) => `https://airapi.airly.eu/v2/installations/nearest?lat=${config.lat}&lng=${config.lng}`,
    buildMeasurementsUrl: (station: any) => `https://airapi.airly.eu/v2/measurements/installation?installationId=${station.id}`
};