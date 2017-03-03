/**
 * Main Application
 */

//System imports
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}      from '@angular/http';
import {RouterModule} from '@angular/router';

//Application imports
import {AppComponent}  from './app.component';
import {RootComponent}  from './root/root.component';
import {RootCompanyComponent}  from './root/root.company.component';
import {MenuComponent}  from './menu/menu.component';
import {CategoryComponent}  from './category/category.component';
import {CompaniesComponent}  from './company/companies.component';
import {CompanyComponent}  from './company/company.component';

// Routings
const routes = [
    { //path: /
        path: '',
        name: 'Root',
        component: RootComponent,
    },
    { //path: /hu/
        path: ':language',
        component: RootComponent,
    },
    { //path: /hu/cat1/
        path: ':language/:category',
        component: RootComponent,
    },
    { //path: /hu/cat1/company1/
        path: ':language/:category/:company',
        component:RootCompanyComponent,
    }
];

/**
 * Load module
 */
@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, RootComponent, MenuComponent, CategoryComponent, CompanyComponent,CompaniesComponent,RootCompanyComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
