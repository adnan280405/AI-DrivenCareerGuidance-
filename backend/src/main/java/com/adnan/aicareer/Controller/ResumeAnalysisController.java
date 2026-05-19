package com.adnan.aicareer.Controller;

import com.adnan.aicareer.service.ResumeService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@RestController
@RequestMapping("/api/resume/analyze")
@CrossOrigin("*")
public class ResumeAnalysisController {

    private final ResumeService resumeService;

    public ResumeAnalysisController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("")
    public String sendResumeForAnalysis(
            @RequestParam("resume") MultipartFile resume
    ) throws IOException {
        return resumeService.resumeAnalyze(resume);
    }
}

