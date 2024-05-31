import { Injectable } from "@nestjs/common";
import { signature, signatureData } from "./interface/user.interface";
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService {
    constructor() { }

    public async signature({ _id, email, role }: signatureData): Promise<signature> {


        const accessToken = await jwt.sign({ _id, email, role }, process.env.JWT_SEC || 'test', { expiresIn: '3d' });
        return accessToken

    }
}