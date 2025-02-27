import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  batch: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  brand: string;

  @Column('int', { nullable: false })
  width: number;

  @Column('int', { nullable: false })
  height: number;

  @Column('int', { nullable: false })
  length: number;

  @Column('float', { nullable: false })
  weight: number;

  @Column()
  description: string;

  @Column('int', { nullable: true })
  ref?: number;

  @Column('int')
  price: number;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  main_image_url: string;

  @Column('simple-array', { nullable: true })
  images: string[];

  @Column('simple-array', { nullable: true })
  scales: string[];

  @Column('simple-array', { nullable: true })
  colors: string[];

  // @Column('int')
  // quantity: number;

  @Column({ nullable: true })
  code?: string;

  @Column('simple-array')
  subcategory: string[];

  @Column('int', { nullable: true })
  discount_price?: number;

  @Column('boolean', { default: false })
  isFeatured: boolean;

  @Column('boolean', { default: false })
  isNewCollection: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
