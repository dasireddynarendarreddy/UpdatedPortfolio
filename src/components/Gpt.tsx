import {GoogleGenAI} from "@google/genai"
import ReactMarkdown from 'react-markdown';
import './Gpt.css'

import { useState } from 'react';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { CardContent } from "./ui/card";
import { CardHeader } from "./ui/card";
import { Text } from "lucide-react";
import { Loader } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
interface ChatItem {
    question: string;
    answer: string;
  }
const Gpt= () => {
  
  const [input, setInput] = useState('');
  const [data, setData] = useState<ChatItem[]>([]);
  const [loading, setLoading] = useState(false);
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_URL });



  const handleSendMessage = async () => {
    if (input.trim() === '') return;

     else{
    setLoading(true);
    let prompt=`# About Me

Hello! I'm **Narendar**, a recent graduate from **Anurag College of Engineering** (2020-2024), where I studied **Computer Science** with a **CGPA of 7.71**.

## Skills
- **Programming Languages**: Java, JavaScript
- **Frameworks & Libraries**: ReactJS, Spring Boot
- **Web Technologies**: HTML, CSS, SQL
- **Databases**: MongoDB, Supabase

## Projects

### 1. [**Chatbot Using Gemini GPT**](https://geminigpt1.netlify.app/)
   A chatbot integrated with the **Gemini API** and **GPT** to provide interactive and intelligent responses. It allows users to ask questions and receive conversational responses. This project demonstrates how **ReactJS**, **Gemini API**, and **React Markdown** can be used to display the conversation dynamically in a clean, user-friendly interface. I also used **Tailwind CSS** to make the chatbot responsive and visually appealing.
   - **Technologies Used**: ReactJS, Gemini API, GPT, React Markdown, Tailwind CSS

### 2. [**E-commerce Application**](https://mynextjsproject-phi.vercel.app/)
   A full-stack **e-commerce web application** built with **Next.js**. It allows users to browse products, add them to their cart, and complete purchases. The app also includes product reviews, authentication, and a responsive design using **Tailwind CSS** for a smooth user experience.
   - **Technologies Used**: ReactJS, Next.js, Tailwind CSS, JavaScript, MongoDB

### 3. [**Quiz App with Gemini AI Integration**](https://geminiquizapp.netlify.app/)
   A dynamic quiz generator that integrates with the **Gemini API** to generate quizzes based on the subject and difficulty level (easy, medium, hard). The user can also specify the number of questions. This project uses **ReactJS** and **JavaScript** for front-end development and showcases interactive quiz capabilities.
   - **Technologies Used**: ReactJS, Gemini API, JavaScript

### 4. [**Notes Making Application**](https://makenotesandpdf.netlify.app/)
   A full-stack application to create, edit, and manage notes. It allows users to merge two notes into a single document and download them as a **PDF**. The app is built using **ReactJS** and **MongoDB**. It also integrates **Amazon Polly** to read the notes aloud for accessibility purposes. The app is styled with **Tailwind CSS** for responsiveness.
   - **Technologies Used**: ReactJS, MongoDB, Amazon Polly, Tailwind CSS

### 5. [**Drawing Application**](https://drawboard-ten.vercel.app/)
   A creative **drawing application** where users can draw on a canvas. It leverages **ReactJS** and the **React Canvas library** for a seamless drawing experience. The application also uses **Supabase** for database management and authentication.
   - **Technologies Used**: ReactJS, React Canvas, Supabase, Tailwind CSS

## Education
- **B.Tech in Computer Science** from **Anurag College of Engineering** (2020-2024)
- **Intermediate (MPC)** from **Pragathi Junior College** (2018-2020)
- **High School** from **Gandhiji English Medium School** (2017-2018)

## Fun Fact
I am from **Shabdullapuram**, a village near Nalgonda.

## Contact
- **GitHub**: [https://github.com/dasireddynarendarreddy](https://github.com/dasireddynarendarreddy)
- **LinkedIn**: [https://www.linkedin.com/in/narendar-reddy-63447626b/](https://www.linkedin.com/in/narendar-reddy-63447626b/)

## Version Control (Git)
I use **Git** for version control. You can find all my projects and their version history on my [GitHub Repository](https://github.com/dasireddynarendarreddy).

 you have to give information about me do not answer any other question you have to answer the question which are related to narendar only do not answer any other question
  when the user aks about me give the answer which is in the text i have provided do not answer for any other question 
${input} `

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      if(response.text)
      {
        setData([...data,{question:input,answer:response.text}])
        console.log(response.text)
        console.log(data)
        setLoading(false)
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-4 bg-white rounded-lg shadow-lg">
      <Card>
        <CardHeader>
          <Text>Chat with Bot</Text>
        </CardHeader>

        <CardContent>
          <ScrollArea className="h-64 overflow-auto">
            <div className="space-y-4">
              {data.map((item, index) => (
                <Card key={index} className="p-4 shadow-md">
                  <CardContent className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      {/* Display the question on the left */}
                      <div className="flex-1 text-left">
                      <h6 className="text-md font-semibold text-black bg-gray-500 w-fit p-2 rounded-md ">{item.question}</h6>
                      </div>
                    </div>

                    {/* Display the answer below the question, centered */}
                    <div className="flex justify-center markdown-container">
                      <div className="text-center">
                      <p className="text-lg text-gray-600">
                        <ReactMarkdown children={item.answer}/>
                      </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {loading && (
                <div className="flex justify-center">
                  <Loader className="animate-spin" />
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>

        <div className="mt-4 flex">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="w-full"
          />
          <Button onClick={handleSendMessage} className="ml-2">
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default Gpt