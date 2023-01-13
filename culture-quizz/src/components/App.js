import { Routes, Route } from 'react-router-dom';
import Settings from './Pages/Settings';
import Questions from './Pages/Questions';
import FinalScreen from './Pages/FinalScreen';


function CultureQuizz() {
  return (
    <Routes>
      <Route path="/" element={
          <div>
            <Settings />
          </div>
        } />
      <Route path="/questions" element={
          <div>
            <Questions />
          </div>
        } />
      <Route path="/finalscore" element={
          <div>
            <FinalScreen />
          </div>
        } />
    </Routes>
  );
}

export default CultureQuizz;
