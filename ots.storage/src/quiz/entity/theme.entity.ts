import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface ThemeData {
  themeId: string;
  theme: string;
}

@Entity({ name: 'theme' })
export class ThemeEntity extends BaseEntity {
  constructor(themeData: ThemeData) {
    super();

    if (themeData) {
      this.theme_id = themeData.themeId;
      this.theme = themeData.theme;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  theme_id: string;

  @Column()
  theme: string;
}
