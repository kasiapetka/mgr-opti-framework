import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: string;
    name: string;
    tags: string[];
    price: number;
    image: string;
    description: string;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;
