import { Logger, Post, Body, Controller, Res, UseGuards, HttpStatus } from '@nestjs/common';

import { Response } from 'express';
import { IMailData } from '../interfaces/IMailData'
import { HeaderApiKeyGuard } from '../../auth/guard/header-api-key.guard';
import { AppMailService } from '../services/app-mail.service';
import { genericTemplate } from '../templates/generic/generic.template';


export type SendMail = Partial<IMailData> & {
  email: string;
}

@Controller('email')
export class EmailController {

  logger: Logger;
  constructor(
    private mailService: AppMailService
  ) {

    this.logger = new Logger(EmailController.name)
  }

  @Post('send')
  @UseGuards(HeaderApiKeyGuard)
  async sendEmail(@Body() { email, title, subject, body, subtitle }: SendMail, @Res() res: Response): Promise<void> {
    try {
      await this.mailService.send(email, genericTemplate.getEmailTmpl({
        subject: subject ?? 'Testing mail service',
        title: title ?? 'Test Email',
        subtitle: subtitle ?? `Testing email using: [${email}] address`,
        body: body ?? 'Testing Email'
      }, 'es'));
      res.status(HttpStatus.CREATED).send();
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }

}
