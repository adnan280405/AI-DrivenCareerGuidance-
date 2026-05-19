package com.adnan.aicareer.service;

import com.adnan.aicareer.UtilityClasses.ChatMessage;
import com.adnan.aicareer.UtilityClasses.JsonExtractor;
import com.adnan.aicareer.UtilityClasses.Prompts;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Service;

@Service
public class InterviewPrepService {

    private ChatMessage chatMessage;
    private JsonExtractor jsonExtractor;
    private Prompts prompt;

    public InterviewPrepService(ChatMessage chatMessage, JsonExtractor jsonExtractor,  Prompts prompt) {
        this.chatMessage = chatMessage;
        this.jsonExtractor = jsonExtractor;
        this.prompt = prompt;
    }

    public String generateQuestions(String role) throws JsonProcessingException {
        String req=prompt.promptForInterview.formatted(role);

        String aiResponse= chatMessage.sendMessage(req);

        System.out.println(aiResponse);

        // Remove markdown if AI still returns it
        aiResponse = jsonExtractor.extractJson(aiResponse);

        return aiResponse;
    }
}
