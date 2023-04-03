import { IUpdatePostTimeRequest } from '../requests';

export class UpdatePostTimeCommand {
  constructor(public readonly request: IUpdatePostTimeRequest) {}
}