
import { IUser } from "../models/User/User.d.ts"; 

declare module "express-serve-static-core" {
  interface Request {
    user?: IUser; 
  }
}
