import React, { useState, useRef } from 'react';
import './TextBox.css';

const TextBox = ({submitButtonState}) => {
    const [text, setText] = useState('');
    const [attachments, setAttachments] = useState([]);
    // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const [attachButtonDisabled, setAttachButtonDisabled] = useState(false);
    const fileInputRef = useRef(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
        submitButtonState(e.target.value);
    };

    const handleAttachment = (e) => {
        const files = Array.from(e.target.files);
        if (attachments.length + files.length <= 2) {
            setAttachments([...attachments, ...files]);
            setAttachButtonDisabled(attachments.length + files.length === 2);
        }
    };

    const removeAttachment = (index) => {
        const updatedAttachments = [...attachments];
        updatedAttachments.splice(index, 1);
        setAttachments(updatedAttachments);
        setAttachButtonDisabled(false);
    };

    const handleAttachButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="text-box-container">
            <label htmlFor="text-area">Enter the issue:</label>
            <div className="text-area-wrapper">
                <textarea
                    id="text-area"
                    placeholder="Write here..."
                    value={text}
                    onChange={handleTextChange}
                    maxLength={1000}
                ></textarea>
                <div className="attachments-wrapper">
                    <button className="attach-button" disabled={attachments.length >= 2} onClick={handleAttachButtonClick}>
                        Attach
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleAttachment}
                        style={{ display: 'none'}}
                        multiple
                    />
                    <div className="attachments-container">
                        {attachments.map((file, index) => (
                            <div key={index} className="attachment">
                                <div className="attachment-image-container">
                                    <img src={URL.createObjectURL(file)} alt="Attachment" />
                                    <button className="remove-button" onClick={() => removeAttachment(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextBox;
