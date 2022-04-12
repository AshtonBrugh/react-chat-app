import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
    const [ value, setValue ] = useState('');
    const { chatId, creds } = props;


    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, { text });
    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);

    }


    return (
        <div className="message-form" onSubmit={handleSubmit}>
            <input 
            className="message-input"
            placholder="Send a message..."
            value={ value }
            onChange={ handleChange }
            onSubmit={ handleSubmit }
            />
        </div>
    )
}

export default MessageForm;