import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ProdutsListComponent} from "./produts-list/produts-list.component";
import {ProductsService} from "./services/products.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { CharLimitPipe } from './pipes/char-limit.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ProdutsListComponent,
        CharLimitPipe
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
        ProductsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
