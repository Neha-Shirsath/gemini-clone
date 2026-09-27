import { GoogleGenAI } from '@google/genai';

import API_KEY from '../utils/data';

const ai = new GoogleGenAI({
    apiKey: API_KEY,
});

const tools = [
    {
        type: 'google_search',
    },
];

const generationConfig = {
    temperature: 1,
    max_output_tokens: 65536,
    top_p: 0.95,
    thinking_level: 'high',
};

async function main(prompt) {
    const interaction = await ai.interactions.create({
        model: 'models/gemini-3-flash-preview',
        input: prompt,
        tools: tools,
        generation_config: generationConfig,
    });

    console.log(interaction.steps?.at(-1));
}

export default main;