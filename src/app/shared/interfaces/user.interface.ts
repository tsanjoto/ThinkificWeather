export interface User {
  _id: string;
  createdAt: string;
  roles: string[];
  isAdmin: boolean;
  apiKey: string;
}
