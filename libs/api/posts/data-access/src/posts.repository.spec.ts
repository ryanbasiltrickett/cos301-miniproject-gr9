import { IPost } from '@mp/api/posts/util';
import { Timestamp } from 'firebase-admin/firestore';
import { PostsRepository } from './posts.repository';

describe('PostsRepository', () => {
    let postsRepository: PostsRepository;
    let collectionMock: jest.Mock;
    let withConverterMock: jest.Mock;
    let getMock: jest.Mock;
    let addMock: jest.Mock;
    let updateMock: jest.Mock;
    let setMock: jest.Mock;
    let createMock: jest.Mock;
  
    beforeAll(() => {
        collectionMock = jest.fn().mockReturnValue({ doc: jest.fn().mockReturnThis() });
        withConverterMock = jest.fn().mockReturnThis();
        getMock = jest.fn().mockResolvedValue({ data: () => ({}) });
        addMock = jest.fn().mockResolvedValue({ get: jest.fn().mockResolvedValue({ data: jest.fn() }) });
        updateMock = jest.fn().mockResolvedValue(undefined);
        setMock = jest.fn().mockResolvedValue(undefined);
        createMock = jest.fn().mockResolvedValue(undefined);

        jest.mock('firebase-admin', () => {
            const FirestoreMock = {
                collection: collectionMock,
                withConverter: withConverterMock,
                doc: jest.fn().mockReturnThis(),
                get: getMock,
                add: addMock,
                update: updateMock,
                set: setMock,
                create: createMock,
            };

            const FieldValueMock = {
                arrayUnion: jest.fn().mockReturnThis(),
            };

            return {
                firestore: () => FirestoreMock,
                FieldValue: FieldValueMock,
            };
        });
    });

    beforeEach(() => {
        jest.clearAllMocks();
        postsRepository = new PostsRepository();
    });
  
    beforeEach(() => {
        jest.clearAllMocks();
        postsRepository = new PostsRepository();
    });
  
    it('should create a new post', async () => {
        const post: IPost = {
            author: 'user1',
            description: 'Test post',
            mediaUrl: 'https://example.com/image.jpg',
            location: 'New York, NY',
            id: '@user1',
            likes: 0,
            published: Timestamp.now(),
            time: 0
        };
  
        const response = await postsRepository.createPost(post);
        expect(collectionMock).toHaveBeenCalledWith('posts');
        expect(collectionMock).toHaveBeenCalledWith('followers');
        expect(collectionMock().doc).toHaveBeenCalledWith(post.author);
        expect(collectionMock().doc().update).toHaveBeenCalled();
        expect(response).toBeDefined();
    });
  
    it('should add a like to a post', async () => {
        const post: IPost = {
            id: 'postId1',
            likes: 0,
            author: 'user1',
            published: Timestamp.now(),
            time: 0
        };
      
        const user = {
            userId: 'user1',
        };
      
        await postsRepository.addLike(user, post);
        expect(collectionMock).toHaveBeenCalledWith('likes');
        expect(collectionMock).toHaveBeenCalledWith('posts');
        expect(collectionMock().doc).toHaveBeenCalledWith(post.id);
        expect(collectionMock().doc().update).toHaveBeenCalledWith({ likes: post.likes + 1 });
        const expectedLike = { postId: post.id, userId: user.userId, value: 1 };
        expect(collectionMock().doc().create).toHaveBeenCalledWith(expectedLike);  
    });
});