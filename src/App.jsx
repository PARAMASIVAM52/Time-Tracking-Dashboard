import { useState } from 'react';
import ProfileData from './components/ProfileData';
import InfoData from './components/InfoData';
import './css/style.css';

function App() {
    const [timeframe, setTimeframe] = useState('weekly');

    return (
        <>
            <main className="main-block">
                <ProfileData activeTimeframe={timeframe} setActiveTimeframe={setTimeframe} />
                <InfoData timeframe={timeframe} />
            </main>
        </>
    );
}

export default App;