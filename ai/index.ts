const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getPromptResponse = async (text: string): Promise<string> => {
  try {
    const result = await model.generateContent(text);
    const response: string = result.response.text();
    return response;
  } catch (error: any) {
    console.log(error.message);
    return "SomeWent Worng : (";
  }
};

export { getPromptResponse };
