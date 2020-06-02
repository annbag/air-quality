/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "index.html");

/***/ }),

/***/ "./src/scripts/config.ts":
/*!*******************************!*\
  !*** ./src/scripts/config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    lat: 52.2405192,
    lng: 21.0811282,
    apiKey: 'qKEUGRSSVLE6AB710I7UR09ZgL2Xh2Md',
    buildStationLocationUrl: (config) => `https://airapi.airly.eu/v2/installations/nearest?lat=${config.lat}&lng=${config.lng}`,
    buildMeasurementsUrl: (station) => `https://airapi.airly.eu/v2/measurements/installation?installationId=${station.id}`
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjcmlwdHMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUNsQixHQUFHLEVBQUUsVUFBVTtJQUNmLEdBQUcsRUFBRSxVQUFVO0lBQ2YsTUFBTSxFQUFFLGtDQUFrQztJQUMxQyx1QkFBdUIsRUFBRSxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsd0RBQXdELE1BQU0sQ0FBQyxHQUFHLFFBQVEsTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUNoSSxvQkFBb0IsRUFBRSxDQUFDLE9BQVksRUFBRSxFQUFFLENBQUMsdUVBQXVFLE9BQU8sQ0FBQyxFQUFFLEVBQUU7Q0FDOUgsQ0FBQyJ9

/***/ }),

/***/ "./src/scripts/dom-helper.ts":
/*!***********************************!*\
  !*** ./src/scripts/dom-helper.ts ***!
  \***********************************/
/*! exports provided: clearDOMElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDOMElements", function() { return clearDOMElements; });
function clearDOMElement(box) {
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
}
function clearDOMElements(...$elements) {
    $elements.forEach(clearDOMElement);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY3JpcHRzL2RvbS1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLENBQUMsR0FBZ0I7SUFDckMsT0FBTyxHQUFHLENBQUMsVUFBVSxFQUFFO1FBQ25CLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ25DO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxHQUFHLFNBQXdCO0lBQ3hELFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkMsQ0FBQyJ9

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
__webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
__webpack_require__(/*! ../index.html */ "./src/index.html");
const { MeasurementComponent } = __webpack_require__(/*! ./measurement-component */ "./src/scripts/measurement-component.ts");
const { getStationLocation, getMeasurements } = __webpack_require__(/*! ./service */ "./src/scripts/service.ts");
function fetchStationMeasurements() {
    return __awaiter(this, void 0, void 0, function* () {
        const location = yield getStationLocation();
        if (!Array.isArray(location) || location.length === 0) {
            throw new Error('Nie znaleziono stacji');
        }
        const [station] = location;
        const measurements = yield getMeasurements(station);
        return { station, measurements };
    });
}
function handleSubmit(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        MeasurementComponent.readPositionFromUI();
        const mc = new MeasurementComponent();
        try {
            const { station, measurements } = yield fetchStationMeasurements();
            mc.displayMeasurementsForStation(station, measurements);
        }
        catch (err) {
            mc.displayErrorMessage(err.message);
        }
    });
}
function main() {
    MeasurementComponent.setPositionToUI();
    const formPlace = document.querySelector('#place-form');
    formPlace.addEventListener('submit', handleSubmit);
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY3JpcHRzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXpCLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3BFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckUsU0FBZSx3QkFBd0I7O1FBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQWtCLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDNUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzNCLE1BQU0sWUFBWSxHQUFHLE1BQU0sZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztDQUFBO0FBRUQsU0FBZSxZQUFZLENBQUMsS0FBWTs7UUFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBRXRDLElBQUk7WUFDQSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLE1BQU0sd0JBQXdCLEVBQUUsQ0FBQztZQUNuRSxFQUFFLENBQUMsNkJBQTZCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixFQUFFLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztDQUFBO0FBRUQsU0FBUyxJQUFJO0lBQ1Qsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFdkMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUMifQ==

/***/ }),

/***/ "./src/scripts/measurement-component.ts":
/*!**********************************************!*\
  !*** ./src/scripts/measurement-component.ts ***!
  \**********************************************/
