### Screenshots
## 1
<img width="1861" height="930" alt="Screenshot (203)" src="https://github.com/user-attachments/assets/0e47b117-bc8c-4ec5-ba6e-69d262ceed93" />

## 2

<img width="1857" height="965" alt="Screenshot (204)" src="https://github.com/user-attachments/assets/921ee704-4ade-490b-810b-95c520ebf4ee" />



### About The Project

**LLMpulse** is a sleek, real-time news aggregation platform dedicated to bringing you the latest updates, breakthroughs, and discussions in the field of Large Language Models. In a rapidly advancing industry, staying informed is crucial, and LLMpulse provides a curated, modern, and engaging interface to do just that.

This project is built with a Node.js backend that serves data from the [newsdata.io API](https://newsdata.io/ "null") and a dynamic frontend rendered with EJS and styled with Tailwind CSS for a beautiful, animated user experience.

### ✨ Features

-   **Real-Time News Feed:** Fetches the latest articles specifically about LLMs.
    
-   **Dynamic Search:** Allows users to search for news on any topic.
    
-   **Modern & Animated UI:** A sleek, dark-themed "glassmorphism" interface with smooth, subtle animations.
    
-   **Responsive Design:** Looks great on all devices, from desktops to mobile phones.
    
-   **Secure API Handling:** Keeps API keys safe on the backend using environment variables.
    

### 🛠️ Tech Stack

This project is built with a modern technology stack:

-   **Backend:** Node.js, Express.js
    
-   **Frontend:** EJS (Embedded JavaScript Templates)
    
-   **Styling:** Tailwind CSS
    
-   **API Communication:** Axios
    
-   **Environment Management:** Dotenv
    

### 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

#### Prerequisites

Make sure you have Node.js and npm installed on your machine.

-   **npm**
    
    ```
    npm install npm@latest -g
    ```
    

#### Installation

1.  **Clone the repository**
    
    ```
    git clone [https://github.com/YOUR_USERNAME/LLMpulse.git](https://github.com/YOUR_USERNAME/LLMpulse.git)
    ```
    
2.  **Navigate to the backend directory**
    
    ```
    cd LLMpulse/backend
    ```
    
3.  **Install NPM packages**
    
    ```
    npm install
    ```
    
4.  **Create your Environment File**
    
    -   Create a `.env` file in the `backend` directory.
        
    -   Get a free API key from [https://newsdata.io/](https://newsdata.io/ "null").
        
    -   Add your key to the `.env` file:
        
        ```
        NEWSDATA_API_KEY='YOUR_API_KEY_HERE'
        ```
        
5.  **Start the Server**
    
    ```
    node server.js
    ```
    
    Your application should now be running on `http://localhost:5001`.
