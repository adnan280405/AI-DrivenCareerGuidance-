package com.adnan.aicareer.Controller;

import com.adnan.aicareer.DTOs.ChatRequest;
import com.adnan.aicareer.DTOs.ChatResponse;
import com.adnan.aicareer.service.ChatService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin("*")
public class ChatController {

    private final ChatService chatService;
    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("")
    public ChatResponse chat(@RequestBody ChatRequest request) {
        String aiResponse = chatService.sendMessage(request.getMessage());
        return new ChatResponse(aiResponse);
    }

}