/*! exports provided: MeasurementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementComponent", function() { return MeasurementComponent; });
const { config } = __webpack_require__(/*! ./config */ "./src/scripts/config.ts");
const { clearDOMElements } = __webpack_require__(/*! ./dom-helper */ "./src/scripts/dom-helper.ts");
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
        config.lat = inputLatitude.value;
        config.lng = inputLongitude.value;
    }
    static setPositionToUI() {
        const inputLatitude = document.querySelector('#latitude');
        const inputLongitude = document.querySelector('#longitude');
        inputLatitude.value = config.lat;
        inputLongitude.value = config.lng;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZW1lbnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjcmlwdHMvbWVhc3VyZW1lbnQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXJELE1BQU0sT0FBTyxvQkFBb0I7SUFDN0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQXVCLEVBQUUsU0FBaUI7UUFDakUsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFlO1FBRXJDLElBQUksT0FBTyxJQUFJLEdBQUcsRUFBRTtZQUNoQixPQUFPLFlBQVksQ0FBQztTQUN2QjthQUFNLElBQUksT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN0QixPQUFPLFNBQVMsQ0FBQztTQUNwQjthQUFNO1lBQ0gsT0FBTyxXQUFXLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLGtCQUFrQjtRQUNyQixNQUFNLGFBQWEsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRSxNQUFNLGNBQWMsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDakMsTUFBTSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNsQixNQUFNLGFBQWEsR0FB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

/***/ }),

/***/ "./src/scripts/service.ts":
/*!********************************!*\
  !*** ./src/scripts/service.ts ***!
  \********************************/
