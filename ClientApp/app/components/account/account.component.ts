import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'account',
    templateUrl: './account.component.html'
})
export class AccountComponent {
    public account: Account;

    constructor(http: Http) {
        http.get('/api/Account/amt/500').subscribe(result => {
            this.account = result.json();
        });

    }

}

interface Account {
    amount: number;
    currency: string;

}

