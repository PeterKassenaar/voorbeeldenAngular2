System.register(['angular2/core', "angular2/router", "./city.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, city_service_1;
    var CityDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            }],
        execute: function() {
            CityDetailComponent = (function () {
                function CityDetailComponent(routeParams, cityService) {
                    var _this = this;
                    this.routeParams = routeParams;
                    this.cityService = cityService;
                    this.id = routeParams.get('id');
                    // Kijk of er cities in de cache staan, zo ja, gebruik deze. (zo nee, : TODO)
                    var cities = cityService.cache;
                    if (cities) {
                        cities.forEach(function (city) {
                            if (city.id === _this.id) {
                                _this.currentCity = city;
                            }
                        });
                    }
                }
                CityDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'city-detail',
                        template: "<h1>City Detail</h1>\n\t<h2>Details voor city: {{ id }}</h2>\n\t<div *ngIf=\"currentCity\">\n\t\t<ul class=\"list-group\">\n\t\t\t<li class=\"list-group-item\">Naam: {{ currentCity.name }}</li>\n\t\t\t<li class=\"list-group-item\">Provincie: {{ currentCity.province }}</li>\n\t\t\t<li class=\"list-group-item\">Highlights: {{ currentCity.highlights }}</li>\n\t\t</ul>\n\t\t<img src=\"img/{{ currentCity.name}}.jpg\" alt=\"Foto van {{ currentCity.name }}\" class=\"img-responsive\"/>\n\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, city_service_1.CityService])
                ], CityDetailComponent);
                return CityDetailComponent;
            })();
            exports_1("CityDetailComponent", CityDetailComponent);
        }
    }
});
//# sourceMappingURL=city.detail.component.js.map