import { JwtPayload } from 'jwt-decode';

export enum Roles { 
  Admin = 'admin',
  User = 'user'
}

export interface User {
  id: string;
  email: string;
  role: string;
  isDefined: boolean;
  isAuthorized: boolean;
}
export type UserState = {
  storedUser: User | null;
  setUser: ({ user }: { user: User }) => void;
  clearUser: () => void;
};

export type CustomJwtPayload = JwtPayload & User & { sub: string };
