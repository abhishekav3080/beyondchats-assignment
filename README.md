Description:

This project is a UI/UX implementation for setting up a new chatbot for businesses. It includes user registration, organization setup, and chatbot integration and testing. The goal is to provide a seamless and intuitive experience for users to set up and integrate a chatbot with their website. I purposely focused on the UI/UX part because of time limitation.

Features:

User Registration:
User enters name, email, and password.
Option to "continue with Google."
Email verification code submission to ensure genuine registrations.

Setup Organisation:
User enters company name, company website URL, and company description.
Auto-fetch meta-description from the website URL.
UI to show detected webpages, scraped webpages, and pending webpages (using dummy data).
Option to click on any webpage to see data chunks scraped from that webpage.

Chatbot Integration & Testing:
"Test chatbot" button to open the client's website with a dummy chatbot integration.
Topbar with "Chatbot not working as intended? Share feedback."

"Integrate on your website" button with two options:
Easy-to-follow instructions to copy-paste a dummy code within <head> of the website.
Mail instructions to the client's developer.

"Test integration" button that opens a new screen with:
Confetti UI or SUCCESS UI showcasing successful integration.
"Explore Admin Panel" button.
"Start talking to your chatbot" button.
Social media sharing buttons.
Another UI in case integration cannot yet be detected.


Technologies Used:

ReactJS
Tailwind CSS
Axios

Setup Instructions:

Clone the repository: git clone https://github.com/abhishekav3080/beyondchats-assignment.git
Navigate to the project directory: cd beyondchats-assignment

Install dependencies: yarn install
Start the development server: yarn start

Live Website
You can view the live website here. 

