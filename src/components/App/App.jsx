import React from 'react';
import Header from '../Header/Header.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from '../../routes/IndexPage/';
import './App.style.scss';
import ProjectPage from '../../routes/ProjectPage/ProjectPage.component';

const App = () => {
    console.log(window.location.origin)

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/project/:slug" element={<ProjectPage />} />
                <Route path="/contact" element={<IndexPage />} />
                <Route path="/about" element={<IndexPage />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <div>

            </div>
        </>
    )
}

export default App
