const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeLead(leadData) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `
    Act as a senior sales strategist for a premium web agency. 
    Analyze this lead and return ONLY a JSON object:
    Lead: ${JSON.stringify(leadData)}
    
    Return format:
    {
      "score": (0-100 based on budget and intent),
      "summary": "1-sentence summary of client needs",
      "proposal_brief": "Short pitch strategy"
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text());
}

module.exports = { analyzeLead };
