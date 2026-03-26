export interface hotel {
   
    roleId?: number;
    role?: string;
    _id: number;
    name: string;
    title: string;
    location: string;
    parking: boolean;
    category: string;
    description: string;
    price: number;
    noOfRooms: number;
    createdAt: any;
    updatedAt: any
}


export interface HotelResponse {
    message: string;
    result: boolean;
    data: any;
}

