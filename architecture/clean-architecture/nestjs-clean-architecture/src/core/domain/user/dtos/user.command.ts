import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Optional } from 'src/core/common/types/common-type';
import { UserGrade, UserRole } from '../entity/user.entity';

export class RegisterUserCommand {
  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly role: UserRole;

  @IsString()
  readonly grade: UserGrade;

  constructor(dto: {
    id: string;
    password: string;
    role: UserRole;
    grade: UserGrade;
  }) {
    this.id = dto.id;
    this.password = dto.password;
    this.role = dto.role;
    this.grade = dto.grade;
  }
}

export class ModifyUserCommand {
  @IsOptional()
  @IsEnum(UserRole)
  readonly role: Optional<UserRole>;

  @IsOptional()
  @IsEnum(UserRole)
  readonly grade: Optional<UserGrade>;

  constructor(dto: { role: Optional<UserRole>; grade: Optional<UserGrade> }) {
    this.role = dto.role;
    this.grade = dto.grade;
  }
}
