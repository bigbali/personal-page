import './AnchorExternal.style.scss';

export const AnchorExternal = ({ children, to }) => {
    return (
        <>
            &nbsp;
            <a
                className="anchor-external"
                href={to}
                target="_blank"
                rel="noreferrer">
                {children}
            </a>
            &nbsp;
        </>
    )
}

export default AnchorExternal
