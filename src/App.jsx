import { useState } from 'react'
import './App.css'
import defaultLogo from './images/DesktopImages/Default-white.png'
import crossLogo from './images/DesktopImages/Cross-white.png'
import FeedbackCard from './FeedbackCard';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleFabClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <h1>Working noww!!!</h1>
    <div className="feedback-icon">
      <img src={isOpen ? crossLogo : defaultLogo} alt="Feedback" onClick={handleFabClick} />
      {isOpen && <FeedbackCard />}
    </div>
    </>
  )
}

export default App
