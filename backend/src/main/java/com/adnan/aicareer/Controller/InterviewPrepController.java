package com.adnan.aicareer.Controller;


import com.adnan.aicareer.service.InterviewPrepService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/interview")
@CrossOrigin("*")
public class InterviewPrepController {

    private final InterviewPrepService interviewPrepService;

    public InterviewPrepController(InterviewPrepService interviewPrepService) {
        this.interviewPrepService = interviewPrepService;
    }

    @GetMapping("")
    public String questions(@RequestParam("role") String role){
        try {
            return interviewPrepService.generateQuestions(role);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
