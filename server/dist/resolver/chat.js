"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const chat_1 = require("../schema/chat");
const chats = [];
const CHAT_CHANNEL = "CHAT_CHANNEL";
let ChatResolver = class ChatResolver {
    getChats() {
        return chats;
    }
    sendMessage(from, message, pubsub) {
        const chat = { id: chats.length, from, message };
        chats.push(chat);
        pubsub.publish(CHAT_CHANNEL, { messageSent: chat });
    }
    messageSent(pubsub) {
        return pubsub.asyncIterator(CHAT_CHANNEL);
    }
};
__decorate([
    type_graphql_1.Query((returns) => [chat_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatResolver.prototype, "getChats", null);
__decorate([
    type_graphql_1.Mutation((of) => chat_1.default),
    __param(0, type_graphql_1.Arg("from")),
    __param(1, type_graphql_1.Arg("message")),
    __param(2, type_graphql_1.PubSub()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, type_graphql_1.PubSubEngine]),
    __metadata("design:returntype", void 0)
], ChatResolver.prototype, "sendMessage", null);
__decorate([
    type_graphql_1.Subscription((of) => chat_1.default, {
        topics: CHAT_CHANNEL,
    }),
    __param(0, type_graphql_1.PubSub()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_1.PubSubEngine]),
    __metadata("design:returntype", void 0)
], ChatResolver.prototype, "messageSent", null);
ChatResolver = __decorate([
    type_graphql_1.Resolver((of) => chat_1.default)
], ChatResolver);
exports.default = ChatResolver;
//# sourceMappingURL=chat.js.map