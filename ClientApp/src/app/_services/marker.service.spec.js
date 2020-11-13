"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var marker_service_1 = require("./marker.service");
describe('MarkerService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(marker_service_1.MarkerService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=marker.service.spec.js.map