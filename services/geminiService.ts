
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a response from the AI consultant using Gemini 3 Flash.
 * @param userPrompt The user's input message.
 * @returns The AI's response text.
 */
export const getAIConsultantResponse = async (userPrompt: string) => {
  try {
    // Create a new instance right before the call to ensure the latest API key is used
    // Always use named parameter for apiKey and obtain it from process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are an expert business consultant for Hide Consultant. You provide helpful, professional, and concise advice on business strategy, IT infrastructure, financial planning, and organizational growth. Your tone should be formal yet encouraging.",
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Directly access the .text property from the response
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Graceful error handling for configuration issues
    if (error instanceof Error && error.message.includes("Requested entity was not found")) {
      return "The consulting service is currently facing a configuration issue. Please check back soon.";
    }
    
    return "I encountered an error while processing your request. Please try again later.";
  }
};
