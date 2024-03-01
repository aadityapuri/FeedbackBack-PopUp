import React, {useState} from 'react';
import './FeedbackCard.css'
import suggestion from './images/DesktopImages/Suggestion-white.png'
import contactUs from './images/DesktopImages/ContactUs-white.png'
import feedback from './images/DesktopImages/Feedback-white.png'
import reportIssue from './images/DesktopImages/ReportIssue-white.png'

import suggestionCircled from './images/DesktopImagesCircled/Suggestion-Circled.png'
import contactUsCircled from './images/DesktopImagesCircled/ContactUs-Circled.png'
import feedbackCircled from './images/DesktopImagesCircled/Feedback-Circled.png'
import reportIssueCircled from './images/DesktopImagesCircled/ReportIssue-Circled.png'

import TextBox from './TextBox';

const FeedbackCard = () => {
  const [verticalLayout, setVerticalLayout] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIconClick = (imageId) => {
    if(verticalLayout) setVerticalLayout(false);
    setSelectedImage(imageId);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div
        className={`additional-icons ${verticalLayout ? 'vertical' : 'horizontal'}`}
      >
        <img src={selectedImage === "suggestion"?suggestionCircled:suggestion} alt="suggestion" onClick={() => handleIconClick("suggestion")} />
        <img src={selectedImage === "contactUs"?contactUsCircled:contactUs} alt="contactUs" onClick={() => handleIconClick("contactUs")} />
        <img src={selectedImage === "reportIssue"?reportIssueCircled:reportIssue} alt="reportIssue" onClick={() => handleIconClick("reportIssue")} />
        <img src={selectedImage === "feedback"?feedbackCircled:feedback} alt="feedback" onClick={() => handleIconClick("feedback")} />
      </div>
      {selectedImage === "suggestion" && <SuggestionPopUp />}
      {selectedImage === "contactUs" && <ContactUsPopup />}
      {selectedImage === "reportIssue" && <ReportIssuePopup />}
      {selectedImage === "feedback" && <FeedbackPopup />}
    </div>
  );
};

const SuggestionPopUp = () => {
  const [option, setOption] = useState('');
  const [issue, setIssue] = useState('');
  const isSubmitDisabled = !(option && issue);

  const isTextFieldEmpty = (str)=>{
    setIssue(str);
    if(issue.length === 0){
      console.log("this is called");
    }
  }

  const handleSubmit = () => {
    // Handle submit action here
  };

  return (
    <div className="popup">
      <h2>Suggestion</h2>
      <hr />
      <div>
        <label htmlFor="option">Choose an option:</label>
        <select
          id="option"
          className='popup-options'
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        {/* <label htmlFor="issue">Enter the issue:</label> */}
        {/* <div>
        <textarea
          className='text-box'
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <button className='attach-button'>Attach</button>
        </div> */}
        <TextBox submitButtonState={isTextFieldEmpty} />
      </div>
      <button disabled={isSubmitDisabled} onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const ContactUsPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <h2>Popup 2</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const ReportIssuePopup = ({ onClose }) => {
  return (
    <div className="popup">
      <h2>Popup 3</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const FeedbackPopup = ({ onClose }) => {
  return (
    <div className={`popup`}>
      <h2>Popup 1</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
export default FeedbackCard;
