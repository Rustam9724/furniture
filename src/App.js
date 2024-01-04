import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeSection from './components/WelcomeSection';
import SignInSection from './components/SignInSection';
import SignUpSection from './components/SignUpSection';
import Decorations from './components/Decorations';
import DeskLamp from './components/DeskLamp';

function App() {
  return (
    <div className="wrapper">
      <Router basename="/furniture">
        <Routes>
          <Route path="/" element={<WelcomeSection/>}/>
          <Route path="/sign-in" element={<SignInSection/>}/>
          <Route path="/sign-up" element={<SignUpSection/>}/>
          <Route path="/main" element={<Decorations/>}/>
          <Route path="/desk-lamp" element={<DeskLamp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;