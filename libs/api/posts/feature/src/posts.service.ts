import {
    IComment,
    ILike,
    IPost,
    IDeletePost
} from '@mp/api/posts/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class PostService {
    constructor(private readonly commandBus: CommandBus) {}

    async addPost(
        request: IPost
      ): Promise<IAddPostResponse> {
        return await this.commandBus.execute<
          AddPostCommand,
          IAddPostResponse
        >(new AddPostCommand(request));
    }

    async likePost(
        request: ILike
        ): Promise<ILikePostResponse> {
        return await this.commandBus.execute<
            LikePostCommand,
            ILikePostResponse
        >(new LikePostCommand(request));
    }

    async commentPost(
        request: IComment
      ): Promise<IAddPostResponse> {
        return await this.commandBus.execute<
          AddPostCommand,
          IAddPostResponse
        >(new AddPostCommand(request));
    }

    async deletePost(
        request: IDeletePost
      ): Promise<IAddPostResponse> {
        return await this.commandBus.execute<
          AddPostCommand,
          IAddPostResponse
        >(new AddPostCommand(request));
    }
}
