import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import PdfViewer from './components/PdfViewer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchBar />} />
                <Route path="/search" element={<PdfViewer />} />
            </Routes>
        </Router>
    );
}

export default App;
