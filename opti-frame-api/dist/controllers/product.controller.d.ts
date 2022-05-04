import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Product } from '../models';
import { ProductRepository } from '../repositories';
export declare class ProductController {
    productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    create(product: Omit<Product, 'id'>): Promise<Product>;
    count(where?: Where<Product>): Promise<Count>;
    find(filter?: Filter<Product>): Promise<Product[]>;
    updateAll(product: Product, where?: Where<Product>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Product>): Promise<Product>;
    updateById(id: string, product: Product): Promise<void>;
    replaceById(id: string, product: Product): Promise<void>;
    deleteById(id: string): Promise<void>;
}
