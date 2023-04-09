export interface IUser {
  id: string;
  name: string;
  email: string;
  orders: IOrder[] | null;
}

export interface IOrder {
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
