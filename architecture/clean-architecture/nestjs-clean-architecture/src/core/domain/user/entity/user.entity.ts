import { Nullable, Optional } from 'src/core/common/types/common-type';
import { ModifyUserCommand } from '../dtos/user.command';

export enum UserRole {
  관리자 = 'ADMIN',
  운영자 = 'OPERATOR',
  일반유저 = 'GENERAL',
}
export enum UserGrade {
  일반 = 'GENERAL',
  VIP = 'VIP',
  VVIP = 'VVIP',
}

export type UserId = string;

export class User {
  readonly userId: Optional<UserId>;
  readonly id: string;
  private password: string;
  role: UserRole;
  grade: UserGrade;
  readonly createdAt: Nullable<Date>;
  readonly updatedAt: Nullable<Date>;
  private deletedAt: Nullable<Date>;

  constructor(user: {
    userId: Optional<string>;
    id: string;
    password: string;
    role: UserRole;
    grade: UserGrade;
    createdAt: Optional<Date>;
    updatedAt: Optional<Date>;
    deletedAt: Optional<Date>;
  }) {
    this.userId = user.userId;
    this.id = user.id;
    this.password = user.password;
    this.role = user.role;
    this.grade = user.grade;
    this.createdAt = user.createdAt ?? null;
    this.updatedAt = user.updatedAt ?? null;
    this.deletedAt = user.deletedAt ?? null;
  }

  modify(command: ModifyUserCommand) {
    if (command.role) this.role = command.role;
    if (command.grade) this.grade = command.grade;
  }

  remove() {
    this.deletedAt = new Date();
  }

  getPassword = () => this.password;
  getDeletedAt = () => this.deletedAt;
}
