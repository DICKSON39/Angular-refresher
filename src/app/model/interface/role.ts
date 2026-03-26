export interface IRole {
    roleId?: number;
    role?: string;
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    createdAt: any;
    updatedAt: any
}




export interface ApiResponse {
    message: string;
    result: boolean;
    data: any;
}