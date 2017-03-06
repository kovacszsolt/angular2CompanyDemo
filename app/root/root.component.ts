/**
 * Main Component
 * path:
 *      /
 *      /hu/
 *      /hu/cat1/
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'container-app',
	template: `
<div class="container">
<menu-app></menu-app>
<category-app></category-app>
<companies-app></companies-app>
</div>
`
})

export class RootComponent {
}
