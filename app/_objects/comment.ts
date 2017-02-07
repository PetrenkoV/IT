import {created_by} from './created_by'
export class Comment {
    constructor(
        public id: number,
        public product : string,
        public created_by: {},
        public rate: number,
        public text: string,
        public created_at: string
    )
    {}
}
