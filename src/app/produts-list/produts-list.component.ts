import {Component, OnInit} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Product} from "../data-store/product.model";

@Component({
    selector: 'app-produts-list',
    templateUrl: './produts-list.component.html',
    styleUrls: ['./produts-list.component.css']
})
export class ProdutsListComponent implements OnInit {
    public products: Product[];
    errorMessage: string;

    constructor(private _getProducts: ProductsService) {
    }

    ngOnInit() {
        this.getAllProducts();
    }

    public getAllProducts() {
        this._getProducts.getProductsInfo()
            .subscribe(
                (data) => this.products = data,
                (error) => this.errorMessage = <any>error
            )
    }

}
