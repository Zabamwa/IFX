export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address:IAddress,
    phone: string;
    website: string;
    company: ICompany;
}

interface IAddress  {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: number;
        lng: number;
    }
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string
}
