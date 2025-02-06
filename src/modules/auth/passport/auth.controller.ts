import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MailerService } from "@nestjs-modules/mailer";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailerService: MailerService
  ) { }

  
}
