import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
        constructor(private _jwtService: JwtService) {}

 async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {


       const request = context.switchToHttp().getRequest();
    const {token} = request.headers
    if (!token) {
      throw new UnauthorizedException();
    }
     try {
      const payload = await this._jwtService.verify(token, { secret: 'ahmed' });
      request['user'] = payload;
      return true;

    } catch {
      throw new UnauthorizedException();
    }
  
  }
}
