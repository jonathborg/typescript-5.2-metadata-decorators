import { classDecorator } from "./decorator.js";

// Should not be read-only because we need to polyfill the Symbol.metadata
(Symbol.metadata as any) ??= Symbol("Symbol.metadata");

class AuthService {
  login() {
    return { token: "123" };
  }
}

class UserService {
  getUser() {
    return { name: "John Doe" };
  }
}

@classDecorator
class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  getUser() {
    return this.userService.getUser();
  }

  login() {
    return this.authService.login();
  }
}

const value = new UserController(new UserService(), new AuthService());
console.log(value.getUser());

const ourMetadata = UserController[Symbol.metadata];
console.log(ourMetadata);
