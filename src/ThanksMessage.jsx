import React, { useEffect } from 'react';

const ThanksMessage = ({ option }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Hide thanks message after 5000ms
      // You can set a state here to hide the message
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {option === "Report an Issue" && <p>Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!</p>}
      {option === "Share Feedback" && <p>Thanks for your valuable feedback!</p>}
      {option === "Give Suggestion" && <p>Thanks for your valuable suggestion!</p>}
      {option === "Contact Us" && <p>We will get back to you as soon as possible!</p>}
    </div>
  );
};

export default ThanksMessage;
