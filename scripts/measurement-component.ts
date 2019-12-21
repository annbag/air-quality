class MeasurementComponent {
    static getMeasurementValue(current: CurrentStation, pollutant: String) {
        return current.standards.find(x => x.pollutant === pollutant);
    }

    static getLabelForPercent(percent: number) {

        if (percent >= 100) {
            return 'high-level';
        } else if (percent >= 50) {
            return 'warning';
        } else {
            return 'low-level';
        }
    }

    static readPositionFromUI() {
        const inputLatitude: HTMLFormElement = document.querySelector('#latitude');
        const inputLongitude: HTMLFormElement = document.querySelector('#longitude');
        config.lat = inputLatitude.value;
        config.lng = inputLongitude.value;
    }

    static setPositionToUI() {
        const inputLatitude: HTMLFormElement = document.querySelector('#latitude');
        const inputLongitude: HTMLFormElement = document.querySelector('#longitude');
        inputLatitude.value = config.lat;
        inputLongitude.value = config.lng;
    }

    displayAddress(target: HTMLElement, { street, number, city, country }: Address) {
        const $city = document.createElement('p');
        $city.classList.add('title');
        $city.textContent = city;
        target.appendChild($city);

        const $address = document.createElement('p');
        $address.classList.add('address');
        $address.textContent = `Adres czujnika: ul. ${street} ${number}, ${city}, ${country}`;
        target.appendChild($address);
    }

    displayMeasurementsInRow(target: HTMLElement, current: CurrentStation, measurement: Measurement) {
        const $valueRow = document.createElement('div');
        $valueRow.classList.add('value-row');

        const $name = document.createElement('p');
        $name.classList.add('name');
        $name.textContent = `${measurement.name}`;

        const $value = document.createElement('p');
        $value.classList.add('value');
        $value.textContent = `${measurement.value}`;

        $valueRow.appendChild($name);
        $valueRow.appendChild($value);

        const standard = MeasurementComponent.getMeasurementValue(
            current,
            measurement.name
        );

        if (standard) {
            const label = MeasurementComponent.getLabelForPercent(
                standard.percent
            );
            $value.classList.add(label);
        }

        target.appendChild($valueRow);
    }

    displayMeasurementsForStation({ address }: StationLocation, { current }: Station) {
        const $station = document.getElementById('station');
        const $measurements = document.getElementById('measurements');

        // $station.innerHTML = '';
        // $measurements.innerHTML = '';
        clearDOMElements($station, $measurements);

        $station.classList.add('station');
        $measurements.classList.add('measurements');

        this.displayAddress($station, address);

        current.values.forEach(value => {
            this.displayMeasurementsInRow($measurements, current, value);
        });
    }

    displayErrorMessage(reason: string) {
        console.error(reason);
        const $station = document.querySelector('#station');
        $station.textContent = `Wystąpił błąd: ${reason}`;
    }
}