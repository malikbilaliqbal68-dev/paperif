// Simple test script to check AI Mentor API
const fetch = require('node-fetch');

async function testAIMentor() {
  try {
    console.log('Testing AI Mentor API...');
    
    const response = await fetch('http://localhost:3000/api/ai-mentor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Web Development',
        profile: {
          userType: 'student',
          location: 'Lahore',
          hasLaptop: 'yes',
          budget: '1000-5000'
        }
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ API Response:', data);
    } else {
      console.log('❌ API Error:', response.status, response.statusText);
      const errorText = await response.text();
      console.log('Error details:', errorText);
    }
  } catch (error) {
    console.log('❌ Network Error:', error.message);
    console.log('Make sure the server is running on http://localhost:3000');
  }
}

testAIMentor();