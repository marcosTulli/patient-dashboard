import { JwtPayload } from 'jwt-decode';


export interface User {
  id: string;
  email: string;
  role: string;
  isDefined: boolean;
}
export type UserState = {
  storedUser: User | null;
  setUser: ({user}: {user: User}) => void;
  clearUser: () => void;
};

export type CustomJwtPayload = JwtPayload & User & { sub: string };
