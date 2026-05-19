package com.adnan.aicareer.service;

import com.adnan.aicareer.UtilityClasses.ChatMessage;
import com.adnan.aicareer.UtilityClasses.JsonExtractor;
import com.adnan.aicareer.UtilityClasses.Prompts;
import org.springframework.stereotype.Service;

@Service
public class SkillGapService {

     private ChatMessage chatMessage;
     private JsonExtractor jsonExtractor;
     private Prompts prompts;


     public SkillGapService(ChatMessage chatMessage, JsonExtractor jsonExtractor,  Prompts prompts) {
            this.chatMessage = chatMessage;
            this.jsonExtractor = jsonExtractor;
            this.prompts = prompts;
     }
    public String getSkillGap(String targetRole, String[] currentSkills){
        String prompt= prompts.promptForSkillGap.formatted(targetRole, String.join(", ", currentSkills));
        String aiResponse= chatMessage.sendMessage(prompt);
        aiResponse = jsonExtractor.extractJson(aiResponse);

        System.out.println(aiResponse);
        return aiResponse;

    }


}
