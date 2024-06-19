// src/gateways/chat.gateway.ts
import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { RoomDetailsService } from './roomdetails.service';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection {
    @WebSocketServer()
    server;

    private logger: Logger = new Logger('ChatGateway');

    constructor(private roomDetailsService: RoomDetailsService) { }

    handleConnection(@ConnectedSocket() client: any) {
        this.logger.debug(`Client connected: ${client.id}`);
    }

    handleDisconnect(@ConnectedSocket() client: any) {
        this.logger.debug(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('join-room')
    handleJoinRoom(@ConnectedSocket() client: any, { room_id, user_id, fullName, imageUrl }: { room_id: string; user_id: string; fullName: string; imageUrl: string }) {
        room_id = '1'
        user_id = '1'
        fullName = 'test'
        imageUrl = 'test.png'
        this.roomDetailsService.joinRoom({ userId: user_id, fullName, imageUrl: imageUrl, roomId: room_id, socketId: client.id });
        client.join(room_id);
        this.server.to(room_id).emit('user-connected', "userconnected");
        // this.server.to(room_id).emit('user-connected', { room_id, room_details: this.roomDetailsService.getRoomDetails(room_id) });
    }

    @SubscribeMessage('send-message')
    handleMessage(@ConnectedSocket() client: any, { room_id, user_id, full_name, imageUrl, message, messageType, createdAt, updatedAt }: { room_id: string; user_id: string; full_name: string; imageUrl: string; message: any; messageType: string; createdAt: string; updatedAt: string }) {
        const recentMessage = {
            user_id,
            full_name,
            imageUrl,
            message,
            messageType,
            createdAt,
            updatedAt,
        };
        this.roomDetailsService.addUserToChat(room_id, recentMessage);
        this.server.to(room_id).emit('received-message', { room_id, recent_message: recentMessage, room_details: this.roomDetailsService.getRoomDetails(room_id) });
    }
}
