//for later
//import {} from '@mp/api/newsfeed/util'
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class  NewsfeedService {
    constructor(private readonly commmandBus:CommandBus) {}
}
