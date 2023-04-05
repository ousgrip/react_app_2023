// export default function Button () {
//     return <button>Button</button>
// }

// export default Button;

const Button =({customClass, text, customFunction, ...props}) => {
    return <button
            onClick={(e) => customFunction ? customFunction(e.target) : null}
            {...props}
            className={`btn ${customClass || ''}`}>
            {text || 'Button'}
            </button>
};

export default Button;

// const props = {
//     text: 'default'
// }
