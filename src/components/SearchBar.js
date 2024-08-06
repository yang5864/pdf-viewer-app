import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/search', { state: { pdfName: `${input}` } });
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter PDF name"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
