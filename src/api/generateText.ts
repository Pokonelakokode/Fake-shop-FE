// filepath: f:\sites\fake-shop FE\src\api\generateText.ts
import api from './apiService';

// Function to call the generate-text endpoint with a given prompt
export const generateText = async (prompt: string): Promise<string> => {
  try {
    const response = await api.post('/generate-text', { prompt });
    // Assuming the endpoint returns { response: string }
    return response.data.text;
  } catch (error) {
    console.error('Error generating text:', error);
    throw error;
  }
};
