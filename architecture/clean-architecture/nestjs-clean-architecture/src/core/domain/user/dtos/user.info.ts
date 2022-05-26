import { Nullable } from 'src/core/common/types/common-type';
import { User, UserGrade, UserId, UserRole } from '../entity/user.entity';

export class UserMainInfo {
  readonly userId: UserId;
  readonly id: string;
  readonly role: UserRole;
  readonly grade: UserGrade;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Nullable<Date>;

  constructor(user: User) {
    this.userId = user.userId;
    this.id = user.id;
    this.role = user.role;
    this.grade = user.grade;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.getDeletedAt();
  }
}
