import { Injectable } from '@nestjs/common';
import {User, Bookmark} from "@prisma/client";

@Injectable({})
export class AuthService {
  signup() {
    return 'I have signed up';
  }
  signin() {
    return 'I have signed in';
  }
}
