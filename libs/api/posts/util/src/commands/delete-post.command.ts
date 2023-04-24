import { IDeletePostRequest } from '../requests';

export class DeletePostCommand {
  constructor(public readonly request: IDeletePostRequest) {}
}