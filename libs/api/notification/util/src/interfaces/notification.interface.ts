interface ITags{
    postId : string;
    userId : string;
}

export interface INotification{
    id : string;
    tags : ITags[];
    requests : string[];
}