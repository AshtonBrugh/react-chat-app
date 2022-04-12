import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="8f2e3079-2e31-42e3-8ae7-dd4784e9f48f"
            userName="javascriptmastery"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
}

export default App;