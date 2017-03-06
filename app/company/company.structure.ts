import {CategoryStructure} from "../category/category.structure";
/**
 * Company structure
 */
export class CompanyStructure {
	/**
	 * Constructor
	 * @param CompanyStructure category
	 * @param string title
	 * @param string key
	 * @param string content
	 * @param string link
	 */
	constructor(public category: CategoryStructure,
				public title: string,
				public key: string,
				public content: string,
				public link: string) {
	}
}