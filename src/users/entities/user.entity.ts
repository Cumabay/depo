import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  GHOST = 'ghost',
}

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Login', description: 'Логин' })
  @Column({ unique: true, nullable: false })
  login: string;

  @ApiProperty({ example: 'Password', description: 'Пароль' })
  @Column({ nullable: false })
  pass: string;

  @ApiProperty({ example: 'Admin', description: 'Роль: Админ' })
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GHOST,
  })
  role: UserRole;
}
