import './AnchorExternal.style.scss';

export const AnchorExternal = ({ children, to }) => {
    return (
        <a
            className="anchor-external"
            href={to}
            target="_blank"
            rel="noreferrer">
            {children}
        </a>
    )
}

export default AnchorExternal
