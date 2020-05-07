interface Config {
    lat: number,
    lng: number,
    apiKey: string,
    buildStationLocationUrl: string
    buildMeasurementsUrl: string
}

interface StationLocation {
    id: number,
    location: Location,
    address: Address,
    elevation: number,
    airly: boolean,
    sponsor: Sponsor
}

interface Location {
    latitude: number,
    longitude: number
}

interface Sponsor {
    id: number,
    name: string,
    description: string
    logo: string
    link: string
}

interface Address {
    country: string,
    city: string,
    street: string,
    number: string,
    displayAddress1: string
}

interface Station {
    current: CurrentStation,
    history: any,
    forecast: any
}

interface CurrentStation {
    fromDateTime: string,
    tillDateTime: string,
    values: Array<Measurement>,
    indexes: Array<Index>,
    standards: Array<Standard>
}

interface Measurement {
    name: string,
    value: number
}

interface Index {
    name: string,
    value: number,
    level: string,
    description: string,
    advice: string,
    color: string
}

interface Standard {
    name: string,
    pollutant: string,
    limit: number,
    percent: number
}
