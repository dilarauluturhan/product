import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "IPhone 14", "Telefon", 1000),
            new Product(2, "IPhone 15", "Telefon", 2000),
            new Product(3, "IPhone 16", "Telefon", 3000),
            new Product(4, "IPhone 17", "Telefon", 4000),
            new Product(5, "IPhone 18", "Telefon", 5000)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}