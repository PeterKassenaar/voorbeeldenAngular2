System.register(['angular2/core', './tabs.component', "./tab.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tabs_component_1, tab_component_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'tabs-app',
                        template: "\n\t\t<tabs>\n\t\t\t<tab tabTitle=\"Foo\">\n\t\t\t\t<h2>Foo</h2>\n\t\t\t\t<p>Content of tab Foo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque doloribus est fugit illum iste itaque magnam minus, necessitatibus, officiis sed sit, tempore vero. Doloremque facere id officiis quibusdam quo.</p>\n\t\t\t</tab>\n\t\t\t<tab tabTitle=\"Bar\">\n\t\t\t<h2>Bar</h2>\n\t\t\t\t<p>Content of tab Bar. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque aut, autem, corporis debitis dicta dignissimos incidunt ipsa ipsum laborum maiores minus quaerat quis quo reiciendis repellendus sint sunt \u00E5ut.</p>\n\t\t\t</tab>\n\t\t</tabs>\n\t",
                        directives: [tabs_component_1.Tabs, tab_component_1.Tab]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map