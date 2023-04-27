import { Timestamp } from 'firebase-admin/firestore';
import { ProfileStatus } from '@mp/api/profiles/util';
import { IAccountDetails } from '@mp/api/profiles/util';
import { IAddressDetails } from '@mp/api/profiles/util';
import { IContactDetails } from '@mp/api/profiles/util';
import { IOccupationDetails } from '@mp/api/profiles/util';
import { IPersonalDetails } from '@mp/api/profiles/util';

export interface INFProfile {
  userId: string;
  accountDetails?: IAccountDetails | null | undefined;
  status?: ProfileStatus | null | undefined;
  created?: Timestamp | null | undefined;
  bio? : string | null | undefined;
  private? : boolean | undefined;
  timeLeft : number;
}
