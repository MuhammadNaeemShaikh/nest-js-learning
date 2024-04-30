import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { LoggerMiddleware } from "../core/middleware";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .exclude(
            // { path: 'users', method: RequestMethod.GET },
        )
            .forRoutes(UserController);
    }
};