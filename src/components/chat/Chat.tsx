/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useState } from 'react';
import "./chat.css";


const API = "http://127.0.0.1:8000/api/chat";

const Chat = () => {
    const [message, setMessage] = useState({text: ""});
    const [chatHistory, setChatHistory] = useState([] as any);

    function onChange(e: any) {
        e.preventDefault();
        setMessage({ text: e.target.value });
    }
    async function sendMessage(message: any) {
        const res = await axios.post(API, message);
        const item = { text: message, response: res.data.response };
        setChatHistory([item, ...chatHistory]);

    }
    console.log(chatHistory);
    return (
        <main>
		<ul id="chat">
        {chatHistory.map((data: any) =><><li className="you">
            <div className="entete">
                <span className="status green"></span>
                <h2>Vincent</h2>
                <h3>10:12AM, Today</h3>
            </div>
            <div className="triangle"></div>
            <div className="message">
                {data.text}
            </div>
        </li>
            <li className="me">
                <div className="entete">
                    <h3>10:12AM, Today</h3>
                    <h2>Bot</h2>
                    <span className="status blue"></span>
                </div>
                <div className="triangle"></div>
                <div className="message">
                    {data.response}
                </div>
            </li></>
            )}
		</ul>
		<footer>
			<textarea name="text" onChange={onChange} value={message.text} placeholder="Type your message"></textarea>
            <span><i className="fa fa-file-image" aria-hidden="true"></i></span>
            <span><i className="fa fa-paperclip" aria-hidden="true"></i></span>
			<a onClick={() => sendMessage(message)} >Send</a>
		</footer>
	</main>
    )
}
export default Chat;