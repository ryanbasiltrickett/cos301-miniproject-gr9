import {
    AccountDetailsUpdatedEvent,
    // AddressDetailsUpdatedEvent,
    // ContactDetailsUpdatedEvent,
    IAccountDetails,
    // IAddressDetails,
    // IContactDetails,
    // IOccupationDetails,
    // IPersonalDetails,
    IProfile,
    // OccupationDetailsUpdatedEvent,
    // PersonalDetailsUpdatedEvent,
    ProfileCreatedEvent,
    ProfileTimeUpdatedEvent,
} from '@mp/api/profiles/util';
import { Timestamp } from 'firebase-admin/firestore';
import { AggregateRoot } from '@nestjs/cqrs';

export class Profile extends AggregateRoot implements IProfile {
  constructor(
    public id: string,
    public email?: string | null | undefined,
    public username?: string | null | undefined,
    public bio?: string | null | undefined,
    public name?: string | null | undefined,
    public visibility?: boolean | null | undefined,
    public timeLeft?: number | null | undefined,
    public photoURL?: string | null | undefined,
    public phoneNumber?: string | null | undefined,
    public customClaims?: { [key: string]: any } | null | undefined,
    public password?: string | null | undefined,
    public created?: Timestamp | null | undefined
  ) {
    super();
  }

  static fromData(profile: IProfile): Profile {
    const instance = new Profile(
      profile.id,
      profile.email,
      profile.username,
      profile.bio,
      profile.name,
      profile.visibility,
      profile.timeLeft,
      profile.photoURL,
      profile.phoneNumber,
      profile.customClaims,
      profile.password,
      profile.created
    );
    return instance;
  }

  create() {
    this.apply(new ProfileCreatedEvent(this.toJSON()));
  }

  decreaseTime(time: number) {
    if (this.timeLeft === null || this.timeLeft === undefined) {
      this.timeLeft = 10800;
    } else {
      this.timeLeft -= time;
    }
    this.apply(new ProfileTimeUpdatedEvent(this.toJSON()));
  }

  // updateAddressDetails(addressDetails: IAddressDetails) {
  //   if (!this.addressDetails) this.addressDetails = {};
  //   this.addressDetails.residentialArea = addressDetails.residentialArea
  //     ? addressDetails.residentialArea
  //     : this.addressDetails.residentialArea;
  //   this.addressDetails.workArea = addressDetails.workArea
  //     ? addressDetails.workArea
  //     : this.addressDetails.workArea;
  //   this.apply(new AddressDetailsUpdatedEvent(this.toJSON()));
  // }

  // updateContactDetails(contactDetails: IContactDetails) {
  //   if (!this.contactDetails) this.contactDetails = {};
  //   this.contactDetails.cellphone = contactDetails.cellphone
  //     ? contactDetails.cellphone
  //     : this.contactDetails.cellphone;
  //   this.apply(new ContactDetailsUpdatedEvent(this.toJSON()));
  // }

  // updatePersonalDetails(personalDetails: IPersonalDetails) {
  //   if (!this.personalDetails) this.personalDetails = {};
  //   this.personalDetails.age = personalDetails.age
  //     ? personalDetails.age
  //     : this.personalDetails.age;
  //   this.personalDetails.gender = personalDetails.gender
  //     ? personalDetails.gender
  //     : this.personalDetails.gender;
  //   this.personalDetails.ethnicity = personalDetails.ethnicity
  //     ? personalDetails.ethnicity
  //     : this.personalDetails.ethnicity;
  //   this.apply(new PersonalDetailsUpdatedEvent(this.toJSON()));
  // }

  // updateOccupationDetails(occupationDetails: IOccupationDetails) {
  //   if (!this.occupationDetails) this.occupationDetails = {};
  //   this.occupationDetails.householdIncome = occupationDetails.householdIncome
  //     ? occupationDetails.householdIncome
  //     : this.occupationDetails.householdIncome;
  //   this.occupationDetails.occupation = occupationDetails.occupation
  //     ? occupationDetails.occupation
  //     : this.occupationDetails.occupation;
  //   this.apply(new OccupationDetailsUpdatedEvent(this.toJSON()));
  // }

