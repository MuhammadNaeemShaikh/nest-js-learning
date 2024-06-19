import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomDetailsService {
    private roomDetails: Record<string, any> = {};

    joinRoom(userDetails: { userId: string; fullName: string; imageUrl: string; roomId: string; socketId: string }) {
        const { userId, fullName, imageUrl, roomId } = userDetails;
        console.log(userDetails, '-----------------------');
        if (!this.roomDetails[roomId]) {
            this.roomDetails[roomId] = {
                joinUsers: [{ userId, fullName, imageUrl, roomId, socketId: userDetails.socketId }],
                chat: [],
            };
        } else {
            this.roomDetails[roomId].joinUsers.push({ userId, fullName, imageUrl, roomId, socketId: userDetails.socketId });
        }
    }

    addUserToChat(roomId: string, message: any) {
        if (!this.roomDetails[roomId]?.chat) {
            this.roomDetails[roomId].chat = [];
        }
        this.roomDetails[roomId].chat.push(message);
    }

    getRoomDetails(roomId: string) {
        return this.roomDetails[roomId];
    }
}
