import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { DepositComponent } from './components/deposit/deposit.component';
import { AccountComponent } from './components/account/account.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ExchangeComponent } from './components/exchange/exchange.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        
        HomeComponent,
        DepositComponent,
        AccountComponent,
        ExchangeComponent,
        PurchaseComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
           
            { path: 'deposit', component: DepositComponent },
            { path: 'account', component: AccountComponent },
            { path: 'purchase', component: PurchaseComponent },
            { path: 'exchange', component: ExchangeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
