import { FilterQuery, Model, Document } from "mongoose";

export default class BaseRepository<Entity extends Document> {
  constructor(private model: Model<Entity>) {}

  async create(data: Partial<Entity>): Promise<Entity> {
    return this.model.create(data);
  }

  async exist(filter: FilterQuery<Entity>): Promise<boolean> {
    const document = await this.model.exists(filter);
    return !!document;
  }

  async delete(filter: FilterQuery<Entity>): Promise<boolean> {
    const result = await this.model.deleteOne(filter);
    return result.deletedCount > 0;
  }

  async update(
    filter: FilterQuery<Entity>,
    data: Partial<Entity>
  ): Promise<Entity | null> {
    return this.model.findOneAndUpdate(filter, data, { new: true });
  }

  async findOne(filter: FilterQuery<Entity>): Promise<Entity | null> {
    return this.model.findOne(filter);
  }

  async findAll(filter: FilterQuery<Entity> = {}): Promise<Entity[]> {
    return this.model.find(filter);
  }
}
