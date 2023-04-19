import { Timestamp } from 'firebase-admin/firestore';

export interface IAuth {
  id: string;
  email?: string | null | undefined;
  username?: string | null | undefined;
  // photoURL?: string | null | undefined;
  // phoneNumber?: string | null | undefined;
  // customClaims?: { [key: string]: any } | null | undefined,
  bio?: string | null | undefined;
  visibility?: boolean | null | undefined;
  name?: string | null | undefined;
  timeLeft?: number | null | undefined;
  password?: string | null | undefined;
  created?: Timestamp | null | undefined;
}
