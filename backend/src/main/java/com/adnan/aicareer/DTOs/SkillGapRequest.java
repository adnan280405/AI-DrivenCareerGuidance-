package com.adnan.aicareer.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillGapRequest {
    private String targetRole;
    private String[] currentSkills;
}
