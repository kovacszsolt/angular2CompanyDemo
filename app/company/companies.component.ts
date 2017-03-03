import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CompanyStructure} from "./company.structure";
import {CompanyService} from "./company.service";
import {isUndefined} from "util";

@Component({
    selector: 'companies-app',
    template: `
<ul>
<li *ngFor="let companyItem of companyItems">
                <a routerLink="/{{this.currentLanguage}}/{{this.currentCat}}/{{companyItem.link}}/">{{companyItem.language[0][currentLanguage].title}}</a>
            </li>
            </ul>
`
})

export class CompaniesComponent {

    public companyItems: CompanyStructure[] = [];
    private currentCat: string;
    public currentLanguage: string;

    public constructor(private CompanyService: CompanyService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            if (params['category'] != undefined) {
                this.currentCat = params['category'];
                this.currentLanguage = params['language'];
                this.CompanyService.getCategory(params['category']).then((p) => {
                   this.companyItems = p;
                });
            }
        });
    }
}
