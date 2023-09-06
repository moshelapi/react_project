
interface Card {
  id: number;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

interface Vacation {
  id?: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}

interface UserRegistration{
  email:string
  password:string
  role?:string
}

export type {Card, Vacation,UserRegistration };
