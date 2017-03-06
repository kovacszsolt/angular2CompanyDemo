/**
 * Main Component
 */

// System import
import {Component} from '@angular/core';

// Component imports
import {LanguageService} from './language/language.service';
import {CategoryService} from './category/category.service';
import {CompanyService} from './company/company.service';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
<div class="container">
    <router-outlet></router-outlet>
</div>
    `,
	providers: [LanguageService, CategoryService, CompanyService]
})


export class AppComponent {
	public constructor() {
	}
}
