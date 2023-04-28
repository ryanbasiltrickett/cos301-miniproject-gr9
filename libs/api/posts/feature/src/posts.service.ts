import {
  ICommentPostRequest,
  ILikePostRequest,
  ICreatePostRequest as IAddPostRequest,
  IDeletePostRequest,
  ICommentPostResponse,
  ILikePostResponse,
  IAddPostResponse,
  IDeletePostResponse,
  CreatePostCommand,
  DeletePostCommand,
  LikePostCommand,
  CommentPostCommand,
  IUpdatePostTimeRequest,
  IUpdatePostTimeResponse,
  UpdatePostTimeCommand,
  IAddCommentRequest,
  AddCommentCommand,
  IAddCommentResponse,
  IDeleteCommentRequest,
  IDeleteCommentResponse,
  DeleteCommentCommand,
} from '@mp/api/posts/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class PostService {
  constructor(private readonly commandBus: CommandBus) {}

  async createPost(request: IAddPostRequest): Promise<IAddPostResponse> {
    return await this.commandBus.execute<CreatePostCommand, IAddPostResponse>(
      new CreatePostCommand(request)
    );
  }

  async likePost(request: ILikePostRequest): Promise<ILikePostResponse> {
    return await this.commandBus.execute<LikePostCommand, ILikePostResponse>(
      new LikePostCommand(request)
    );
  }

  async updatePostTime(
    request: IUpdatePostTimeRequest
  ): Promise<IUpdatePostTimeResponse> {
    return await this.commandBus.execute<
      UpdatePostTimeCommand,
      IUpdatePostTimeResponse
    >(new UpdatePostTimeCommand(request));
  }

  async updateComments(
    request: ICommentPostRequest
  ): Promise<ICommentPostResponse> {
    return await this.commandBus.execute<
      CommentPostCommand,
      ICommentPostResponse
    >(new CommentPostCommand(request));
  }

  async deletePost(request: IDeletePostRequest): Promise<IDeletePostResponse> {
    return await this.commandBus.execute<
      DeletePostCommand,
      IDeletePostResponse
    >(new DeletePostCommand(request));
  }

  async addComment(request: IAddCommentRequest): Promise<IAddCommentResponse> {
    return await this.commandBus.execute<
      AddCommentCommand,
      IAddCommentResponse
    >(new AddCommentCommand(request));
  }

  async deleteComment(request: IDeleteCommentRequest): Promise<IDeleteCommentResponse> {
    return await this.commandBus.execute<
      DeleteCommentCommand,
      IDeleteCommentResponse
      >(new DeleteCommentCommand(request));
  }
}
