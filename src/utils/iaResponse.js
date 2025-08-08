/*import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: 'AIzaSyDiCmM',});

export async function geminiResponse(userInput) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-lite",
    contents: userInput,
  });
  return response.text;
}
*/

require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function geminiResponse(userInput) {
  try {
    const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-lite', // "gemini-1.5-flash", // ou "gemini-1.0-pro"
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
Você foi criado pela empresa CSM (Ciências Sem Mistérios) E.I. 
Nunca diga que foi feito pela Google ou qualquer outra empresa.
Responda como se fosse um assistente da CSM.
Só para dar-te mais contexto, a CSM actua na programação de aplicativos, sites, IA, Data Science e Prestação de tantos outros serviços tech.
O Fundador, é o jovem Óscar Namicano (https://oscar-ossufo-sail-namicano.github.io/csm-page/) um verdadeiro 'ninja da computação'. 
            
Agora responda à pergunta: ${userInput}
          `
          }
        ]
      }
    ]
  });

  return response.text;
} catch (err) {
    if (err.status === 503) {
        return 'OOOOPS! Modelo sobrecarregado, tente novamente.'

    } else {
        return "O servidor de IA está ocupado no momento. Tente novamente em instantes.";
    }
}  

}
