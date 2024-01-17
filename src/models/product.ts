
export default class Product {
    name;
    images;
    description;
    value;

    constructor(name: string, images: string, description: string, value: string){
        this.name = name;
        this.images = images;
        this.description = description;
        this.value = value;
    }
}