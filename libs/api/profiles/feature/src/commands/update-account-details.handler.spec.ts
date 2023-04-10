import { TestBed } from '@angular/core/testing';
import { IUpdateAccountDetailsResponse, UpdateAccountDetailsCommand } from '@mp/api/profiles/util';
import { UpdateAccountDetailsHandler } from './update-account-details.handler';
import { Profile } from '../models';
import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { EventPublisher } from '@nestjs/cqrs';
import { jasmine } from 'jasmine';

describe('UpdateAccountDetailsHandler', () => {
  let handler: UpdateAccountDetailsHandler;
  let repositoryMock: jasmine.SpyObj<ProfilesRepository>;
  let publisherMock: jasmine.SpyObj<EventPublisher>;

  beforeEach(() => {
    repositoryMock = jasmine.createSpyObj<ProfilesRepository>('ProfileRepository', ['findOne']);
    publisherMock = jasmine.createSpyObj<EventPublisher>('publisher', ['mergeObjectContext']);

    TestBed.configureTestingModule({
      providers: [
        { provide: ProfilesRepository, useValue: repositoryMock },
        { provide: EventPublisher, useValue: publisherMock },
        UpdateAccountDetailsHandler,
      ],
    });

    handler = TestBed.inject(UpdateAccountDetailsHandler);
  });

  it('should throw an error if profile is not found', async () => {
    const command = new UpdateAccountDetailsCommand({
      profile: { userId: '123', accountDetails: { displayName: 'John', email: 'john123@gmail.comn' } },
    });

    repositoryMock.findOne.and.returnValue(Promise.resolve(undefined));

    await expectAsync(handler.execute(command)).toBeRejectedWithError('Profile not found');
  });

  it('should throw an error if profile account details are not found', async () => {
    const command = new UpdateAccountDetailsCommand({
      profile: { userId: '123', accountDetails: undefined },
    });

    repositoryMock.findOne.and.returnValue(
      Promise.resolve({
        data: () => ({}),
      })
    );

    await expectAsync(handler.execute(command)).toBeRejectedWithError('Profile account details not found');
  });

  it('should update profile account details and return a response', async () => {
    const command = new UpdateAccountDetailsCommand({
      profile: { userId: '123', accountDetails: { displayName: 'John', email: 'john123@gmail.comn' } },
    });

    const profileData = {
      userId: '123',
      accountDetails: { displayName: 'John', email: 'john123@gmail.comn' },
    };

    const profileMock = jasmine.createSpyObj<Profile>('Profile', ['updateAccountDetails', 'commit']);
    publisherMock.mergeObjectContext.and.returnValue(profileMock);
    repositoryMock.findOne.and.returnValue(
      Promise.resolve({
        data: () => profileData,
      })
    );

    const response = await handler.execute(command);

    expect(publisherMock.mergeObjectContext).toHaveBeenCalledWith(Profile.fromData(profileData));
    expect(profileMock.updateAccountDetails).toHaveBeenCalledWith(command.request.profile.accountDetails);
    expect(profileMock.commit).toHaveBeenCalled();
    const expectedResponse: IUpdateAccountDetailsResponse = { profile: profileMock };
    expect(response).toEqual(expectedResponse);
  });
});
