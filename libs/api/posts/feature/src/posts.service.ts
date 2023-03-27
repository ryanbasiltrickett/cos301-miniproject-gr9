import {
    ICommentPostRequest,
    ILikePostRequest,
    IAddPostRequest,
    IDeletePostRequest,
    ICommentPostResponse,
    ILikePostResponse,
    IAddPostResponse,
    IDeletePostResponse,
    AddPostCommand,
    DeletePostCommand,
    LikePostCommand,
    CommentPostCommand
} from '@mp/api/posts/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class PostService {
    constructor(private readonly commandBus: CommandBus) {}

    async addPost(
        request: IAddPostRequest
      ): Promise<IAddPostResponse> {
        return await this.commandBus.execute<
          AddPostCommand,
          IAddPostResponse
        >(new AddPostCommand(request));
    }

    async likePost(
        request: ILikePostRequest
        ): Promise<ILikePostResponse> {
        return await this.commandBus.execute<
            LikePostCommand,
            ILikePostResponse
        >(new LikePostCommand(request));
    }

    async commentPost(
        request: ICommentPostRequest
      ): Promise<ICommentPostResponse> {
        return await this.commandBus.execute<
          CommentPostCommand,
          ICommentPostResponse
        >(new CommentPostCommand(request));
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
