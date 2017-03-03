import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {CompanyStructure} from "./company.structure";
import {GlobalService} from "../_global/service";
@Injectable()

export class CompanyService extends GlobalService {

    private url: string = '/data/companies.json';

    private cache: CompanyStructure[] = [];

    public constructor(private http: Http) {
        super();
    }

    public getAll(): Promise<CompanyStructure[]> {
        if (this.cache.length > 0) { //check cache
            return new Promise((resolve, reject) => {
                resolve(this.cache);
            });
        }
        return this.http.get(this.url).toPromise().then((response) => {
            this.cache = response.json() as CompanyStructure[];
            return response.json() as CompanyStructure[];
        })
            .catch(this.onError);
    }

    public getLink(link: string): Promise<CompanyStructure[]> {
        return new Promise((resolve, reject) => {
                resolve(
                    this.getAll().then((p) => {
                            return p.filter((p => p.link == link));
                        }
                    )
                )
            }
        )
    }

    public getCategory(categorylink: string): Promise<CompanyStructure[]> {
        return new Promise((resolve, reject) => {
                resolve(
                    this.getAll().then((p) => {
                            return p.filter((p => p.category.link == categorylink));
                        }
                    )
                )
            }
        )
    }

}