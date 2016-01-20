System.register(['angular2/core', "angular2/http", "./city.service", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, city_service_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(cityService) {
                    this.cityService = cityService;
                    //...eventuele extra initialisaties
                    this.getCities();
                }
                // Not used in this example
                AppComponent.prototype.getCity = function (city) {
                    this.currentCity = city;
                };
                // Not used in this example
                AppComponent.prototype.clearCity = function () {
                    this.currentCity = null;
                };
                // Not used in this example
                AppComponent.prototype.updateRating = function (rating) {
                    this.currentCity.rating += rating;
                };
                //***********************
                // implementation
                //***********************
                AppComponent.prototype.getCities = function () {
                    var _this = this;
                    if (!this.cities) {
                        this.cityService.getCities()
                            .subscribe(function (cityData) {
                            _this.cities = cityData.json(); // 1. success handler
                        }, function (err) { return console.log(err); }, // 2. error handler
                        function () { return console.log('Getting cities complete...'); } // 3. complete handler
                         // 3. complete handler
                        );
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'city-app',
                        templateUrl: 'app/app.html',
                        providers: [city_service_1.CityService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [city_service_1.CityService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map