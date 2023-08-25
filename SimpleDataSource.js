"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "IPhone 14", "Telefon", 1000), new Product_1.Product(2, "IPhone 15", "Telefon", 2000), new Product_1.Product(3, "IPhone 16", "Telefon", 3000), new Product_1.Product(4, "IPhone 17", "Telefon", 4000), new Product_1.Product(5, "IPhone 18", "Telefon", 5000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
