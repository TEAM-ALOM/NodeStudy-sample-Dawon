import { UpdateWriteOpResult, DeleteResult } from "mongoose";
import { UserModel } from "../schema/user.ts";
import { UserType } from "../types/user.type";

export class UserService {
  async post(data: { id: string; password: string }): Promise<UserType> {
    try {
      const user = await UserModel.create(data);
      return user as UserType;
    } 
    catch (err) {
      throw err;
    }
  }
  async get(userId:String):Promise<UserType>{
    const user=await UserModel.findOne({id: userId});
    return user as UserType;
  }
  async patch(userId:String,data:String):Promise<UpdateWriteOpResult>{
    try{
      const user=await UserModel.updateOne({id:userId},data);
      return user;
    }
    catch(err){
      throw err;
    }
  }
  async delete(userId:String):Promise<DeleteResult>{
    try{
      const user=await UserModel.deleteOne({id:userId});
      return user;
    }
    catch(err){
      throw err;
    }
  }
}


