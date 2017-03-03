import {CategoryStructure} from "../category/category.structure";
/**
 * Menu structure
 */
export class CompanyStructure {
    /**
     * Constructor
     * @param id unique ID
     * @param title Title
     * @param url URL
     */
    constructor(
        public category: CategoryStructure,
        public language: CompanyLanguageStructure[],
                public link: string) {
    }
}

export class CompanyLanguageStructure {
    /**
     * Constructor
     * @param id unique ID
     * @param title Title
     * @param url URL
     */
    constructor(public title: string,
                public key: string,
                public content: string) {
    }
}