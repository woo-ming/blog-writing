import { UserId } from '../entity/user.entity';

export class UserRetrieveByUserIdCriteria {
  readonly userId: UserId;

  constructor(dto: { userId: UserId }) {
    this.userId = dto.userId;
  }
}