  updateAccountDetails(profile: IProfile) {
    this.username = profile.username
      ? profile.username
      : this.username;
    this.bio = profile.bio
      ? profile.bio
      : this.bio;
    this.name = profile.name
      ? profile.name
      : this.name;
    this.email = profile.email
      ? profile.email
      : this.email;
    // this.accountDetails.photoURL = accountDetails.photoURL
    //   ? accountDetails.photoURL
    //   : this.accountDetails.photoURL;
    this.visibility = profile.visibility
      ? profile.visibility
      : this.visibility;
    this.password = profile.password
      ? profile.password
      : this.password;
    this.apply(new AccountDetailsUpdatedEvent(this.toJSON()));
  }

  private updateAccountDetailsStatus() {
    // if (!this.accountDetails) {
    //   this.accountDetails = {};
    //   this.accountDetails.status = ProfileStatus.INCOMPLETE;
    //   this.status = ProfileStatus.INCOMPLETE;
    //   return;
    // }

    // if (!this.accountDetails.username || !this.accountDetails.email) {
    //   this.accountDetails.status = ProfileStatus.INCOMPLETE;
    //   this.status = ProfileStatus.INCOMPLETE;
    //   return;
    // }

    // this.accountDetails.status = ProfileStatus.COMPLETE;
    return;
  }

  // private updateAddressDetailsStatus() {
  //   if (!this.addressDetails) {
  //     this.addressDetails = {};
  //     this.addressDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (!this.addressDetails.residentialArea || !this.addressDetails.workArea) {
  //     this.addressDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.addressDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  // private updateContactDetailsStatus() {
  //   if (!this.contactDetails) {
  //     this.contactDetails = {};
  //     this.contactDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (!this.contactDetails.cellphone) {
  //     this.contactDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.contactDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  // private updatePersonalDetailsStatus() {
  //   if (!this.personalDetails) {
  //     this.personalDetails = {};
  //     this.personalDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (
  //     !this.personalDetails.age ||
  //     !this.personalDetails.gender ||
  //     !this.personalDetails.ethnicity
  //   ) {
  //     this.personalDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.personalDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  // private updateOccupationDetailsStatus() {
  //   if (!this.occupationDetails) {
  //     this.occupationDetails = {};
  //     this.occupationDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (
  //     !this.occupationDetails.householdIncome ||
  //     !this.occupationDetails.occupation
  //   ) {
  //     this.occupationDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.occupationDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  updateStatus() {
    // this.updateAccountDetailsStatus();
    // // this.updateAddressDetailsStatus();
    // // this.updateContactDetailsStatus();
    // // this.updatePersonalDetailsStatus();
    // // this.updateOccupationDetailsStatus();

    // if (
    //   this.accountDetails?.status === ProfileStatus.COMPLETE //&&
    //   // this.addressDetails?.status === ProfileStatus.COMPLETE &&
    //   // this.contactDetails?.status === ProfileStatus.COMPLETE &&
    //   // this.personalDetails?.status === ProfileStatus.COMPLETE &&
    //   // this.occupationDetails?.status === ProfileStatus.COMPLETE
    // ) {
    //   this.status = ProfileStatus.COMPLETE;
    // }

    // this.apply(new ProfileStatusUpdatedEvent(this.toJSON()));
  }

  toJSON(): IProfile {
    return {
      id: this.id,
      email: this.email,
      username: this.username,
      photoURL: this.photoURL,
      // phoneNumber: this.phoneNumber,
      // customClaims: this.customClaims,
      created: this.created,
      bio: this.bio,
      visibility: this.visibility,
      timeLeft: this.timeLeft,
      name: this.name,
    };
  }
}
