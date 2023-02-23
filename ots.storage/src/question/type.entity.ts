import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface TypeData {
  typeId: string;
  type: string;
}

@Entity({ name: 'type' })
export class TypeEntity extends BaseEntity {
  constructor(typeData: TypeData) {
    super();

    if (typeData) {
      this.type_id = typeData.typeId;
      this.type = typeData.type;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  type_id: string;

  @Column()
  type: string;
}
