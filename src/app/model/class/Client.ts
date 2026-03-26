export class IUser {
    _id:number;
    name: string;
    email:string;
    password:string;
    role:string;

    constructor () {
        this._id= 0;
        this.name='';
        this.email='';
        this.password='';
        this.role=''
    }
}