"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const measurement_component_1 = require("./measurement-component");
const service_1 = require("./service");
function fetchStationMeasurements() {
    return __awaiter(this, void 0, void 0, function* () {
        const location = yield service_1.getStationLocation();
        if (!Array.isArray(location) || location.length === 0) {
            throw new Error('Nie znaleziono stacji');
        }
        const [station] = location;
        const measurements = yield service_1.getMeasurements(station);
        return { station, measurements };
    });
}
function handleSubmit(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        measurement_component_1.MeasurementComponent.readPositionFromUI();
        const mc = new measurement_component_1.MeasurementComponent();
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
    measurement_component_1.MeasurementComponent.setPositionToUI();
    const formPlace = document.querySelector('#place-form');
    formPlace.addEventListener('submit', handleSubmit);
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1FQUErRDtBQUMvRCx1Q0FBZ0U7QUFHaEUsU0FBZSx3QkFBd0I7O1FBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sNEJBQWtCLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDNUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzNCLE1BQU0sWUFBWSxHQUFHLE1BQU0seUJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Q0FBQTtBQUVELFNBQWUsWUFBWSxDQUFDLEtBQVU7O1FBQ2xDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2Qiw0Q0FBb0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sRUFBRSxHQUFHLElBQUksNENBQW9CLEVBQUUsQ0FBQztRQUV0QyxJQUFJO1lBQ0EsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxNQUFNLHdCQUF3QixFQUFFLENBQUM7WUFDbkUsRUFBRSxDQUFDLDZCQUE2QixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7Q0FBQTtBQUVELFNBQVMsSUFBSTtJQUNULDRDQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRXZDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDIn0=