System.register(['angular2/platform/browser', "angular2/router", "./home.component", "./city.service", "angular2/http"], function(exports_1) {
    var browser_1, router_1, home_component_1, city_service_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_component_1.HomeComponent, [
                router_1.ROUTER_PROVIDERS, city_service_1.CityService, http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map