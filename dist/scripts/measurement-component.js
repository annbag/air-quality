"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
class MeasurementComponent {
    static getMeasurementValue(current, pollutant) {
        return current.standards.find(x => x.pollutant === pollutant);
    }
    static getLabelForPercent(percent) {
        if (percent >= 100) {
            return 'high-level';
        }
        else if (percent >= 50) {
            return 'warning';
        }
        else {
            return 'low-level';
        }
    }
    static readPositionFromUI() {
        const inputLatitude = document.querySelector('#latitude');
        const inputLongitude = document.querySelector('#longitude');
        config_1.config.lat = inputLatitude.value;
        config_1.config.lng = inputLongitude.value;
    }
    static setPositionToUI() {
        const inputLatitude = document.querySelector('#latitude');
        const inputLongitude = document.querySelector('#longitude');
        inputLatitude.value = config_1.config.lat;
        inputLongitude.value = config_1.config.lng;
    }
    displayAddress(target, { street, number, city, country }) {
        const $city = document.createElement('p');
        $city.classList.add('title');
        $city.textContent = city;
        target.appendChild($city);
        const $address = document.createElement('p');
        $address.classList.add('address');
        $address.textContent = `Adres czujnika: ul. ${street} ${number}, ${city}, ${country}`;
        target.appendChild($address);
    }
    displayMeasurementsInRow(target, current, measurement) {
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
        const standard = MeasurementComponent.getMeasurementValue(current, measurement.name);
        if (standard) {
            const label = MeasurementComponent.getLabelForPercent(standard.percent);
            $value.classList.add(label);
        }
        target.appendChild($valueRow);
    }
    displayMeasurementsForStation({ address }, { current }) {
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
    displayErrorMessage(reason) {
        console.error(reason);
        const $station = document.querySelector('#station');
        $station.textContent = `Wystąpił błąd: ${reason}`;
    }
}
exports.MeasurementComponent = MeasurementComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZW1lbnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2NyaXB0cy9tZWFzdXJlbWVudC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0M7QUFHbEMsTUFBYSxvQkFBb0I7SUFDN0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQXVCLEVBQUUsU0FBaUI7UUFDakUsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFlO1FBQ3JDLElBQUksT0FBTyxJQUFJLEdBQUcsRUFBRTtZQUNoQixPQUFPLFlBQVksQ0FBQztTQUN2QjthQUFNLElBQUksT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN0QixPQUFPLFNBQVMsQ0FBQztTQUNwQjthQUFNO1lBQ0gsT0FBTyxXQUFXLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLGtCQUFrQjtRQUNyQixNQUFNLGFBQWEsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRSxNQUFNLGNBQWMsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RSxlQUFNLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDakMsZUFBTSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNsQixNQUFNLGFBQWEsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRSxNQUFNLGNBQWMsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RSxhQUFhLENBQUMs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