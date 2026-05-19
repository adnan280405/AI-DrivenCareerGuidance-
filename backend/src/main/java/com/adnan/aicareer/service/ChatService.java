package com.adnan.aicareer.service;

import com.adnan.aicareer.UtilityClasses.ChatMessage;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private ChatMessage chatMessage;

    public ChatService (ChatMessage chatMessage){
        this.chatMessage = chatMessage;
    }

    public String sendMessage(String message){
        return chatMessage.sendMessage(message);
    }
}


