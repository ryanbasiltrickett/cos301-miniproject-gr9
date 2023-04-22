import { Timestamp } from 'firebase-admin/firestore';
// import { ProfileStatus } from '../enums';
// import { IAccountDetails } from './account-details.interface';
// // import { IAddressDetails } from './address-details.interface';
// // import { IContactDetails } from './contact-details.interface';
// // import { IOccupationDetails } from './occupation-details.interface';
// // import { IPersonalDetails } from './personal-details.interface';

export interface IProfile {
  id: string;
  email?: string | null | undefined;
  username?: string | null | undefined;
  photoURL?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  customClaims?: { [key: string]: any } | null | undefined,
  bio?: string | null | undefined;
  visibility?: boolean | null | undefined;
  name?: string | null | undefined;
  timeLeft?: number | null | undefined;
  password?: string | null | undefined;
  created?: Timestamp | null | undefined;
}
