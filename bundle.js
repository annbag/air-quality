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

/***/ "./node_modules/file-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bundle.css");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/file-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/file-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvbS1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZWFzdXJlbWVudC1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzP2ZhNWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLG9GQUF1QixlQUFlLEU7Ozs7Ozs7Ozs7OztBQ0F4Qzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFlLG9GQUF1QixlQUFlLEU7Ozs7Ozs7Ozs7OztBQ0FyRDtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpR0FBaUcsV0FBVyxPQUFPLFdBQVc7QUFDOUgsOEdBQThHLFdBQVc7QUFDekg7QUFDQSwyQ0FBMkMsbWdCOzs7Ozs7Ozs7Ozs7QUNQM0M7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwyQ0FBMkMsMmM7Ozs7Ozs7Ozs7O0FDUjNDO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFPLENBQUMsdURBQXVCO0FBQy9CLG1CQUFPLENBQUMsdUNBQWU7QUFDdkIsT0FBTyx1QkFBdUIsR0FBRyxtQkFBTyxDQUFDLHVFQUF5QjtBQUNsRSxPQUFPLHNDQUFzQyxHQUFHLG1CQUFPLENBQUMsMkNBQVc7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdW5EOzs7Ozs7Ozs7Ozs7QUM1QzNDO0FBQUE7QUFBQSxPQUFPLFNBQVMsR0FBRyxtQkFBTyxDQUFDLHlDQUFVO0FBQ3JDLE9BQU8sbUJBQW1CLEdBQUcsbUJBQU8sQ0FBQyxpREFBYztBQUM1QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0NBQWdDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssSUFBSSxRQUFRO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVSxHQUFHLFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0EsMkNBQTJDLDJtSTs7Ozs7Ozs7Ozs7O0FDNUUzQztBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGdCQUFnQiw4Q0FBTSx5QkFBeUIsOENBQU07QUFDckQ7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLDhDQUFNO0FBQ3RCO0FBQ0E7QUFDQSwyQ0FBMkMsMm9DOzs7Ozs7Ozs7OztBQzFCM0MsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywrTkFBaUg7O0FBRW5KOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJidW5kbGUuY3NzXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGxhdDogNTIuMjQwNTE5MixcbiAgICBsbmc6IDIxLjA4MTEyODIsXG4gICAgYXBpS2V5OiAncUtFVUdSU1NWTEU2QUI3MTBJN1VSMDlaZ0wyWGgyTWQnLFxuICAgIGJ1aWxkU3RhdGlvbkxvY2F0aW9uVXJsOiAoY29uZmlnKSA9PiBgaHR0cHM6Ly9haXJhcGkuYWlybHkuZXUvdjIvaW5zdGFsbGF0aW9ucy9uZWFyZXN0P2xhdD0ke2NvbmZpZy5sYXR9JmxuZz0ke2NvbmZpZy5sbmd9YCxcbiAgICBidWlsZE1lYXN1cmVtZW50c1VybDogKHN0YXRpb24pID0+IGBodHRwczovL2FpcmFwaS5haXJseS5ldS92Mi9tZWFzdXJlbWVudHMvaW5zdGFsbGF0aW9uP2luc3RhbGxhdGlvbklkPSR7c3RhdGlvbi5pZH1gXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmMzSmpMM05qY21sd2RITXZZMjl1Wm1sbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEUxQlFVMHNRMEZCUXl4TlFVRk5MRTFCUVUwc1IwRkJSenRKUVVOc1FpeEhRVUZITEVWQlFVVXNWVUZCVlR0SlFVTm1MRWRCUVVjc1JVRkJSU3hWUVVGVk8wbEJRMllzVFVGQlRTeEZRVUZGTEd0RFFVRnJRenRKUVVNeFF5eDFRa0ZCZFVJc1JVRkJSU3hEUVVGRExFMUJRVmNzUlVGQlJTeEZRVUZGTEVOQlFVTXNkMFJCUVhkRUxFMUJRVTBzUTBGQlF5eEhRVUZITEZGQlFWRXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOb1NTeHZRa0ZCYjBJc1JVRkJSU3hEUVVGRExFOUJRVmtzUlVGQlJTeEZRVUZGTEVOQlFVTXNkVVZCUVhWRkxFOUJRVThzUTBGQlF5eEZRVUZGTEVWQlFVVTdRMEZET1Vnc1EwRkJReUo5IiwiZnVuY3Rpb24gY2xlYXJET01FbGVtZW50KGJveCkge1xuICAgIHdoaWxlIChib3guZmlyc3RDaGlsZCkge1xuICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYm94LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRPTUVsZW1lbnRzKC4uLiRlbGVtZW50cykge1xuICAgICRlbGVtZW50cy5mb3JFYWNoKGNsZWFyRE9NRWxlbWVudCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laRzl0TFdobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTl6WTNKcGNIUnpMMlJ2YlMxb1pXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNVMEZCVXl4bFFVRmxMRU5CUVVNc1IwRkJaMEk3U1VGRGNrTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRMjVDTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzB0QlEyNURPMEZCUTB3c1EwRkJRenRCUVVWRUxFMUJRVTBzVlVGQlZTeG5Ra0ZCWjBJc1EwRkJReXhIUVVGSExGTkJRWGRDTzBsQlEzaEVMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZEZGtNc1EwRkJReUo5IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5yZXF1aXJlKCcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnKTtcbnJlcXVpcmUoJy4uL2luZGV4Lmh0bWwnKTtcbmNvbnN0IHsgTWVhc3VyZW1lbnRDb21wb25lbnQgfSA9IHJlcXVpcmUoJy4vbWVhc3VyZW1lbnQtY29tcG9uZW50Jyk7XG5jb25zdCB7IGdldFN0YXRpb25Mb2NhdGlvbiwgZ2V0TWVhc3VyZW1lbnRzIH0gPSByZXF1aXJlKCcuL3NlcnZpY2UnKTtcbmZ1bmN0aW9uIGZldGNoU3RhdGlvbk1lYXN1cmVtZW50cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHlpZWxkIGdldFN0YXRpb25Mb2NhdGlvbigpO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobG9jYXRpb24pIHx8IGxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOaWUgem5hbGV6aW9ubyBzdGFjamknKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbc3RhdGlvbl0gPSBsb2NhdGlvbjtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRzID0geWllbGQgZ2V0TWVhc3VyZW1lbnRzKHN0YXRpb24pO1xuICAgICAgICByZXR1cm4geyBzdGF0aW9uLCBtZWFzdXJlbWVudHMgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIE1lYXN1cmVtZW50Q29tcG9uZW50LnJlYWRQb3NpdGlvbkZyb21VSSgpO1xuICAgICAgICBjb25zdCBtYyA9IG5ldyBNZWFzdXJlbWVudENvbXBvbmVudCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBzdGF0aW9uLCBtZWFzdXJlbWVudHMgfSA9IHlpZWxkIGZldGNoU3RhdGlvbk1lYXN1cmVtZW50cygpO1xuICAgICAgICAgICAgbWMuZGlzcGxheU1lYXN1cmVtZW50c0ZvclN0YXRpb24oc3RhdGlvbiwgbWVhc3VyZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBtYy5kaXNwbGF5RXJyb3JNZXNzYWdlKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBNZWFzdXJlbWVudENvbXBvbmVudC5zZXRQb3NpdGlvblRvVUkoKTtcbiAgICBjb25zdCBmb3JtUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2UtZm9ybScpO1xuICAgIGZvcm1QbGFjZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1haW4pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OXpZM0pwY0hSekwyMWhhVzR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3TzBGQlFVRXNUMEZCVHl4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVOQlFVTTdRVUZEYWtNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzBGQlJYcENMRTFCUVUwc1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMEZCUTNCRkxFMUJRVTBzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3hsUVVGbExFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkZja1VzVTBGQlpTeDNRa0ZCZDBJN08xRkJRMjVETEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0UlFVVTFReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTnVSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhWQ1FVRjFRaXhEUVVGRExFTkJRVU03VTBGRE5VTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETzFGQlF6TkNMRTFCUVUwc1dVRkJXU3hIUVVGSExFMUJRVTBzWlVGQlpTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNCRUxFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNXVUZCV1N4RlFVRkZMRU5CUVVNN1NVRkRja01zUTBGQlF6dERRVUZCTzBGQlJVUXNVMEZCWlN4WlFVRlpMRU5CUVVNc1MwRkJXVHM3VVVGRGNFTXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8xRkJSWFpDTEc5Q1FVRnZRaXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNN1VVRkRNVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4dlFrRkJiMElzUlVGQlJTeERRVUZETzFGQlJYUkRMRWxCUVVrN1dVRkRRU3hOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZsQlFWa3NSVUZCUlN4SFFVRkhMRTFCUVUwc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXp0WlFVTnVSU3hGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1QwRkJUeXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzFOQlF6TkVPMUZCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3V1VGRFZpeEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUTNaRE8wbEJRMHdzUTBGQlF6dERRVUZCTzBGQlJVUXNVMEZCVXl4SlFVRkpPMGxCUTFRc2IwSkJRVzlDTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1NVRkZka01zVFVGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dEpRVU40UkN4VFFVRlRMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM1pFTEVOQlFVTTdRVUZGUkN4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTWlmUT09IiwiY29uc3QgeyBjb25maWcgfSA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5jb25zdCB7IGNsZWFyRE9NRWxlbWVudHMgfSA9IHJlcXVpcmUoJy4vZG9tLWhlbHBlcicpO1xuZXhwb3J0IGNsYXNzIE1lYXN1cmVtZW50Q29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0TWVhc3VyZW1lbnRWYWx1ZShjdXJyZW50LCBwb2xsdXRhbnQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQuc3RhbmRhcmRzLmZpbmQoeCA9PiB4LnBvbGx1dGFudCA9PT0gcG9sbHV0YW50KTtcbiAgICB9XG4gICAgc3RhdGljIGdldExhYmVsRm9yUGVyY2VudChwZXJjZW50KSB7XG4gICAgICAgIGlmIChwZXJjZW50ID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuICdoaWdoLWxldmVsJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwZXJjZW50ID49IDUwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3dhcm5pbmcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdsb3ctbGV2ZWwnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyByZWFkUG9zaXRpb25Gcm9tVUkoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TGF0aXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0aXR1ZGUnKTtcbiAgICAgICAgY29uc3QgaW5wdXRMb25naXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9uZ2l0dWRlJyk7XG4gICAgICAgIGNvbmZpZy5sYXQgPSBpbnB1dExhdGl0dWRlLnZhbHVlO1xuICAgICAgICBjb25maWcubG5nID0gaW5wdXRMb25naXR1ZGUudmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRQb3NpdGlvblRvVUkoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TGF0aXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0aXR1ZGUnKTtcbiAgICAgICAgY29uc3QgaW5wdXRMb25naXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9uZ2l0dWRlJyk7XG4gICAgICAgIGlucHV0TGF0aXR1ZGUudmFsdWUgPSBjb25maWcubGF0O1xuICAgICAgICBpbnB1dExvbmdpdHVkZS52YWx1ZSA9IGNvbmZpZy5sbmc7XG4gICAgfVxuICAgIGRpc3BsYXlBZGRyZXNzKHRhcmdldCwgeyBzdHJlZXQsIG51bWJlciwgY2l0eSwgY291bnRyeSB9KSB7XG4gICAgICAgIGNvbnN0ICRjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAkY2l0eS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAkY2l0eS50ZXh0Q29udGVudCA9IGNpdHk7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCgkY2l0eSk7XG4gICAgICAgIGNvbnN0ICRhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAkYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gICAgICAgICRhZGRyZXNzLnRleHRDb250ZW50ID0gYEFkcmVzIGN6dWpuaWthOiB1bC4gJHtzdHJlZXR9ICR7bnVtYmVyfSwgJHtjaXR5fSwgJHtjb3VudHJ5fWA7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCgkYWRkcmVzcyk7XG4gICAgfVxuICAgIGRpc3BsYXlNZWFzdXJlbWVudHNJblJvdyh0YXJnZXQsIGN1cnJlbnQsIG1lYXN1cmVtZW50KSB7XG4gICAgICAgIGNvbnN0ICR2YWx1ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAkdmFsdWVSb3cuY2xhc3NMaXN0LmFkZCgndmFsdWUtcm93Jyk7XG4gICAgICAgIGNvbnN0ICRuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAkbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgICRuYW1lLnRleHRDb250ZW50ID0gYCR7bWVhc3VyZW1lbnQubmFtZX1gO1xuICAgICAgICBjb25zdCAkdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICR2YWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgICAgICAkdmFsdWUudGV4dENvbnRlbnQgPSBgJHttZWFzdXJlbWVudC52YWx1ZX1gO1xuICAgICAgICAkdmFsdWVSb3cuYXBwZW5kQ2hpbGQoJG5hbWUpO1xuICAgICAgICAkdmFsdWVSb3cuYXBwZW5kQ2hpbGQoJHZhbHVlKTtcbiAgICAgICAgY29uc3Qgc3RhbmRhcmQgPSBNZWFzdXJlbWVudENvbXBvbmVudC5nZXRNZWFzdXJlbWVudFZhbHVlKGN1cnJlbnQsIG1lYXN1cmVtZW50Lm5hbWUpO1xuICAgICAgICBpZiAoc3RhbmRhcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTWVhc3VyZW1lbnRDb21wb25lbnQuZ2V0TGFiZWxGb3JQZXJjZW50KHN0YW5kYXJkLnBlcmNlbnQpO1xuICAgICAgICAgICAgJHZhbHVlLmNsYXNzTGlzdC5hZGQobGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCgkdmFsdWVSb3cpO1xuICAgIH1cbiAgICBkaXNwbGF5TWVhc3VyZW1lbnRzRm9yU3RhdGlvbih7IGFkZHJlc3MgfSwgeyBjdXJyZW50IH0pIHtcbiAgICAgICAgY29uc3QgJHN0YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGlvbicpO1xuICAgICAgICBjb25zdCAkbWVhc3VyZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYXN1cmVtZW50cycpO1xuICAgICAgICAvLyAkc3RhdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gJG1lYXN1cmVtZW50cy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2xlYXJET01FbGVtZW50cygkc3RhdGlvbiwgJG1lYXN1cmVtZW50cyk7XG4gICAgICAgICRzdGF0aW9uLmNsYXNzTGlzdC5hZGQoJ3N0YXRpb24nKTtcbiAgICAgICAgJG1lYXN1cmVtZW50cy5jbGFzc0xpc3QuYWRkKCdtZWFzdXJlbWVudHMnKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5QWRkcmVzcygkc3RhdGlvbiwgYWRkcmVzcyk7XG4gICAgICAgIGN1cnJlbnQudmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVhc3VyZW1lbnRzSW5Sb3coJG1lYXN1cmVtZW50cywgY3VycmVudCwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzcGxheUVycm9yTWVzc2FnZShyZWFzb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihyZWFzb24pO1xuICAgICAgICBjb25zdCAkc3RhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0aW9uJyk7XG4gICAgICAgICRzdGF0aW9uLnRleHRDb250ZW50ID0gYFd5c3TEhXBpxYIgYsWCxIVkOiAke3JlYXNvbn1gO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVmhjM1Z5WlcxbGJuUXRZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmMzSmpMM05qY21sd2RITXZiV1ZoYzNWeVpXMWxiblF0WTI5dGNHOXVaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1FVRkRka01zVFVGQlRTeEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFZEJRVWNzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUlhKRUxFMUJRVTBzVDBGQlR5eHZRa0ZCYjBJN1NVRkROMElzVFVGQlRTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFOUJRWFZDTEVWQlFVVXNVMEZCYVVJN1VVRkRha1VzVDBGQlR5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGJFVXNRMEZCUXp0SlFVVkVMRTFCUVUwc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4UFFVRmxPMUZCUlhKRExFbEJRVWtzVDBGQlR5eEpRVUZKTEVkQlFVY3NSVUZCUlR0WlFVTm9RaXhQUVVGUExGbEJRVmtzUTBGQlF6dFRRVU4yUWp0aFFVRk5MRWxCUVVrc1QwRkJUeXhKUVVGSkxFVkJRVVVzUlVGQlJUdFpRVU4wUWl4UFFVRlBMRk5CUVZNc1EwRkJRenRUUVVOd1FqdGhRVUZOTzFsQlEwZ3NUMEZCVHl4WFFVRlhMRU5CUVVNN1UwRkRkRUk3U1VGRFRDeERRVUZETzBsQlJVUXNUVUZCVFN4RFFVRkRMR3RDUVVGclFqdFJRVU55UWl4TlFVRk5MR0ZCUVdFc1IwRkJiMElzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNelJTeE5RVUZOTEdOQlFXTXNSMEZCYjBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTTNSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRha01zVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JETEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1pVRkJaVHRSUVVOc1FpeE5RVUZOTEdGQlFXRXNSMEZCYjBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTXpSU3hOUVVGTkxHTkJRV01zUjBGQmIwSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU0zUlN4aFFVRmhMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEYWtNc1kwRkJZeXhEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGRlJDeGpRVUZqTEVOQlFVTXNUVUZCYlVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJWenRSUVVNeFJTeE5RVUZOTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6RkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFdEJRVXNzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNwQ0xFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZNVUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEhRVUZITEhWQ1FVRjFRaXhOUVVGTkxFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NTMEZCU3l4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVOMFJpeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkN4M1FrRkJkMElzUTBGQlF5eE5RVUZ0UWl4RlFVRkZMRTlCUVhWQ0xFVkJRVVVzVjBGQmQwSTdVVUZETTBZc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOb1JDeFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVZ5UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRelZDTEV0QlFVc3NRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGTVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNelF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU01UWl4TlFVRk5MRU5CUVVNc1YwRkJWeXhIUVVGSExFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUlRWRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkROMElzVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVNVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4dlFrRkJiMElzUTBGQlF5eHRRa0ZCYlVJc1EwRkRja1FzVDBGQlR5eEZRVU5RTEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUTI1Q0xFTkJRVU03VVVGRlJpeEpRVUZKTEZGQlFWRXNSVUZCUlR0WlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRMR3RDUVVGclFpeERRVU5xUkN4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVOdVFpeERRVUZETzFsQlEwWXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZETDBJN1VVRkZSQ3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJDdzJRa0ZCTmtJc1EwRkJReXhGUVVGRkxFOUJRVThzUlVGQmJVSXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJWenRSUVVNMVJTeE5RVUZOTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzQkVMRTFCUVUwc1lVRkJZU3hIUVVGSExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkZPVVFzTWtKQlFUSkNPMUZCUXpOQ0xHZERRVUZuUXp0UlFVTm9ReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRk1VTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYkVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkZOVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRmRrTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETTBJc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQlJVUXNiVUpCUVcxQ0xFTkJRVU1zVFVGQll6dFJRVU01UWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkNMRTFCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRjRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSMEZCUnl4clFrRkJhMElzVFVGQlRTeEZRVUZGTEVOQlFVTTdTVUZEZEVRc1EwRkJRenREUVVOS0luMD0iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5mdW5jdGlvbiBzaWduUmVxdWVzdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgYXBpa2V5OiBjb25maWcuYXBpS2V5XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gZmV0Y2hKU09OKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gZmV0Y2gocmVxdWVzdCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xufVxuZnVuY3Rpb24gbWFrZVJlcXVlc3QodXJsKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHNpZ25SZXF1ZXN0KCk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwgaGVhZGVycyk7XG4gICAgcmV0dXJuIGZldGNoSlNPTihyZXF1ZXN0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aW9uTG9jYXRpb24oKSB7XG4gICAgY29uc3QgdXJsID0gY29uZmlnLmJ1aWxkU3RhdGlvbkxvY2F0aW9uVXJsKGNvbmZpZyk7XG4gICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVhc3VyZW1lbnRzKHN0YXRpb24pIHtcbiAgICBjb25zdCB1cmwgPSBjb25maWcuYnVpbGRNZWFzdXJlbWVudHNVcmwoc3RhdGlvbik7XG4gICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMlZ5ZG1salpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OXpZM0pwY0hSekwzTmxjblpwWTJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRlZCUVZVc1EwRkJRenRCUVVWc1F5eFRRVUZUTEZkQlFWYzdTVUZEYUVJc1QwRkJUenRSUVVOSUxFMUJRVTBzUlVGQlJTeExRVUZMTzFGQlEySXNUMEZCVHl4RlFVRkZPMWxCUTB3c1kwRkJZeXhGUVVGRkxHdENRVUZyUWp0WlFVTnNReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMDdVMEZEZUVJN1MwRkRTaXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRVVZFTEZOQlFWTXNVMEZCVXl4RFFVRkRMRTlCUVdkQ08wbEJReTlDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzBGQlF6VkVMRU5CUVVNN1FVRkZSQ3hUUVVGVExGZEJRVmNzUTBGQlF5eEhRVUZYTzBsQlF6VkNMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmNzUlVGQlJTeERRVUZETzBsQlF6bENMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVNeFF5eFBRVUZQTEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRCUVVNNVFpeERRVUZETzBGQlJVUXNUVUZCVFN4VlFVRlZMR3RDUVVGclFqdEpRVU01UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJrUXNUMEZCVHl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE5VSXNRMEZCUXp0QlFVVkVMRTFCUVUwc1ZVRkJWU3hsUVVGbExFTkJRVU1zVDBGQmQwSTdTVUZEY0VRc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlEycEVMRTlCUVU4c1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF6VkNMRU5CUVVNaWZRPT0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=