/*! exports provided: getStationLocation, getMeasurements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStationLocation", function() { return getStationLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeasurements", function() { return getMeasurements; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/scripts/config.ts");

function signRequest() {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            apikey: _config__WEBPACK_IMPORTED_MODULE_0__["config"].apiKey
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
    const url = _config__WEBPACK_IMPORTED_MODULE_0__["config"].buildStationLocationUrl(_config__WEBPACK_IMPORTED_MODULE_0__["config"]);
    return makeRequest(url);
}
function getMeasurements(station) {
    const url = _config__WEBPACK_IMPORTED_MODULE_0__["config"].buildMeasurementsUrl(station);
    return makeRequest(url);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY3JpcHRzL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxTQUFTLFdBQVc7SUFDaEIsT0FBTztRQUNILE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDeEI7S0FDSixDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLE9BQWdCO0lBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxHQUFXO0lBQzVCLE1BQU0sT0FBTyxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQjtJQUM5QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBd0I7SUFDcEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLENBQUMifQ==

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bundle.css");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvbS1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZWFzdXJlbWVudC1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSxvRkFBdUIsZUFBZSxFOzs7Ozs7Ozs7Ozs7QUNBckQ7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLFdBQVcsT0FBTyxXQUFXO0FBQzlILDhHQUE4RyxXQUFXO0FBQ3pIO0FBQ0EsMkNBQTJDLG1nQjs7Ozs7Ozs7Ozs7O0FDUDNDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLDJjOzs7Ozs7Ozs7OztBQ1IzQztBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBTyxDQUFDLHVEQUF1QjtBQUMvQixtQkFBTyxDQUFDLHVDQUFlO0FBQ3ZCLE9BQU8sdUJBQXVCLEdBQUcsbUJBQU8sQ0FBQyx1RUFBeUI7QUFDbEUsT0FBTyxzQ0FBc0MsR0FBRyxtQkFBTyxDQUFDLDJDQUFXO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVuRDs7Ozs7Ozs7Ozs7O0FDNUMzQztBQUFBO0FBQUEsT0FBTyxTQUFTLEdBQUcsbUJBQU8sQ0FBQyx5Q0FBVTtBQUNyQyxPQUFPLG1CQUFtQixHQUFHLG1CQUFPLENBQUMsaURBQWM7QUFDNUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLElBQUksUUFBUTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVUsR0FBRyxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBLDJDQUEyQywybUk7Ozs7Ozs7Ozs7OztBQzVFM0M7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsOENBQU0seUJBQXlCLDhDQUFNO0FBQ3JEO0FBQ0E7QUFDTztBQUNQLGdCQUFnQiw4Q0FBTTtBQUN0QjtBQUNBO0FBQ0EsMkNBQTJDLDJvQzs7Ozs7Ozs7Ozs7O0FDMUIzQztBQUFlLG9GQUF1QixlQUFlLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGxhdDogNTIuMjQwNTE5MixcbiAgICBsbmc6IDIxLjA4MTEyODIsXG4gICAgYXBpS2V5OiAncUtFVUdSU1NWTEU2QUI3MTBJN1VSMDlaZ0wyWGgyTWQnLFxuICAgIGJ1aWxkU3RhdGlvbkxvY2F0aW9uVXJsOiAoY29uZmlnKSA9PiBgaHR0cHM6Ly9haXJhcGkuYWlybHkuZXUvdjIvaW5zdGFsbGF0aW9ucy9uZWFyZXN0P2xhdD0ke2NvbmZpZy5sYXR9JmxuZz0ke2NvbmZpZy5sbmd9YCxcbiAgICBidWlsZE1lYXN1cmVtZW50c1VybDogKHN0YXRpb24pID0+IGBodHRwczovL2FpcmFwaS5haXJseS5ldS92Mi9tZWFzdXJlbWVudHMvaW5zdGFsbGF0aW9uP2luc3RhbGxhdGlvbklkPSR7c3RhdGlvbi5pZH1gXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmMzSmpMM05qY21sd2RITXZZMjl1Wm1sbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEUxQlFVMHNRMEZCUXl4TlFVRk5MRTFCUVUwc1IwRkJSenRKUVVOc1FpeEhRVUZITEVWQlFVVXNWVUZCVlR0SlFVTm1MRWRCUVVjc1JVRkJSU3hWUVVGVk8wbEJRMllzVFVGQlRTeEZRVUZGTEd0RFFVRnJRenRKUVVNeFF5eDFRa0ZCZFVJc1JVRkJSU3hEUVVGRExFMUJRVmNzUlVGQlJTeEZRVUZGTEVOQlFVTXNkMFJCUVhkRUxFMUJRVTBzUTBGQlF5eEhRVUZITEZGQlFWRXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOb1NTeHZRa0ZCYjBJc1JVRkJSU3hEUVVGRExFOUJRVmtzUlVGQlJTeEZRVUZGTEVOQlFVTXNkVVZCUVhWRkxFOUJRVThzUTBGQlF5eEZRVUZGTEVWQlFVVTdRMEZET1Vnc1EwRkJReUo5IiwiZnVuY3Rpb24gY2xlYXJET01FbGVtZW50KGJveCkge1xuICAgIHdoaWxlIChib3guZmlyc3RDaGlsZCkge1xuICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYm94LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRPTUVsZW1lbnRzKC4uLiRlbGVtZW50cykge1xuICAgICRlbGVtZW50cy5mb3JFYWNoKGNsZWFyRE9NRWxlbWVudCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laRzl0TFdobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTl6WTNKcGNIUnpMMlJ2YlMxb1pXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNVMEZCVXl4bFFVRmxMRU5CUVVNc1IwRkJaMEk3U1VGRGNrTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRMjVDTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzB0QlEyNURPMEZCUTB3c1EwRkJRenRCUVVWRUxFMUJRVTBzVlVGQlZTeG5Ra0ZCWjBJc1EwRkJReXhIUVVGSExGTkJRWGRDTzBsQlEzaEVMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZEZGtNc1EwRkJReUo5IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5yZXF1aXJlKCcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnKTtcbnJlcXVpcmUoJy4uL2luZGV4Lmh0bWwnKTtcbmNvbnN0IHsgTWVhc3VyZW1lbnRDb21wb25lbnQgfSA9IHJlcXVpcmUoJy4vbWVhc3VyZW1lbnQtY29tcG9uZW50Jyk7XG5jb25zdCB7IGdldFN0YXRpb25Mb2NhdGlvbiwgZ2V0TWVhc3VyZW1lbnRzIH0gPSByZXF1aXJlKCcuL3NlcnZpY2UnKTtcbmZ1bmN0aW9uIGZldGNoU3RhdGlvbk1lYXN1cmVtZW50cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHlpZWxkIGdldFN0YXRpb25Mb2NhdGlvbigpO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobG9jYXRpb24pIHx8IGxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOaWUgem5hbGV6aW9ubyBzdGFjamknKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbc3RhdGlvbl0gPSBsb2NhdGlvbjtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRzID0geWllbGQgZ2V0TWVhc3VyZW1lbnRzKHN0YXRpb24pO1xuICAgICAgICByZXR1cm4geyBzdGF0aW9uLCBtZWFzdXJlbWVudHMgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIE1lYXN1cmVtZW50Q29tcG9uZW50LnJlYWRQb3NpdGlvbkZyb21VSSgpO1xuICAgICAgICBjb25zdCBtYyA9IG5ldyBNZWFzdXJlbWVudENvbXBvbmVudCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBzdGF0aW9uLCBtZWFzdXJlbWVudHMgfSA9IHlpZWxkIGZldGNoU3RhdGlvbk1lYXN1cmVtZW50cygpO1xuICAgICAgICAgICAgbWMuZGlzcGxheU1lYXN1cmVtZW50c0ZvclN0YXRpb24oc3RhdGlvbiwgbWVhc3VyZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBtYy5kaXNwbGF5RXJyb3JNZXNzYWdlKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBNZWFzdXJlbWVudENvbXBvbmVudC5zZXRQb3NpdGlvblRvVUkoKTtcbiAgICBjb25zdCBmb3JtUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2UtZm9ybScpO1xuICAgIGZvcm1QbGFjZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1haW4pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OXpZM0pwY0hSekwyMWhhVzR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3TzBGQlFVRXNUMEZCVHl4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVOQlFVTTdRVUZEYWtNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzBGQlJYcENMRTFCUVUwc1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMEZCUTNCRkxFMUJRVTBzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3hsUVVGbExFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkZja1VzVTBGQlpTeDNRa0ZCZDBJN08xRkJRMjVETEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0UlFVVTFReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTnVSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhWQ1FVRjFRaXhEUVVGRExFTkJRVU03VTBGRE5VTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETzFGQlF6TkNMRTFCUVUwc1dVRkJXU3hIUVVGSExFMUJRVTBzWlVGQlpTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNCRUxFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNXVUZCV1N4RlFVRkZMRU5CUVVNN1NVRkRja01zUTBGQlF6dERRVUZCTzBGQlJVUXNVMEZCWlN4WlFVRlpMRU5CUVVNc1MwRkJXVHM3VVVGRGNFTXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8xRkJSWFpDTEc5Q1FVRnZRaXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNN1VVRkRNVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4dlFrRkJiMElzUlVGQlJTeERRVUZETzFGQlJYUkRMRWxCUVVrN1dVRkRRU3hOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZsQlFWa3NSVUZCUlN4SFFVRkhMRTFCUVUwc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXp0WlFVTnVSU3hGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1QwRkJUeXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzFOQlF6TkVPMUZCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3V1VGRFZpeEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUTNaRE8wbEJRMHdzUTBGQlF6dERRVUZCTzBGQlJVUXNVMEZCVXl4SlFVRkpPMGxCUTFRc2IwSkJRVzlDTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1NVRkZka01zVFVGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dEpRVU40UkN4VFFVRlRMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM1pFTEVOQlFVTTdRVUZGUkN4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTWlmUT09IiwiY29uc3QgeyBjb25maWcgfSA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5jb25zdCB7IGNsZWFyRE9NRWxlbWVudHMgfSA9IHJlcXVpcmUoJy4vZG9tLWhlbHBlcicpO1xuZXhwb3J0IGNsYXNzIE1lYXN1cmVtZW50Q29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0TWVhc3VyZW1lbnRWYWx1ZShjdXJyZW50LCBwb2xsdXRhbnQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQuc3RhbmRhcmRzLmZpbmQoeCA9PiB4LnBvbGx1dGFudCA9PT0gcG9sbHV0YW50KTtcbiAgICB9XG4gICAgc3RhdGljIGdldExhYmVsRm9yUGVyY2VudChwZXJjZW50KSB7XG4gICAgICAgIGlmIChwZXJjZW50ID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuICdoaWdoLWxldmVsJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwZXJjZW50ID49IDUwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3dhcm5pbmcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdsb3ctbGV2ZWwnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyByZWFkUG9zaXRpb25Gcm9tVUkoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TGF0aXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0aXR1ZGUnKTtcbiAgICAgICAgY29uc3QgaW5wdXRMb25naXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9uZ2l0dWRlJyk7XG4gICAgICAgIGNvbmZpZy5sYXQgPSBpbnB1dExhdGl0dWRlLnZhbHVlO1xuICAgICAgICBjb25maWcubG5nID0gaW5wdXRMb25naXR1ZGUudmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRQb3NpdGlvblRvVUkoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TGF0aXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0aXR1ZGUnKTtcbiAgICAgICAgY29uc3QgaW5wdXRMb25naXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9uZ2l0dWRlJyk7XG4gICAgICAgIGlucHV0TGF0aXR1ZGUudmFsdWUgPSBjb25maWcubGF0O1xuICAgICAgICBpbnB1dExvbmdpdHVkZS52YWx1ZSA9IGNvbmZpZy5sbmc7XG4gICAgfVxuICAgIGRpc3BsYXlBZGRyZXNzKHRhcmdldCwgeyBzdHJlZXQsIG51bWJlciwgY2l0eSwgY291bnRyeSB9KSB7XG4gICAgICAgIGNvbnN0ICRjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAkY2l0eS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAkY2l0eS50ZXh0Q29udGVudCA9IGNpdHk7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCgkY2l0eSk7XG4gICAgICAgIGNvbnN0ICRhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAkYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gICAgICAgICRhZGRyZXNzLnRleHRDb250ZW50ID0gYEFkcmVzIGN6dWpuaWthOiB1bC4gJHtzdHJlZXR9ICR7bnVtYmVyfSwgJHtjaXR5fSwgJHtjb3VudHJ5fWA7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCgkYWRkcmVzcyk7XG4gICAgfVxuICAgIGRpc3BsYXlNZWFzdXJlbWVudHNJblJvdyh0YXJnZXQsIGN1cnJlbnQsIG1lYXN1cmVtZW50KSB7XG4gICAgICAgIGNvbnN0ICR2YWx1ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAkdmFsdWVSb3cuY2xhc3NMaXN0LmFkZCgndmFsdWUtcm93Jyk7XG4gICAgICAgIGNvbnN0ICRuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAkbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgICRuYW1lLnRleHRDb250ZW50ID0gYCR7bWVhc3VyZW1lbnQubmFtZX1gO1xuICAgICAgICBjb25zdCAkdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICR2YWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgICAgICAkdmFsdWUudGV4dENvbnRlbnQgPSBgJHttZWFzdXJlbWVudC52YWx1ZX1gO1xuICAgICAgICAkdmFsdWVSb3cuYXBwZW5kQ2hpbGQoJG5hbWUpO1xuICAgICAgICAkdmFsdWVSb3cuYXBwZW5kQ2hpbGQoJHZhbHVlKTtcbiAgICAgICAgY29uc3Qgc3RhbmRhcmQgPSBNZWFzdXJlbWVudENvbXBvbmVudC5nZXRNZWFzdXJlbWVudFZhbHVlKGN1cnJlbnQsIG1lYXN1cmVtZW50Lm5hbWUpO1xuICAgICAgICBpZiAoc3RhbmRhcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTWVhc3VyZW1lbnRDb21wb25lbnQuZ2V0TGFiZWxGb3JQZXJjZW50KHN0YW5kYXJkLnBlcmNlbnQpO1xuICAgICAgICAgICAgJHZhbHVlLmNsYXNzTGlzdC5hZGQobGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCgkdmFsdWVSb3cpO1xuICAgIH1cbiAgICBkaXNwbGF5TWVhc3VyZW1lbnRzRm9yU3RhdGlvbih7IGFkZHJlc3MgfSwgeyBjdXJyZW50IH0pIHtcbiAgICAgICAgY29uc3QgJHN0YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGlvbicpO1xuICAgICAgICBjb25zdCAkbWVhc3VyZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYXN1cmVtZW50cycpO1xuICAgICAgICAvLyAkc3RhdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gJG1lYXN1cmVtZW50cy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2xlYXJET01FbGVtZW50cygkc3RhdGlvbiwgJG1lYXN1cmVtZW50cyk7XG4gICAgICAgICRzdGF0aW9uLmNsYXNzTGlzdC5hZGQoJ3N0YXRpb24nKTtcbiAgICAgICAgJG1lYXN1cmVtZW50cy5jbGFzc0xpc3QuYWRkKCdtZWFzdXJlbWVudHMnKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5QWRkcmVzcygkc3RhdGlvbiwgYWRkcmVzcyk7XG4gICAgICAgIGN1cnJlbnQudmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVhc3VyZW1lbnRzSW5Sb3coJG1lYXN1cmVtZW50cywgY3VycmVudCwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzcGxheUVycm9yTWVzc2FnZShyZWFzb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihyZWFzb24pO1xuICAgICAgICBjb25zdCAkc3RhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0aW9uJyk7XG4gICAgICAgICRzdGF0aW9uLnRleHRDb250ZW50ID0gYFd5c3TEhXBpxYIgYsWCxIVkOiAke3JlYXNvbn1gO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVmhjM1Z5WlcxbGJuUXRZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmMzSmpMM05qY21sd2RITXZiV1ZoYzNWeVpXMWxiblF0WTI5dGNHOXVaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1FVRkRka01zVFVGQlRTeEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFZEJRVWNzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUlhKRUxFMUJRVTBzVDBGQlR5eHZRa0ZCYjBJN1NVRkROMElzVFVGQlRTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFOUJRWFZDTEVWQlFVVXNVMEZCYVVJN1VVRkRha1VzVDBGQlR5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGJFVXNRMEZCUXp0SlFVVkVMRTFCUVUwc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4UFFVRmxPMUZCUlhKRExFbEJRVWtzVDBGQlR5eEpRVUZKTEVkQlFVY3NSVUZCUlR0WlFVTm9RaXhQUVVGUExGbEJRVmtzUTBGQlF6dFRRVU4yUWp0aFFVRk5MRWxCUVVrc1QwRkJUeXhKUVVGSkxFVkJRVVVzUlVGQlJUdFpRVU4wUWl4UFFVRlBMRk5CUVZNc1EwRkJRenRUUVVOd1FqdGhRVUZOTzFsQlEwZ3NUMEZCVHl4WFFVRlhMRU5CUVVNN1UwRkRkRUk3U1VGRFRDeERRVUZETzBsQlJVUXNUVUZCVFN4RFFVRkRMR3RDUVVGclFqdFJRVU55UWl4TlFVRk5MR0ZCUVdFc1IwRkJiMElzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNelJTeE5RVUZOTEdOQlFXTXNSMEZCYjBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTTNSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRha01zVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JETEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1pVRkJaVHRSUVVOc1FpeE5RVUZOTEdGQlFXRXNSMEZCYjBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTXpSU3hOUVVGTkxHTkJRV01zUjBGQmIwSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU0zUlN4aFFVRmhMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEYWtNc1kwRkJZeXhEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGRlJDeGpRVUZqTEVOQlFVTXNUVUZCYlVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJWenRSUVVNeFJTeE5RVUZOTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6RkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFdEJRVXNzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNwQ0xFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZNVUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEhRVUZITEhWQ1FVRjFRaXhOUVVGTkxFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NTMEZCU3l4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVOMFJpeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkN4M1FrRkJkMElzUTBGQlF5eE5RVUZ0UWl4RlFVRkZMRTlCUVhWQ0xFVkJRVVVzVjBGQmQwSTdVVUZETTBZc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOb1JDeFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVZ5UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRelZDTEV0QlFVc3NRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGTVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNelF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU01UWl4TlFVRk5MRU5CUVVNc1YwRkJWeXhIUVVGSExFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUlRWRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkROMElzVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVNVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4dlFrRkJiMElzUTBGQlF5eHRRa0ZCYlVJc1EwRkRja1FzVDBGQlR5eEZRVU5RTEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUTI1Q0xFTkJRVU03VVVGRlJpeEpRVUZKTEZGQlFWRXNSVUZCUlR0WlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRMR3RDUVVGclFpeERRVU5xUkN4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVOdVFpeERRVUZETzFsQlEwWXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZETDBJN1VVRkZSQ3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJDdzJRa0ZCTmtJc1EwRkJReXhGUVVGRkxFOUJRVThzUlVGQmJVSXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJWenRSUVVNMVJTeE5RVUZOTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzQkVMRTFCUVUwc1lVRkJZU3hIUVVGSExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkZPVVFzTWtKQlFUSkNPMUZCUXpOQ0xHZERRVUZuUXp0UlFVTm9ReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRk1VTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYkVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkZOVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRmRrTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETTBJc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQlJVUXNiVUpCUVcxQ0xFTkJRVU1zVFVGQll6dFJRVU01UWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkNMRTFCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRjRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSMEZCUnl4clFrRkJhMElzVFVGQlRTeEZRVUZGTEVOQlFVTTdTVUZEZEVRc1EwRkJRenREUVVOS0luMD0iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5mdW5jdGlvbiBzaWduUmVxdWVzdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgYXBpa2V5OiBjb25maWcuYXBpS2V5XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gZmV0Y2hKU09OKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gZmV0Y2gocmVxdWVzdCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xufVxuZnVuY3Rpb24gbWFrZVJlcXVlc3QodXJsKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHNpZ25SZXF1ZXN0KCk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwgaGVhZGVycyk7XG4gICAgcmV0dXJuIGZldGNoSlNPTihyZXF1ZXN0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aW9uTG9jYXRpb24oKSB7XG4gICAgY29uc3QgdXJsID0gY29uZmlnLmJ1aWxkU3RhdGlvbkxvY2F0aW9uVXJsKGNvbmZpZyk7XG4gICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVhc3VyZW1lbnRzKHN0YXRpb24pIHtcbiAgICBjb25zdCB1cmwgPSBjb25maWcuYnVpbGRNZWFzdXJlbWVudHNVcmwoc3RhdGlvbik7XG4gICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMlZ5ZG1salpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OXpZM0pwY0hSekwzTmxjblpwWTJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRlZCUVZVc1EwRkJRenRCUVVWc1F5eFRRVUZUTEZkQlFWYzdTVUZEYUVJc1QwRkJUenRSUVVOSUxFMUJRVTBzUlVGQlJTeExRVUZMTzFGQlEySXNUMEZCVHl4RlFVRkZPMWxCUTB3c1kwRkJZeXhGUVVGRkxHdENRVUZyUWp0WlFVTnNReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMDdVMEZEZUVJN1MwRkRTaXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRVVZFTEZOQlFWTXNVMEZCVXl4RFFVRkRMRTlCUVdkQ08wbEJReTlDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzBGQlF6VkVMRU5CUVVNN1FVRkZSQ3hUUVVGVExGZEJRVmNzUTBGQlF5eEhRVUZYTzBsQlF6VkNMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmNzUlVGQlJTeERRVUZETzBsQlF6bENMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVNeFF5eFBRVUZQTEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRCUVVNNVFpeERRVUZETzBGQlJVUXNUVUZCVFN4VlFVRlZMR3RDUVVGclFqdEpRVU01UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJrUXNUMEZCVHl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE5VSXNRMEZCUXp0QlFVVkVMRTFCUVUwc1ZVRkJWU3hsUVVGbExFTkJRVU1zVDBGQmQwSTdTVUZEY0VRc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlEycEVMRTlCUVU4c1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF6VkNMRU5CUVVNaWZRPT0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYnVuZGxlLmNzc1wiOyJdLCJzb3VyY2VSb290IjoiIn0=