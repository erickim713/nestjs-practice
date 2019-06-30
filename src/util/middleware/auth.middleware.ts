// import {
//   NestMiddleware,
//   HttpStatus,
//   Injectable,
//   HttpException,
// } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';
// import { UserService } from '../../user/user.service';

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   constructor(private readonly userService: UserService) { }

//   async use(req: Request, res: Response, next: NextFunction) {
//     const authHeaders = req.headers.authorization;
//     if (authHeaders && (authHeaders as string).split(' ')[1]) {
//       const token = (authHeaders as string).split(' ')[1];
//       let decoded;
//       try {
//         decoded = jwt.verify(token, 'secretKeyHere');
//       } catch (e) {
//         throw new HttpException(
//           {
//             statusCode: 403,
//             error: 'INVALID TOKEN',
//             message: 'token is corrupted',
//           },
//           403,
//         );
//       }
//       const user = await this.userService.findOne(decoded.username);
//       next();
//     }
//   }
// }
