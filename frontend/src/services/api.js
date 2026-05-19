const API_HEADERS = {
  "Content-Type": "application/json"
};

async function handleResponse(response, defaultErrorMessage) {
  if (!response.ok) {
    let message = defaultErrorMessage;
    try {
      const errorBody = await response.json();
      message = errorBody?.message || message;
    } catch {
      message = defaultErrorMessage;
    }
    throw new Error(message);
  }

  return response.json();
}

export async function sendChatMessage(message) {
  console.log(JSON.stringify({ message }));
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
    method: "POST",
    headers: API_HEADERS,
    body: JSON.stringify({ message })
  });
  console.log(response);
  return handleResponse(response, "Unable to get AI response.");
}

export async function analyzeResume(file) {

  const formData = new FormData();

  formData.append("resume", file);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/resume/analyze`,
    {
      method: "POST",
      body: formData
    }
  );

  if (!response.ok) {
    throw new Error("Resume analysis failed.");
  }

  return await response.json();
}

export async function getInterviewQuestions(role) {
  const query = new URLSearchParams({ role });
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/interview?${query.toString()}`, {
    method: "GET"
  });

  return handleResponse(response, "Unable to generate interview questions.");
}

export async function analyzeSkillGap(targetRole, currentSkills) {
  const normalizedSkills = Array.isArray(currentSkills)
    ? currentSkills
    : String(currentSkills)
        .split(',')
        .map((skill) => skill.trim())
        .filter(Boolean);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/skill-gap`, {
    method: "POST",
    headers: API_HEADERS,
    body: JSON.stringify({
      targetRole,
      currentSkills: normalizedSkills
    })
  });

  return handleResponse(response, "Skill gap analysis failed.");
}
