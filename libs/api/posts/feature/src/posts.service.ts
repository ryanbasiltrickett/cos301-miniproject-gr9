import {
    ICommentRequest,
    ILikeRequest,
    IPostRequest,
    IDeletePostRequest,
    ICommentPostResponse,
    ILikePostResponse,
    IAddPostResponse,
    IDeletePostResponse
} from '@mp/api/posts/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class PostService {
    constructor(private readonly commandBus: CommandBus) {}

    async addPost(
        request: IPostRequest
      ): Promise<IAddPostResponse> {
        return await this.commandBus.execute<
          AddPostCommand,
          IAddPostResponse
        >(new AddPostCommand(request));
    }

    async likePost(
        request: ILikeRequest
        ): Promise<ILikePostResponse> {
        return await this.commandBus.execute<
            LikePostCommand,
            ILikePostResponse
        >(new LikePostCommand(request));
    }

    async commentPost(
        request: ICommentRequest
      ): Promise<ICommentPostResponse> {
        return await this.commandBus.execute<
          AddPostCommand,
          ICommentPostResponse
        >(new AddPostCommand(request));
    }

    async deletePost(
        request: IDeletePostRequest
      ): Promise<IDeletePostResponse> {
        return await this.commandBus.execute<
          DeletePostCommand,
          IDeletePostResponse
        >(new DeletePostCommand(request));
    }
}
