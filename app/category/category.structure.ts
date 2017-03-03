/**
 * Category structure
 */
export class CategoryStructure {
    /**
     * Constructor
     * @param id unique ID
     * @param title Title
     * @param url URL
     */
    constructor(public id: number,
                public title: string,
                public link: string) {
    }
}
