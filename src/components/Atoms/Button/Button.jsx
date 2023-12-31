import './Button.scss';

export default function Button (props) {
    return (
        <>
            <button className={props.style} onClick={props.click} aria-label={props.ariaLabel}>{props.txt}</button>
        </>
    )
}