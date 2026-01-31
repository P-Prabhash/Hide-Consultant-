
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
        systemInstruction: `You are an expert business consultant for Hide Consultant. 
        Hide Consultant offers a range of premium services: 
        1. Strategic Management: Board advisory and long-term planning.
        2. Growth Optimization: Revenue and sales funnel scaling.
        3. Digital Transformation: AI/ML integration and infrastructure modernization.
        4. Financial Advisory: M&A support and capital raising.
        5. Cybersecurity & Risk: Asset protection and compliance.
        6. Product Innovation: R&D and market-disrupting product launches.
        7. International Expansion: Market entry strategies for EMEA, APAC, and LATAM.
        8. Data & Analytics: Real-time decision dashboards.

        You provide helpful, professional, and concise advice. Your tone should be formal yet encouraging. 
        Always be ready to elaborate on these specific services if the user asks or if relevant to their query.`,
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
