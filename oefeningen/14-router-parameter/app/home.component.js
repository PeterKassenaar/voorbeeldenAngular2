System.register(['angular2/core', "angular2/router", "./app.component", "./city.add.component", "./city.detail.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_component_1, city_add_component_1, city_detail_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (city_add_component_1_1) {
                city_add_component_1 = city_add_component_1_1;
            },
            function (city_detail_component_1_1) {
                city_detail_component_1 = city_detail_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home-component',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n\t<h1>Pick your favorite city</h1>\n\t<a [routerLink]=\"['/Home']\" class=\"btn btn-primary\">List of cities</a>\n\t<hr>\n\t<!-- Dynamically inject views here -->\n\t<router-outlet></router-outlet>\n\t"
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'root', redirectTo: ['/Home'] },
                        { path: '/home', name: 'Home', component: app_component_1.AppComponent },
                        { path: '/add', name: 'Add', component: city_add_component_1.CityAddComponent },
                        { path: '/detail/:id', name: 'Detail', component: city_detail_component_1.CityDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map