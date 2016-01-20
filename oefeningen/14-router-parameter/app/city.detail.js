System.register(['angular2/core', "./city.model"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, city_model_1;
    var CityDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (city_model_1_1) {
                city_model_1 = city_model_1_1;
            }],
        execute: function() {
            CityDetail = (function () {
                function CityDetail() {
                    this.rating = new core_1.EventEmitter();
                }
                CityDetail.prototype.rate = function (num) {
                    console.log('rating voor ', this.city.name, ': ', num);
                    this.rating.emit(num);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', city_model_1.City)
                ], CityDetail.prototype, "city", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CityDetail.prototype, "rating", void 0);
                CityDetail = __decorate([
                    core_1.Component({
                        selector: 'city-detail',
                        template: "\n\t<h2>City details\n\t\t<button (click)=\"rate(1)\" class=\"btn btn-sm btn-success\">+1</button>\n\t\t<button (click)=\"rate(-1)\" class=\"btn btn-sm btn-danger\">-1</button>\n\t</h2>\n\t\t<ul class=\"list-group\">\n\t\t\t<li class=\"list-group-item\">Naam: {{ city.name }}</li>\n\t\t\t<li class=\"list-group-item\">Provincie: {{ city.province }}</li>\n\t\t\t<li class=\"list-group-item\">Highlights: {{ city.highlights }}</li>\n\t\t</ul>\n\t\t<img src=\"img/{{ city.name}}.jpg\" alt=\"Foto van {{ city.name }}\" class=\"img-responsive\"/>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CityDetail);
                return CityDetail;
            })();
            exports_1("CityDetail", CityDetail);
        }
    }
});
//# sourceMappingURL=city.detail.js.map