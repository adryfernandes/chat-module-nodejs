import { FilterQuery, Model, Document, SaveOptions } from "mongoose";
export declare class Repository<Entity extends Document> {
    private model;
    constructor(model: Model<Entity>);
    create(data: Partial<Entity>, options?: SaveOptions): Promise<Entity>;
    exist(filter: FilterQuery<Entity>): Promise<boolean>;
    delete(filter: FilterQuery<Entity>): Promise<boolean>;
    update(filter: FilterQuery<Entity>, data: Partial<Entity>): Promise<Entity | null>;
    findOne(filter: FilterQuery<Entity>): Promise<Entity | null>;
    findAll(filter?: FilterQuery<Entity>): Promise<Entity[]>;
}
