import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://matzsolutions:2VVG2QxBAMub9Oaz@cluster0.gyal2.mongodb.net/nest')
    ],
    controllers: [],
    providers: []
}) export class DatabaseModule { }