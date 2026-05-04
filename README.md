<h1>Weather App 🌤️ - Aegis Edition (Day 12)</h1>

> **Project Milestone :** Day 12 of development
> This sleek and responsive weather application delivers real time weather information and personalized activity recommendations for any location across the globe.Built with factorized JavaScript and modern CSS, this version represents the culmination of Day 12's focus on logic optimization and security

<h2>✨ Features</h2>

🌍 **Real-time Weather Data** - Current conditions, temperature, humidity and wind speed

🧠 **Aegis Suggestion Engine** - Personalized clothing and activity recommendations based on specific weather tiers

🔍 **Smart Search** - Find weather by city name with both click and "Enter" key support

🎭 **Adaptive Visuals** - Dynamic weather icons and image fallbacks with smooth UI transitions

🛡️ **Security Focused** - Environment configuration via `config.js` to protect sensitive API credentials

<h2>🛠️ Technologies Used</h2>

- **HTML5** - Semantic markup for a structured data display
- **CSS3** - Flexbox, glassmorphism effects and responsive gradients
- **JavaScript (ES6+)** - Async/await, factorized functions and DOM manipulation
- **Visual Crossing API** - Reliable and accurate meteorological data fetching
<h2>📁 Project Structure</h2>
<pre>
  Weather-App/
├── index.html          # Main application file
├── weather.css         # Comprehensive styling
├── weather.js          # Core functionality
├── .gitignore          # Prevents sensitive files from being pushed
├── LICENSE             # MIT LICENSE
└── README.md           # Project documentation
</pre>

<h2>🔌 API and Security Integration</h2>

This application uses a factorized architecture to handle:
- **Credential Masking**: API keys are stored in a `CONFIG` object to prevent exposure
- **Heuristic Logic**: The Aegis Engine uses temperature and condition branching to generate user specific advice
- **Centralized Rendering**: A dedicated UI update sequence for high-performance DOM manipulation

<h2>🚀 Getting Started</h2>

<h3>Prerequisites</h3>

- A modern web browser<br>
- Internet connection for API calls
- An API key from Visual Crossing Weather

<h2>Installation</h2>
1. Clone the repository:
<pre>git clone https://github.com/Basliel-Sisay/weather-App.git
</pre>

2. Navigate to the project directory:
<pre>cd weather-app</pre>

3. Configure your Credentials
   
Create a config.js file in the root directory and add your API key:
```text
const CONFIG = {
    API_KEY: 'YOUR_API_KEY_HERE',
    URL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
};
```
4. Secure your Keys:

Ensure your .gitignore includes config.js

5. Open index.html in your preferred browser

<h2>💡 How to Use</h2>

Enter a city name in the search input field<br>

Click the search button or press Enter to fetch weather data

View the Aegis Intelligence readout:

🌡️ Temperature & "Feels Like"

💧 Humidity & Wind Speed

🧠 Aegis Recommendation: Specific advice on what to wear and what to do based on the local climate

☁️ Weather conditions with appropriate icons

<h2>🎯 Key Features</h2>

⚡ Instant Search - Quick weather lookup with keyboard support<br>

🎭 Visual Feedback - Interactive hover states and smooth transitions<br>

🌈 Dynamic Icons - Weather-appropriate visual representations<br>

📊 Clean Interface - Two-panel layout for optimal information display<br>

🔄 Live Updates - Real-time data refresh capabilities<br>

<h2>🌐 Browser Compatibility</h2>

✅ Fully compatible with all modern web browsers:<br>

Google Chrome<br>

Mozilla Firefox<br>

Apple Safari<br>

Microsoft Edge<br>

<h2>📝 License</h2>
This project is licensed under the MIT License - see the LICENSE file for details.

<h2>👨‍💻 Author</h2>

<strong>Basliel Sisay</strong> <br>

📧 Email: <a href="mailto:basliel.ugr-3563-16@aau.edu.et?subject=Weather%20App%20Feedback">Send Feedback</a><br>

🔗 GitHub: [Basliel-Sisay](https://github.com/Basliel-Sisay)
