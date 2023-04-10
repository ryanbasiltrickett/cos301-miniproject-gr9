import { Timestamp } from 'firebase-admin/firestore';

export interface IAuth {
  id: string;
  username?: string | null | undefined;
  bio?: string | null | undefined;
  private?: boolean | null | undefined;
  timeLeft?: number | null | undefined;
  email?: string | null | undefined;
  photoURL?: string | null | undefined;
  password?: string | null | undefined;
  created?: Timestamp | null | undefined;
}
