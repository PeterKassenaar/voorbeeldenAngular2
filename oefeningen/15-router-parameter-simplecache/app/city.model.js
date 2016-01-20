System.register([], function(exports_1) {
    var City;
    return {
        setters:[],
        execute: function() {
            City = (function () {
                function City(id, name, province, rating, highlights) {
                    this.id = id;
                    this.name = name;
                    this.province = province;
                    this.rating = rating;
                    this.highlights = highlights;
                }
                return City;
            })();
            exports_1("City", City);
        }
    }
});
//# sourceMappingURL=city.model.js.map