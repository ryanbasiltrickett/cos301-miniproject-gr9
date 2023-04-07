import { TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';
import { Functions } from '@angular/fire/functions';
import { docData } from '@angular/fire/firestore';
import { ProfilesApi } from './profiles.api';
import { AgeGroup , Gender , HouseholdIncome} from '@mp/api/profiles/util';


import {
    IProfile,
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,
    IUpdateAddressDetailsRequest,
    IUpdateAddressDetailsResponse,
    IUpdateContactDetailsRequest,
    IUpdateContactDetailsResponse,
    IUpdateOccupationDetailsRequest,
    IUpdateOccupationDetailsResponse,
    IUpdatePersonalDetailsRequest,
    IUpdatePersonalDetailsResponse
} from '@mp/api/profiles/util';



describe('ProfilesApi', () => {
    let profilesApi: ProfilesApi;
    let firestoreSpy: any;
    let functionsSpy: any;
    let docDataSpy: jasmine.Spy;
  
    beforeEach(() => {
      firestoreSpy = jasmine.createSpyObj('Firestore', ['doc']);
      functionsSpy = jasmine.createSpyObj('Functions', ['httpsCallable']);
  
      docDataSpy = spyOn<any>(docData, 'docData').and.returnValue('expected value');
  
      profilesApi = new ProfilesApi(firestoreSpy, functionsSpy);
    });
//configure Testbed and set the dependecies needed
TestBed.configureTestingModule({
    providers: [
      ProfilesApi,
      { provide: Firestore, useValue: firestoreSpy },
      { provide: Functions, useValue: functionsSpy }
    ]
  });

  //instantiate profileApi and inject mock objects
  let service: ProfilesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfilesApi,
        { provide: Firestore, useValue: firestoreSpy },
        { provide: Functions, useValue: functionsSpy }
      ]
    });
    service = TestBed.inject(ProfilesApi);
  });


  
  describe('ProfilesApi', () => {
    it('should retrieve a profile by Id', async () => {
      // arrange
      const id = '2342';
      const docRefSpy = jasmine.createSpyObj('docRef', ['withConverter']);
      const expectedProfile = { id, name: 'katty Perry', email: 'perry@gmail.com' };
      docRefSpy.withConverter.and.returnValue({
        fromFirestore: () => expectedProfile,
        toFirestore: (profile: any) => profile
      });
      firestoreSpy.doc.and.returnValue(docRefSpy);
      docDataSpy.and.returnValue(expectedProfile);
  
      // action
      const profile = await service.profile$(id).toPromise();
  
      // assert
      expect(firestoreSpy.doc).toHaveBeenCalledWith(firestoreSpy, `profiles/${id}`);
      expect(docRefSpy.withConverter).toHaveBeenCalled();
      expect(docDataSpy).toHaveBeenCalledWith(docRefSpy, { idField: 'id' });
      expect(profile).toEqual(expectedProfile);
    });
  
  });

  //test the profile$ function

  describe('profile$',() =>{
    it('should return a profile data given the eid',()=>{
        const expectedProfileData= {id:'1234', name:'katty perry'};
        const docRef=jasmine.createSpyObj('DocRef',['withConverter']);
        const snapshot=jasmine.createSpyObj('Snapshot',['data']);
        snapshot.data.and.returnValue(expectedProfileData);
        docRef.withConverter.and.returnValue(snapshot);
        firestoreSpy.doc.and.returnValue(docRef);
        profilesApi.profile$('1234').subscribe((profileData)=>{
            expect(profileData).toEqual(expectedProfileData);
        })
    })
  });

  // test for updateAccountDetails

  describe('updateAccountDetails', () => {
    let profilesApi_ :ProfilesApi;
    it('should call httpsCallable with expected arguments', async () => {
        let expectedRequest:IUpdateAccountDetailsRequest={profile:{userId: 'abc123', accountDetails: { email: 'johndoe@example.com' } }};
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));

      await profilesApi.updateAccountDetails(expectedRequest);

      expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('updateAccountDetails');
      expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
    });

    it('should return expected response', async () => {
      const expectedResponse = { success: true };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve(expectedResponse));
      let emptyRequest:IUpdateAccountDetailsRequest={profile:{userId:'abc123'}};
      const response = await profilesApi.updateAccountDetails(emptyRequest);

      expect(response).toEqual(expectedResponse);
    });
  });

  // test the updateContactDetails 
  describe('updateContactDetails', () => {

    it('should call httpsCallable with expected arguments', async () => {
      const expectedRequest :IUpdateContactDetailsRequest= { profile:{userId: 'abc123', contactDetails: { cellphone: '555-1234' }} };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));

      await profilesApi.updateContactDetails(expectedRequest);

      expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('updateContactDetails');
      expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
    });

    it('should return expected response', async () => {
      const expectedResponse = { success: true };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve(expectedResponse));
      const emptyRequest :IUpdateContactDetailsRequest= { profile:{userId: 'abc123'}};
      const response = await profilesApi.updateContactDetails(emptyRequest);

      expect(response).toEqual(expectedResponse);
    });
  });


  // test the updateAddressDetails 
  describe('updateAddressDetails', () => {
    it('should call httpsCallable with expected arguments', async () => {
      const expectedRequest :IUpdateAddressDetailsRequest= { profile:{userId: 'abc123', addressDetails: { residentialArea: 'Area 59',workArea:'Doll house' }} };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));

      await profilesApi.updateAddressDetails(expectedRequest);

      expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('updateAddressDetails');
      expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
    });

    it('should return expected response', async () => {
      const expectedResponse = { success: true };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve(expectedResponse));
      const emptyRequest :IUpdateAddressDetailsRequest= { profile:{userId: 'abc123'}};
      const response = await profilesApi.updateAddressDetails(emptyRequest);

      expect(response).toEqual(expectedResponse);
    });
  });


  //test the updatePersonalDetails function
  describe('updatePersonalDetails', () => {

    it('should call httpsCallable with expected arguments', async () => {
      const expectedRequest :IUpdatePersonalDetailsRequest= { profile:{userId: 'abc123', personalDetails: { age:AgeGroup.AG18TO25,gender:Gender.MALE}} };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));

      await profilesApi.updatePersonalDetails(expectedRequest);

      expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('updatePersonalDetails');
      expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
    });

    it('should return expected response', async () => {
      const expectedResponse = { success: true };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve(expectedResponse));
      const emptyRequest :IUpdatePersonalDetailsRequest= { profile:{userId: 'abc123'}};
      const response = await profilesApi.updatePersonalDetails(emptyRequest);

      expect(response).toEqual(expectedResponse);
    });
  });

  describe('updateOccupationDetails', () => {

    it('should call httpsCallable with expected arguments', async () => {
      const expectedRequest :IUpdateOccupationDetailsRequest= { profile:{userId: 'abc123', occupationDetails: { householdIncome:HouseholdIncome.UPPER_INCOME,occupation:'Software Eng'}} };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));

      await profilesApi.updateOccupationDetails(expectedRequest);

      expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('updateOccupationDetails');
      expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
    });

    it('should return expected response', async () => {
      const expectedResponse = { success: true };
      functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve(expectedResponse));
      const emptyRequest :IUpdateOccupationDetailsRequest= { profile:{userId: 'abc123'}};
      const response = await profilesApi.updateOccupationDetails(emptyRequest);

      expect(response).toEqual(expectedResponse);
    });
  });
});
  
  