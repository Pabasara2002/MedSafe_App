import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/AIAssistant.css";

const AIAssistant = () => {
  return (
    <>
      <Navbar />

      <div className="assistant-container">
        <h2>MedSafe AI Assistant</h2>

        <div className="chat-box">
          <div className="chat-message">
            Hi User!, How can I assist you?
          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="Ask your medical question..."
            />
            <button>Send</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AIAssistant;
