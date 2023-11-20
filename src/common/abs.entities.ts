import { CreateDateColumn, ObjectLiteral, UpdateDateColumn } from 'typeorm';

export class GenericDateEntity {
  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  constructor(entity: ObjectLiteral) {
    Object.assign(this, entity);
  }
}
