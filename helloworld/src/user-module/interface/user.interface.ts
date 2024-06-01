import { ObjectId, Types } from "mongoose";

export interface SignUp {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly role: string;
  readonly dob: Date;
  readonly address: string;
  readonly description: string;
  readonly profile: string;
}


export interface login {
  readonly userEmail: string,
  readonly password: string
}

export type signature = string

export interface signatureData {
  _id: Types.ObjectId,
  email: string,
  role: string,
}

export interface loginReturnType {
  accessToken: signature
}

export interface getUserReturnType {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: string,
  dob: string,
  address: string,
  description: string,
  profile: string,
}