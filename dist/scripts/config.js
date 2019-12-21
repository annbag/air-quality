"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    lat: 52.2405192,
    lng: 21.0811282,
    apiKey: 'qKEUGRSSVLE6AB710I7UR09ZgL2Xh2Md',
    buildStationLocationUrl: (config) => `https://airapi.airly.eu/v2/installations/nearest?lat=${config.lat}&lng=${config.lng}`,
    buildMeasurementsUrl: (station) => `https://airapi.airly.eu/v2/measurements/installation?installationId=${station.id}`
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2NyaXB0cy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLE1BQU0sR0FBRztJQUNsQixHQUFHLEVBQUUsVUFBVTtJQUNmLEdBQUcsRUFBRSxVQUFVO0lBQ2YsTUFBTSxFQUFFLGtDQUFrQztJQUMxQyx1QkFBdUIsRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsd0RBQXdELE1BQU0sQ0FBQyxHQUFHLFFBQVEsTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUNuSSxvQkFBb0IsRUFBRSxDQUFDLE9BQXdCLEVBQUUsRUFBRSxDQUFDLHVFQUF1RSxPQUFPLENBQUMsRUFBRSxFQUFFO0NBQzFJLENBQUMifQ==