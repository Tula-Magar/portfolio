import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ChatBox = () => {
  const answers = {
    hi: "Hello, how can I help you?",
    Hello: "Hello, how can I help you?",
    "how are you?": "I'm fine, thank you. How are you?",
    "what is your name?": "My name is Bot.",
    "what is your age?": "I'm 26 year old.",
    "How much do you charge?": "I can't tell you that.",
    "what is your favorite color?": "My favorite color is blue.",
    "what is your favorite food?": "My favorite food is Nepali food.",
    "what is your favorite movie?":
      "My favorite movie is The Kol ho na ho from bollywood.",
    "what is your favorite song?":
      "My favorite song is 'The Scientist' by Coldplay.",
    "what is your favorite book?":
      "My favorite book is 'The Alchemist' by Paulo Coelho.",
    "what is your favorite sport?": "My favorite sport is football.",
    "what is your favorite game?": "My favorite game is 'Pubg'.",
    "what is your favorite animal?": "My favorite animal is dog.",
    "what is your favorite country?": "My favorite country is Japan.",
    "what is your favorite city?": "My favorite city is Tokyo.",
    "what is your favorite place?": "My favorite place is Kathmandu.",
    "what is your favorite season?": "My favorite season is summer.",
    "what is your favorite holiday?": "My favorite holiday is Christmas.",
    "what is your favorite drink?": "My favorite drink is coffee.",
    "what is your favorite dessert?": "My favorite dessert is ice cream.",
    "what is your favorite fruit?": "My favorite fruit is apple.",
    "what is your favorite vegetable?": "My favorite vegetable is potato.",
    "what is your favorite flower?": "My favorite flower is rose.",
    "what is your favorite car?": "My favorite car is Tesla.",
    "what is your favorite bike?": "My favorite bike is Ducati.",
    "what is your favorite brand?": "My favorite brand is Apple.",
    "what is your favorite website?": "My favorite website is Google.",
    "what is your favorite app?": "My favorite app is Instagram.",
    "what is your favorite phone?": "My favorite phone is iPhone.",
    "what is your favorite laptop?": "My favorite laptop is Dell.",
    "what is your favorite computer?": "My favorite computer is Dell.",
    "Have you ever been to Nepal?": "Yes, I have been to Nepal.",
    "have you worked as a developer?": "Yes, I have worked as a developer.",
    "have you worked as a programmer?": "Yes, I have worked as a programmer.",
    "have you worked as a designer?": "Yes, I have worked as a designer.",
    "have you worked as a freelancer?": "Yes, I have worked as a freelancer.",
    "Tell me about yourself": "I am a Tula Magar chatbot.",
    bye: "Goodbye!",
    default: "I don't understand.",
  };

  const [messages, setMessages] = useState([
    { sender: "bot", message: "Hi there! How can I assist you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (newMessage !== "") {
      setMessages([...messages, { sender: "user", message: newMessage }]);

      let matchFound = false;
      for (const [key, value] of Object.entries(answers)) {
        if (newMessage.toLowerCase().includes(key.toLowerCase())) {
          setMessages([
            ...messages,
            { sender: "user", message: newMessage },
            { sender: "bot", message: value },
          ]);
          setNewMessage("");

          matchFound = true;
          break;
        }
      }
      if (!matchFound) {
        setTimeout(() => {
          setMessages([
            ...messages,
            { sender: "user", message: newMessage },
            { sender: "bot", message: answers.default },
          ]);
        }, 1000);
      }
    }
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div className="bouncing-container">
        <h3 className="bouncing-text">Chat with Bot</h3>
      </div>
      <Container className="chat-box d-flex flex-column justify-content-between">
        <Card.Header className="text-center"></Card.Header>
        <Card className="chat-messages  bg-dark text-white p-5 my-5">
          {messages.map((message, index) => (
            <Card.Body key={index} className={message.sender}>
              <Row>
                <Col sm={12}>
                  {message.sender === "bot" ? (
                    <div className="d-flex flex-row">
                      <Card.Text className=" text-start text-success mb-0">
                        {message.sender}:
                      </Card.Text>

                      <Card.Text className="text-start ">
                        &nbsp;{message.message}
                      </Card.Text>
                    </div>
                  ) : (
                    <div className="d-flex flex-row-reverse">
                      <Card.Text className="text-end ">
                        {message.message}
                      </Card.Text>
                      <Card.Text className=" text-end text-primary mb-0">
                        {message.sender}:&nbsp;
                      </Card.Text>
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Body>
          ))}
        </Card>
        <Card.Footer>
          <Row>
            <Col sm={10}>
              <input
                type="text"
                className="form-control"
                placeholder="Type your message here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Col>
            <Col sm={2}>
              <Button variant="primary" className="w-100" onClick={sendMessage}>
                Send
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Container>
    </>
  );
};

export default ChatBox;
