export class UserDITokens {
  // Use-cases
  public static readonly RegisterUserUseCase: unique symbol = Symbol(
    'RegisterUserUseCase',
  );
  public static readonly ModifyUserUseCase: unique symbol =
    Symbol('ModifyUserUseCase');

  public static readonly RemoveUserUseCase: unique symbol =
    Symbol('RemoveUserUseCase');

  public static readonly RetrieveUserByUserIdUseCase: unique symbol = Symbol(
    'RetrieveUserByUserIdUseCase',
  );

  // Handlers

  // Repositories
  public static readonly UserRepository: unique symbol =
    Symbol('UserRepository');
}
