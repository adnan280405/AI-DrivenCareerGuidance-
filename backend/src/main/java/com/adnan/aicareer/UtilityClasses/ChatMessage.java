package com.adnan.aicareer.UtilityClasses;

import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.stereotype.Component;

@Component
public class ChatMessage {

    private  ChatModel chatModel;

    public ChatMessage(ChatModel chatModel) {
        this.chatModel = chatModel;
    }
    public String sendMessage(String message){
        Prompt prompt = new Prompt(
                new UserMessage(message)
        );

        return chatModel.call(prompt)
                .getResult()
                .getOutput()
                .getText();
    }
}
