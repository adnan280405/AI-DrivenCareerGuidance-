package com.adnan.aicareer.UtilityClasses;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class JsonExtractor {

    private final ObjectMapper mapper = new ObjectMapper();

    public String extractJson(String text) {

        // Try finding JSON object
        int objectStart = text.indexOf('{');

        // Try finding JSON array
        int arrayStart = text.indexOf('[');

        int start;

        if (objectStart == -1) {
            start = arrayStart;
        } else if (arrayStart == -1) {
            start = objectStart;
        } else {
            start = Math.min(objectStart, arrayStart);
        }

        if (start == -1) {
            return null;
        }

        // Try every possible substring
        for (int end = text.length(); end > start; end--) {

            String candidate = text.substring(start, end);

            try {
                JsonNode jsonNode = mapper.readTree(candidate);

                // Valid JSON found
                return jsonNode.toPrettyString();

            } catch (Exception ignored) {
            }
        }

        return null;
    }
}

