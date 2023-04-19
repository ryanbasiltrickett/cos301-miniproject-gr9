import { ProfileStatus } from '../enums';

export interface IAccountDetails {
  username?: string | null | undefined;
  bio?: string | null | undefined;
  name?: string | null | undefined;
  visibility?: boolean | null | undefined;
  timeLeft?: number | null | undefined;

  email?: string | null | undefined;
  // photoURL?: string | null | undefined;
  password?: string | null | undefined;
  status?: ProfileStatus | null | undefined;
}
