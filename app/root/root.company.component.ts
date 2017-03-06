/**
 * Company Component
 * path:
 *      /hu/cat1/company1/
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'container-app',
	template: `
<div class="container">
<menu-app></menu-app>
<company-app></company-app>
</div>
`
})
export class RootCompanyComponent {
}
