!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist/",n(n.s=14)}([function(e,n,t){e.exports=t(1)(0)},function(e,n){e.exports=vendor_004b8d2331e978e14cdf},function(e,n,t){e.exports=t(1)(335)},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a};Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t(27),a=t(2),c=t(8),s=t(12),l=t(11),p=t(9),u=t(7),f=t(13),d=t(10),h=function(){function e(){}return e}();h=r([o.NgModule({bootstrap:[c.AppComponent],declarations:[c.AppComponent,s.NavMenuComponent,l.HomeComponent,p.DepositComponent,u.AccountComponent,d.ExchangeComponent,f.PurchaseComponent],imports:[a.UniversalModule,i.RouterModule.forRoot([{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:l.HomeComponent},{path:"deposit",component:p.DepositComponent},{path:"account",component:u.AccountComponent},{path:"purchase",component:f.PurchaseComponent},{path:"exchange",component:d.ExchangeComponent},{path:"**",redirectTo:"home"}])]})],h),n.AppModule=h},function(e,n,t){e.exports=t(1)(334)},function(e,n,t){e.exports=t(1)(336)},function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t(26),c=function(){function e(e){var n=this;e.get("/api/Account/amt/500").subscribe(function(e){n.account=e.json()})}return e}();c=r([i.Component({selector:"account",template:t(17)}),o("design:paramtypes",[a.Http])],c),n.AccountComponent=c},function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a};Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=function(){function e(){}return e}();i=r([o.Component({selector:"app",template:t(18),styles:[t(24)]})],i),n.AppComponent=i},function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a};Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=function(){function e(){this.title="DEPOSIT",this.entity="deposits"}return e}();i=r([o.Component({selector:"deposit",template:t(19)})],i),n.DepositComponent=i},function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a};Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=function(){function e(){this.title="EXCHANGE",this.entity="exchanges"}return e}();i=r([o.Component({selector:"exchange",template:t(20)})],i),n.ExchangeComponent=i},function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a};Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=function(){function e(){}return e}();i=r([o.Component({selector:"home",template:t(21)})],i),n.HomeComponent=i},function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a};Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=function(){function e(){}return e}();i=r([o.Component({selector:"nav-menu",template:t(22),styles:[t(25)]})],i),n.NavMenuComponent=i},function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a};Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=function(){function e(){}return e}();i=r([o.Component({selector:"purchase",template:t(23)})],i),n.PurchaseComponent=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(5);var r=t(0),o=t(2),i=t(4);t(6);r.enableProdMode();var a=o.platformUniversalDynamic(),c=function(){a.bootstrapModule(i.AppModule)};"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)},function(e,n,t){n=e.exports=t(3)(),n.push([e.i,"@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n",""])},function(e,n,t){n=e.exports=t(3)(),n.push([e.i,"li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n",""])},function(e,n){e.exports='<h1>ACCOUNT</h1>\r\n\r\n<p>We will put some code to display <strong>user accounts</strong></p>\r\n\r\n<div *ngIf="account">  \r\n    <table class="table table-bordered table-striped">\r\n        <tr>\r\n            <th>Currency</th>\r\n            <th>Amount</th>\r\n        </tr>\r\n        <tr>\r\n            <td>{{account.currency}}</td>\r\n            <td>{{account.amount}}</td>\r\n        </tr>\r\n    </table>\r\n</div>'},function(e,n){e.exports="<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"},function(e,n){e.exports="<h1>{{title}}</h1>\r\n\r\n<p>We will put some code here to process <strong>{{entity}}</strong></p>\r\n\r\n\r\n<button >SUBMIT</button>"},function(e,n){e.exports="<h1>{{title}}</h1>\r\n\r\n<p>We will put some code here to process <strong>{{entity}}</strong></p>\r\n\r\n\r\n<button >SUBMIT</button>"},function(e,n){e.exports="<h1>MSSE 682</h1>\r\n<h2>Regis University</h2>\r\n<p>Single-page application, built with Angular2 and .NET Web API</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n</ul>\r\n\r\n<div>\r\n    <h3>Week 8</h3>\r\n    <h4>Deliverable</h4>\r\n    <p>\r\n        I used REST via a Web API host and Angular2 client to set up some web service \r\n        infrastructure, an example is in \"AccountController.cs\", there I set up some\r\n        HTTP that is called in \"account.component.ts\".  Everything is hosted on Microsoft\r\n        Azure.\r\n    </p>\r\n    <p>\r\n        You can also see the API in action by going to \r\n        http://main52.azurewebsites.net/api/account/amt/1000\r\n        you can replace 1000 with any number you like, just put it in your browser\r\n        and you should see a JSON object displayed by your browser, this is the same url\r\n        that the client is using.\r\n    </p>\r\n</div>"},function(e,n){e.exports="<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Travel Finance App</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                \r\n                \r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/account']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Account\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/deposit']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Deposit\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/exchange']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Exchange\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/purchase']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Purchase\r\n                    </a>\r\n                </li>\r\n\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"},function(e,n){e.exports="<h1>PURCHASE</h1>\r\n\r\n<p>We will put some code here to process <strong>purchases</strong></p>\r\n\r\n\r\n<button >SUBMIT</button>"},function(e,n,t){var r=t(15);e.exports="string"==typeof r?r:r.toString()},function(e,n,t){var r=t(16);e.exports="string"==typeof r?r:r.toString()},function(e,n,t){e.exports=t(1)(194)},function(e,n,t){e.exports=t(1)(333)}]);