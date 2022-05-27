import { Nullable } from 'src/core/common/types/common-type';
import { ModifyUserCommand, RegisterUserCommand } from '../dtos/user.command';
import { compare, genSalt, hash } from 'bcrypt';
import { ulid } from 'ulid';

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
  private readonly userId: UserId;
  private readonly id: string;
  private password: string;
  private role: UserRole;
  private grade: UserGrade;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;
  private deletedAt: Nullable<Date>;

  constructor(user: {
    userId: string;
    id: string;
    password: string;
    role: UserRole;
    grade: UserGrade;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Nullable<Date>;
  }) {
    this.userId = user.userId;
    this.id = user.id;
    this.password = user.password;
    this.role = user.role;
    this.grade = user.grade;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.deletedAt;
  }

  public modify(command: ModifyUserCommand) {
    if (command.role) this.role = command.role;
    if (command.grade) this.grade = command.grade;
  }

  public remove() {
    this.deletedAt = new Date();
  }

  public getUserId = () => this.userId;
  public getId = () => this.id;
  public getPassword = () => this.password;
  public getRole = () => this.role;
  public getGrade = () => this.grade;
  public getCreatedAt = () => this.createdAt;
  public getUpdatedAt = () => this.updatedAt;
  public getDeletedAt = () => this.deletedAt;

  public async comparePassword({
    password,
  }: {
    password: string;
  }): Promise<boolean> {
    return await compare(password, this.password);
  }

  private static async hashPassword({
    password,
  }: {
    password: string;
  }): Promise<string> {
    const salt: string = await genSalt();
    return await hash(password, salt);
  }

  public static async of(command: RegisterUserCommand): Promise<User> {
    return new User({
      ...command,
      password: await this.hashPassword({ password: command.password }),
      userId: command.userId ?? ulid(),
      createdAt: command.createdAt ?? new Date(),
      updatedAt: command.updatedAt ?? new Date(),
      deletedAt:
        typeof command.deletedAt === 'undefined' ? null : command.deletedAt,
    });
  }
}
