import { Timestamp } from 'firebase-admin/firestore';

export interface IAuth {
  id: string;
<<<<<<< HEAD
  username?: string | null | undefined;
  bio?: string | null | undefined;
  private?: boolean | null | undefined;
  timeLeft?: number | null | undefined;
  email?: string | null | undefined;
  photoURL?: string | null | undefined;
  password?: string | null | undefined;
=======
  email: string;
  displayName?: string | null | undefined;
  photoURL?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  // customClaims?: { [key: string]: any } | null | undefined;
  password: string;
>>>>>>> cb6c112e844f2797c9111a8a0fdbebb8d3fd5435
  created?: Timestamp | null | undefined;
}
