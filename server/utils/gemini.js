const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateInsights(financialData) {
  try {
    const prompt = `
You are a senior financial analyst.

Analyze this company's financial summary.

${JSON.stringify(financialData, null, 2)}

You are a senior financial analyst.

Analyze the following financial data:

${JSON.stringify(financialData, null, 2)}

Return exactly 5 insights.

Rules:
- One insight per line.
- Do NOT use headings.
- Do NOT use bullet symbols (*, -, •).
- Do NOT use numbering.
- Maximum 20 words per line.
- Focus only on the most important findings and recommendations.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text;

    return text
      .split("\n")
      .map(line => line.replace(/^[-•*]\s*/, "").trim())
      .filter(line => line.length > 0);

  } catch (err) {
    console.error(err);

    return [
      "Unable to generate AI insights at the moment."
    ];
  }
}

module.exports = generateInsights;