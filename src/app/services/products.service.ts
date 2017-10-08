import {Injectable} from "@angular/core";
import {Product} from "../data-store/product.model";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Http, Response} from "@angular/http";

@Injectable()
export class ProductsService {

    constructor(private _http: Http) {
    }

    public getProductsInfo(): Observable<Product[]> {
        return this._http.get('./assets/api/products-data.json')
            .map((response: Response) => <Product[]>response.json())
    }
}

