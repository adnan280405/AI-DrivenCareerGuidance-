package com.adnan.aicareer.service;
import com.adnan.aicareer.UtilityClasses.ChatMessage;
import com.adnan.aicareer.UtilityClasses.JsonExtractor;
import com.adnan.aicareer.UtilityClasses.PdfExtractor;
import com.adnan.aicareer.UtilityClasses.Prompts;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@Service
public class ResumeService {

    private ChatMessage chatMessage;
    private JsonExtractor jsonExtractor;
    private PdfExtractor pdfExtractor;
    private Prompts prompt;

    public ResumeService(ChatMessage chatMessage,  JsonExtractor jsonExtractor, PdfExtractor pdfExtractor,  Prompts prompt) {
        this.chatMessage = chatMessage;
        this.jsonExtractor = jsonExtractor;
        this.pdfExtractor = pdfExtractor;
        this.prompt = prompt;
    }

    public String resumeAnalyze(MultipartFile resume) throws IOException {

        String contentType = resume.getContentType();

        String resumeText = "";

        // PDF
        if(contentType.equals("application/pdf")) {
            resumeText = pdfExtractor.extractPdfText(resume);
        }

        // TXT
        else{
            resumeText = new String(resume.getBytes());
        }
        // Prompt
        String req=prompt.promptForResume.formatted(resumeText);

        // Call Spring AI
        String aiResponse = chatMessage.sendMessage(req);

        // Debugging
        System.out.println(aiResponse);

        // Remove markdown if AI still returns it
        aiResponse = jsonExtractor.extractJson(aiResponse);

       return aiResponse;
    }
}
