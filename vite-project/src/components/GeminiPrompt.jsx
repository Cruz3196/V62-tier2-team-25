import { useState } from "react";
import { Link } from "react-router-dom";
import GenerateIcon from "../assets/icon-generate.png";
import { askGemini } from "./../api/geminiAI";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "./../context/UserContext";

function Gemini() {
  const {
    careerGoal,
    setCareerGoal,
    skillLevel,
    setSkillLevel,
    background,
    setBackground,
    timeCommitment,
    setTimeCommitment,
    response,
    setResponse,
    loading,
    setLoading,
  } = useAppContext();

  const prompt = `
TASK:
Create a personalized learning path for the learner described below.
The goal is to help them progress from their current skill level toward their career goal.

CONTEXT:
Career Goal: ${careerGoal}
Current Skill Level: ${skillLevel}
Background: ${background}
Time Commitment: ${timeCommitment}

CONSTRAINTS:
- Create a realistic learning path based on the learner's available time.
- Build the curriculum progressively, from foundational concepts to more advanced concepts.
- Avoid teaching skills the learner already demonstrates unless they are important prerequisites.
- Break the learning path into clearly defined stages.
- Each stage should include specific topics to learn.
- Include practical projects or exercises.
- Estimate how many hours each stage will take.
- Prioritize skills that are directly relevant to the learner's career goal.
- Do not overwhelm the learner with too many topics at once.
- Explain why each stage is relevant to the career goal.
`;

  async function handleSubmit() {
    setLoading(true);

    try {
      const answer = await askGemini(prompt);
      setResponse(answer);
    } catch (error) {
      console.error(error);
      setResponse("Connection error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center text-left justify-center">
      <div className="container lg:w-305 mx-auto px-4 py-8 mt-10 mb-12">
        <Link to="/path-results">
          <div
            className=" py-4 mt-8 mx-auto rounded-2xl bg-black text-lg text-center text-white"
            onClick={handleSubmit}
          >
            <div className="flex items-center justify-center gap-2">
              <img src={GenerateIcon} alt="icon" />
              Generate my path
            </div>
          </div>
        </Link>
      </div>
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
}

export default Gemini;
