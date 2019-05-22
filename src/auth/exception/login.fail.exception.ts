import { HttpException, HttpStatus } from '@nestjs/common';
import { createExceptionBody } from '../../util/exception/exception.util';

export const ERROR_CODE = 'LOGIN_FAILED';
export const ERROR_MESSAGE = 'username/password incorrect';

export class LoginFailException extends HttpException {
  constructor() {
    super(
      createExceptionBody(ERROR_MESSAGE, ERROR_CODE, HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST,
    );
  }
}
