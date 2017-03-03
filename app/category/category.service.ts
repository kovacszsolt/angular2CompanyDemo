/**
 * category service
 * read categories from JSON
 */

// import system
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

// import components
import {CategoryStructure} from "./category.structure";
import {GlobalService} from "../_global/service";
@Injectable()

export class CategoryService extends GlobalService {

    // source
    private url: string = '/data/categoies.json';

    // categories
    private cache: CategoryStructure[] = [];

    public constructor(private http: Http) {
        super();
    }

    /**
     * get all categories
     * @returns {any}
     */
    public getAll(): Promise<CategoryStructure[]> {
        if (this.cache.length > 0) { //check cache
            return new Promise((resolve, reject) => {
                resolve(this.cache);
            });
        }
        return this.http.get(this.url).toPromise().then((response) => {
            this.cache = response.json() as CategoryStructure[];
            return response.json() as CategoryStructure[];
        })
            .catch(this.onError);
    }

    /**
     * get category from URL
     * @param link
     * @returns {Promise<T>}
     */
    public getLink(link: string): Promise<CategoryStructure[]> {
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

}