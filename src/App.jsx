import { Route, Routes } from 'react-router-dom';
import Events from './pages/Events';
import EventParticipants from './pages/EventParticipants';
import EventRegistration from './pages/EventRegistration';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/:id/participants" element={<EventParticipants />} />
        <Route path="/:id/registration" element={<EventRegistration />} />
      </Routes>
    </div>
  );
}

export default App;
