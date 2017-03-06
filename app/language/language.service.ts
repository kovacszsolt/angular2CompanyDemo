/**
 * language service
 * read languages from JSON
 */

// import system
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

// import components
import {LanguageStructure} from "./language.structure";
import {GlobalService} from "../_global/service";
@Injectable()

export class LanguageService extends GlobalService {

	// source
	private url: string = '/data/languages.json';

	// langauges
	private cache: LanguageStructure[] = [];

	public constructor(private http: Http) {
		super();
	}

	/**
	 * get All langauges
	 * @returns {any}
	 */
	public getAll(): Promise<LanguageStructure[]> {
		if (this.cache.length > 0) { //check cache
			return new Promise((resolve, reject) => {
				resolve(this.cache);
			});
		}
		return this.http.get(this.url).toPromise().then((response) => {
			this.cache = response.json() as LanguageStructure[];
			return response.json() as LanguageStructure[];
		})
			.catch(this.onError);
	}

	/**
	 * get language from URL
	 * @param link
	 * @returns {Promise<T>}
	 */
	public getLink(link: string): Promise<LanguageStructure[]> {
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