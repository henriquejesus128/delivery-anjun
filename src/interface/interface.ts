export interface IUser {
  id: string;
  name: string;
  email: string;
  orders: IOrderUser[];
}

export interface IFindByEmail {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IOrderUser {
  id: string;
  status: string;
  recipientId: string;
  senderId: string;
}

export interface IProduct {
  id: string;
  name: string;
  orderId: string | null;
}

export interface ILogin {
  token: string;
}

export interface ICustomer {
  id: string;
  name: string;
  address: IAddress;
}

export interface IAddress {
  id: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IOrder {
  id: string;
  status: string;
  recipientId: string;
  senderId: string;
  products: IProductOrder[];
}

export interface IProductOrder {
  id: string;
  name: string;
}
