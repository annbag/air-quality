async function fetchStationMeasurements() {
    const location = await getStationLocation();

    if (!Array.isArray(location) || location.length === 0) {
        throw new Error('Nie znaleziono stacji');
    }

    const [station] = location;
    const measurements = await getMeasurements(station);
    return { station, measurements };
}

async function handleSubmit(event: Event) {
    event.preventDefault();

    MeasurementComponent.readPositionFromUI();
    const mc = new MeasurementComponent();

    try {
        const { station, measurements } = await fetchStationMeasurements();
        mc.displayMeasurementsForStation(station, measurements);
    } catch (err) {
        mc.displayErrorMessage(err.message);
    }
}

function main() {
    MeasurementComponent.setPositionToUI();

    const formPlace = document.querySelector('#place-form');
    formPlace.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', main);