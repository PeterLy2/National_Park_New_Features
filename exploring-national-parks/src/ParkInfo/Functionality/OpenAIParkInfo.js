export const OpenAIParkInfo = async (parkCode, page = 1) => {
    try {
      if (!parkCode) {
        throw new Error('parkCode is required');
      }
  
      const cacheKey = `OpenAIParkInfo-${parkCode}-${page}`;
      const cachedData = localStorage.getItem(cacheKey);
  
      if (cachedData) {
        return JSON.parse(cachedData);
      }
  
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
      //Replace The API Key with your own. This stuff is $$$
      const apiKey = 'YOUR_API_KEY';
  
      const prompt = `Provide website user detailed information about the national park with code "${parkCode}". Include attractions, history, and any other interesting facts.`;
      
      //API cal to OpenAI
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are an assistant that provides detailed information about national parks.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });
  
      const json = await response.json();
  
      if (json.error) {
        throw new Error(`OpenAI API error: ${json.error.message}`);
      }
  
      // Log the response for debugging
      console.log('OpenAI API response:', json);
  
      // Check if choices array and message content are available
      if (!json.choices || !json.choices[0] || !json.choices[0].message || !json.choices[0].message.content) {
        throw new Error('Unexpected response structure from OpenAI API');
      }
  
      const parkInfo = json.choices[0].message.content.trim();
  
      // Cache the response in localStorage
      localStorage.setItem(cacheKey, JSON.stringify(parkInfo));
  
      return parkInfo;
    } catch (error) {
      console.error('Error fetching from OpenAI API:', error);
      throw error;
    }
  };
  