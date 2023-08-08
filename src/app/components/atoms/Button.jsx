const Button = ({ text, className, onClick }) => {
    return (
    <button
        onClick={onClick}
        className={`${className} h1 border-solid border-4 border-white bg-brand-2
            font-mono text-[white] px-8 py-3 rounded-xl`}
     >
        {text}
    </button>
    );
}
 
export default Button;