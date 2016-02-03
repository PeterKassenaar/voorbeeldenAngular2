System.register(['angular2/core', "./tabs.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tabs_component_1;
    var Tab;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            }],
        execute: function() {
            Tab = (function () {
                function Tab(tabs) {
                    tabs.addTab(this); // This injected the PARENT-instance of the tabs-component!
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Tab.prototype, "tabTitle", void 0);
                Tab = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        template: "\n\t\t<div [hidden]=\"!active\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [tabs_component_1.Tabs])
                ], Tab);
                return Tab;
            })();
            exports_1("Tab", Tab);
        }
    }
});
//# sourceMappingURL=tab.component.js.map