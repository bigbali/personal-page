import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../../data/projects';
import './PortfolioGrid.style.scss';

const fallback = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thecuriosityworkshop.com%2Fwp-content%2Fuploads%2F2015%2F03%2F01-rubberduck-hongkong-1024x681.jpg&f=1&nofb=1"

const renderGrid = () => {
    return portfolio.map(project => {
        return (
            <Link
                key={project.title}
                to={`project/${project.slug}`}
                className="project-card"
            >
                <img
                    className="project-background"
                    src={project.image || fallback}
                    alt=""
                />
                <p className="title">
                    {project.title || "Untitled Project"}
                </p>
            </Link>
        )
    })
}

const PortfolioGrid = () => {
    return (
        <div className="portfolio-grid">
            {renderGrid()}
        </div>
    )
}

export default PortfolioGrid
