package com.adnan.aicareer.Controller;

import com.adnan.aicareer.DTOs.SkillGapRequest;
import com.adnan.aicareer.service.SkillGapService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/skill-gap")
@CrossOrigin("https://pathiq-theta.vercel.app")
public class SkillGapController {

     private final SkillGapService skillGapService;

    public SkillGapController(SkillGapService skillGapService)
    {
        this.skillGapService = skillGapService;
    }
    @PostMapping("")
    public String getSkillGap(@RequestBody SkillGapRequest skillGapRequest ){
        return skillGapService.getSkillGap(skillGapRequest.getTargetRole(),skillGapRequest.getCurrentSkills() );
    }
}
