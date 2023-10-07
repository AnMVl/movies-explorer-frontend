import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Main/Main.jsx';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { NotFound } from './NotFound/NotFound';
import { useState } from 'react';

function App() {
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className="body">
            <div className="page">
                <Routes>
                    <Route path="/" element={<Main loggedIn={loggedIn} />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
