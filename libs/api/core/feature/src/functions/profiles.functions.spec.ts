import { updateAccountDetails }  from './profiles.functions';
import { IUpdateAccountDetailsRequest, IUpdateAccountDetailsResponse } from '@mp/api/profiles/util';
import * as admin from 'firebase-admin';
import * as firebaseFunctionsTest from 'firebase-functions-test';
import { ProfilesService } from '@mp/api/profiles/feature';


// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCN6RzYvnaCMJO3QEd8g43UxLp6-SV2ZKU",
    authDomain: "cos301-miniproject-gr9-d-46ded.firebaseapp.com",
    projectId: "cos301-miniproject-gr9-d-46ded",
    storageBucket: "cos301-miniproject-gr9-d-46ded.appspot.com",
    messagingSenderId: "186165950071",
    appId: "1:186165950071:web:48b4c10bba70ec99c6f872",
    measurementId: "G-PWY8191PD7"
  };

  admin.initializeApp(firebaseConfig);


  // Firebase test function library
  const test = firebaseFunctionsTest();


 describe('updateAccountDetails', () =>{
    it('should call ProfilesService.updateAccountDetails and return response', async () => {

        // mockRequest object
        const mockRequest: IUpdateAccountDetailsRequest = {
            profile: {
                userId: 'mockUserId',
                accountDetails: {
                  displayName: 'John Doe',
                  email: 'john.doe@example.com'
                },
            status: null,
            created: null,
            bio: null,
            private: undefined,
            timeLeft: 0
           }
        }; 

        // MockResponse Object
        const mockResponse: Promise<IUpdateAccountDetailsResponse> = Promise.resolve({
            profile: {
                userId: 'mockUserId',
                accountDetails: {
                  displayName: 'John Doe',
                  email: 'john.doe@example.com'
                },
            status: null,
            created: null,
            bio: null,
            private: undefined,
            timeLeft: 0
           }
          }); 

        //create a spy function to spy on the behaviour of updatedAccountDetails which is being called indirectly
        const updateAccountDetailsSpy = jest.spyOn(
            ProfilesService.prototype,
            'updateAccountDetails'
        );

        // function to return mock response
        updateAccountDetailsSpy.mockReturnValue(Promise.resolve(mockResponse));

        // Call the function with the mock request
        const result = await test.wrap(updateAccountDetails)(mockRequest);

        // Expect that the ProfilesService.updateAccountDetails method was called with the mock request
        expect(updateAccountDetailsSpy).toHaveBeenCalledWith(mockRequest);

        // Expect that the function returned the mock response
        expect(result).toEqual(mockResponse);

        // clean up 
        updateAccountDetailsSpy.mockRestore();
    });
 });

 // Cleanup after all the tests have finished
 afterAll(() =>{
    test.Cleanup();
 });