import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.component';
import ProjectPage from '../../routes/ProjectPage';
import AboutPage from '../../routes/AboutPage';
import IndexPage from '../../routes/IndexPage';
import './App.style.scss';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/project/:slug" element={<ProjectPage />} />
                <Route
                    path="*"
                    element={
                        <main className="not-found">
                            <h1>Oops!</h1>
                            <h2>Looks like this path leads nowhere.</h2>
                        </main>
                    }
                />
            </Routes>
        </>
    )
}

export default App
