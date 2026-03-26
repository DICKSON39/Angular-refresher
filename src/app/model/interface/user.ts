export interface IUser {
    name: string;
    email:string;
    password:string;
    role:string;
}

export interface ApiResponse {
    message: string;
    result: boolean;
    data: any;
}