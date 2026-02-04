
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a response from the AI consultant using Gemini 3 Flash.
 * @param userPrompt The user's input message.
 * @returns The AI's response text.
 */
export const getAIConsultantResponse = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are an expert IT and business consultant for Hidden Hire IT Consultancy & Services. 
        Hidden Hire offers a range of premium services: 
        1. Strategic Management: Board advisory and long-term planning.
        2. Growth Optimization: Revenue and sales funnel scaling.
        3. Digital Transformation: AI/ML integration and infrastructure modernization.
        4. Financial Advisory: M&A support and capital raising.
        5. Cybersecurity & Risk: Asset protection and compliance.
        6. Product Innovation: R&D and market-disrupting product launches.
        7. International Expansion: Market entry strategies for EMEA, APAC, and LATAM.
        8. Data & Analytics: Real-time decision dashboards.

        You provide helpful, professional, and concise advice. Your tone should be formal yet encouraging. 
        Always identify yourself as a representative of Hidden Hire IT.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error && error.message.includes("Requested entity was not found")) {
      return "The Hidden Hire consulting service is currently facing a configuration issue. Please check back soon.";
    }
    return "I encountered an error while processing your request. Please try again later.";
  }
};
