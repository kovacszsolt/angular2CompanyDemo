/**
 * Main Application
 */

//System imports
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}      from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'; // <--- JavaScript import from Angular

//Application imports
import {AppComponent}  from './app.component';
import {RootComponent}  from './root/root.component';
import {RootCompanyComponent}  from './root/root.company.component';
import {RootSearchComponent}  from './root/root.search.component';
import {MenuComponent}  from './menu/menu.component';
import {SearchComponent}  from './search/search.component';
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
	{ //path: /hu/search
		path: ':language/search',
		component: RootSearchComponent,
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
		component: RootCompanyComponent,
	}

];

/**
 * Load module
 */
@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
	declarations: [AppComponent, RootComponent, MenuComponent, SearchComponent, CategoryComponent, CompanyComponent, CompaniesComponent, RootCompanyComponent, RootSearchComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}
