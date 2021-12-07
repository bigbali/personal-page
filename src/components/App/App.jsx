import React from 'react';
import Header from '../Header/Header.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from '../../routes/IndexPage/';
import './App.style.scss';
import WelcomeOverlay from '../WelcomeOverlay/WelcomeOverlay.component';

const App = () => {
    return (
        <>
            {/* <WelcomeOverlay /> */}
            <Header />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/about" element={<IndexPage />} />
                <Route path="/contact" element={<IndexPage />} />
            </Routes>
            <div>

            </div>
        </>
    )
}

export default App
