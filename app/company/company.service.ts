import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {CompanyStructure} from "./company.structure";
import {GlobalService} from "../_global/service";
@Injectable()

/**
 * Copmany Service
 * company data process
 */
export class CompanyService extends GlobalService {

    /**
     * data source
     * @type {string}
     */
    private url: string = '/data/companies.json';

    /**
     * data cache
     * @type {Array}
     */
    private cache: CompanyStructure[] = [];

    public constructor(private http: Http) {
        super();
    }

    /**
     * Get All data
     * @returns {any}
     */
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

    /**
     * Search /hu/category1
     * parameter link, language
     * @param language
     * @param link
     * @returns {Promise<T>}
     */
    public getLink(language: string, link: string): Promise<CompanyStructure[]> {
        return new Promise((resolve, reject) => {
                resolve(
                    this.getAll().then((p) => {
                            // filtering
                            return p.filter(p => ((p.link == link) && (p.key == language)));
                        }
                    )
                )
            }
        )
    }

    /**
     * Search
     * based on category
     * @param language
     * @param categorylink
     * @returns {Promise<T>}
     */
    public getCategory(language: string, categorylink: string): Promise<CompanyStructure[]> {
        return new Promise((resolve, reject) => {
                resolve(
                    this.getAll().then((p) => {
                            return p.filter(p => ((p.category.link == categorylink) && (p.key == language)));
                        }
                    )
                )
            }
        )
    }

    /**
     * Search
     * free text
     * @param language
     * @param text
     * @returns {Promise<T>}
     */
    public getSearch(language: string, text: string): Promise<CompanyStructure[]> {
        var q: CompanyStructure[];
        console.log(text);
        return new Promise((resolve, reject) => {
                resolve(
                    this.getAll().then((p) => {
                            return p.filter(p =>
                                ((p.title.indexOf(text) != -1) && (p.key == language))
                                || ((String(p.content).indexOf(text) != -1) && (p.key == language))
                            );
                        }
                    )
                )
            }
        )
    }


}