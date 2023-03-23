import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // Render component based on what the current page is
    const renderPage = () => {
        switch(currentPage) {
            case 'Portfolio':
                return <Portfolio />
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />
            default:
                return <About />
        }
    }

    const handlePageChange = page => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage}
        </div>
    )
}