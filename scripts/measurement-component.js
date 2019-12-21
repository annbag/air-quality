var MeasurementComponent = /** @class */ (function () {
    function MeasurementComponent() {
    }
    MeasurementComponent.getMeasurementValue = function (current, pollutant) {
        return current.standards.find(function (x) { return x.pollutant === pollutant; });
    };
    MeasurementComponent.getLabelForPercent = function (percent) {
        if (percent >= 100) {
            return 'high-level';
        }
        else if (percent >= 50) {
            return 'warning';
        }
        else {
            return 'low-level';
        }
    };
    MeasurementComponent.readPositionFromUI = function () {
        var inputLatitude = document.querySelector('#latitude');
        var inputLongitude = document.querySelector('#longitude');
        config.lat = inputLatitude.value;
        config.lng = inputLongitude.value;
    };
    MeasurementComponent.setPositionToUI = function () {
        var inputLatitude = document.querySelector('#latitude');
        var inputLongitude = document.querySelector('#longitude');
        inputLatitude.value = config.lat;
        inputLongitude.value = config.lng;
    };
    MeasurementComponent.prototype.displayAddress = function (target, _a) {
        var street = _a.street, number = _a.number, city = _a.city, country = _a.country;
        var $city = document.createElement('p');
        $city.classList.add('title');
        $city.textContent = city;
        target.appendChild($city);
        var $address = document.createElement('p');
        $address.classList.add('address');
        $address.textContent = "Adres czujnika: ul. " + street + " " + number + ", " + city + ", " + country;
        target.appendChild($address);
    };
    MeasurementComponent.prototype.displayMeasurementsInRow = function (target, current, measurement) {
        var $valueRow = document.createElement('div');
        $valueRow.classList.add('value-row');
        var $name = document.createElement('p');
        $name.classList.add('name');
        $name.textContent = "" + measurement.name;
        var $value = document.createElement('p');
        $value.classList.add('value');
        $value.textContent = "" + measurement.value;
        $valueRow.appendChild($name);
        $valueRow.appendChild($value);
        var standard = MeasurementComponent.getMeasurementValue(current, measurement.name);
        if (standard) {
            var label = MeasurementComponent.getLabelForPercent(standard.percent);
            $value.classList.add(label);
        }
        target.appendChild($valueRow);
    };
    MeasurementComponent.prototype.displayMeasurementsForStation = function (_a, _b) {
        var _this = this;
        var address = _a.address;
        var current = _b.current;
        var $station = document.getElementById('station');
        var $measurements = document.getElementById('measurements');
        // $station.innerHTML = '';
        // $measurements.innerHTML = '';
        clearDOMElements($station, $measurements);
        $station.classList.add('station');
        $measurements.classList.add('measurements');
        this.displayAddress($station, address);
        current.values.forEach(function (value) {
            _this.displayMeasurementsInRow($measurements, current, value);
        });
    };
    MeasurementComponent.prototype.displayErrorMessage = function (reason) {
        console.error(reason);
        var $station = document.querySelector('#station');
        $station.textContent = "Wyst\u0105pi\u0142 b\u0142\u0105d: " + reason;
    };
    return MeasurementComponent;
}());
//# sourceMappingURL=measurement-component.js.map