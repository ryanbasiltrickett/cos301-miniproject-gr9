import { TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';
import { Functions } from '@angular/fire/functions';
import { docData } from '@angular/fire/firestore';
import { NotificationApi } from './notification.api';

import{
    ITags,
    INotification,
    INotifyEventRequest,
    INotifyFriendActivityRequest,
    INotifyLowTimeRequest,
    INotifyRecievedTimeRequest,
    INotifySavingFriendRequest,
    INotifyEventResponse,
    INotifyFriendActivityResponse,
    INotifyLowTimeResponse,
    INotifyRecievedTimeResponse,
    INotifySavingFriendResponse
    } from '@mp/api/notification/util';


    describe('NotificationApi', () => {
        let notificationApi: NotificationApi;
        let firestoreSpy: any;
        let functionsSpy: any;
        let docDataSpy: jasmine.Spy;
      
        beforeEach(() => {
          firestoreSpy = jasmine.createSpyObj('Firestore', ['doc']);
          functionsSpy = jasmine.createSpyObj('Functions', ['httpsCallable']);
      
          docDataSpy = spyOn<any>(docData, 'docData').and.returnValue('expected value');
      
          notificationApi = new NotificationApi(firestoreSpy, functionsSpy);
        });
    //configure Testbed and set the dependecies needed
    TestBed.configureTestingModule({
        providers: [
          NotificationApi,
          { provide: Firestore, useValue: firestoreSpy },
          { provide: Functions, useValue: functionsSpy }
        ]
      });
    
      //instantiate profileApi and inject mock objects
      let service: NotificationApi;
    
      beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            NotificationApi,
            { provide: Firestore, useValue: firestoreSpy },
            { provide: Functions, useValue: functionsSpy }
          ]
        });
        service = TestBed.inject(NotificationApi);
      });
    
    
      // test for notifyEvent
    
      describe('notifyEvent', () => {
        
        it('should call httpsCallable with expected arguments', async () => {
            let expectedRequest:INotifyEventRequest={notification:{id:'1234',tags: [{postId:'432',userId:'1235'}],requests:['follow me']}};
          functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));
    
          await notificationApi.notifyEvent(expectedRequest);
    
          expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('notifyEvent');
          expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
        });
      });
    
      // test the notifyFriendActivity 
      describe('notifyFriendActivity', () => {
    
        it('should call httpsCallable with expected arguments', async () => {
          const expectedRequest :INotifyFriendActivityRequest= { notification:{id:'1234',tags: [{postId:'432',userId:'1235'}],requests:['follow me']} };
          functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));
    
          await notificationApi.notifyFriendActivity(expectedRequest);
    
          expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('notifyFriendActivity');
          expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
        });
      });
    
    
      // test the notifyLowTime 
      describe('notifyLowTime', () => {
        it('should call httpsCallable with expected arguments', async () => {
          const expectedRequest :INotifyLowTimeRequest= { notification:{id:'1234',tags: [{postId:'432',userId:'1235'}],requests:['follow me']} };
          functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));
    
          await notificationApi.notifyLowTime(expectedRequest);
    
          expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('notifyLowTime');
          expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
        });
      });
    
    
      //test the notifySavingFriend function
      describe('notifySavingFriend', () => {
    
        it('should call httpsCallable with expected arguments', async () => {
          const expectedRequest :INotifySavingFriendRequest= { notification:{id:'1234',tags: [{postId:'432',userId:'1235'}],requests:['follow me']} };
          functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));
    
          await notificationApi.notifySavingFriend(expectedRequest);
    
          expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('notifySavingFriend');
          expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
        });
      });
    
      //test notifyRecievedTime
      describe('notifyRecievedTime', () => {
    
        it('should call httpsCallable with expected arguments', async () => {
          const expectedRequest :INotifySavingFriendRequest= { notification:{id:'1234',tags: [{postId:'432',userId:'1235'}],requests:['follow me']} };
          functionsSpy.httpsCallable.and.returnValue(() => Promise.resolve({}));

          await notificationApi.notifyRecievedTime(expectedRequest);
          
          expect(functionsSpy.httpsCallable).toHaveBeenCalledWith('notifyRecievedTime');
          expect(functionsSpy.httpsCallable().calls.mostRecent().args[0]).toEqual(expectedRequest);
        });
       
      });
    });