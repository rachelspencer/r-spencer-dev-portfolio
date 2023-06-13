import classNames from "classnames";

function Button ({
    children,
    className,
    ...rest
}){
    const buttonClassNames = classNames(
        //Base Styling
        'bg-red-400 w-40 h-12 mt-4 rounded drop-shadow-lg text-sm text-white font-bold tracking-widest',
        //Active Modes
        'hover:bg-orange-400 active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300',
        //Dark Mode
        'dark:hover:bg-cyan-500 dark:active:ring-indigo-500 dark:active:bg-cyan-500 dark:text-slate-200 dark:bg-indigo-500',
        //Accounts for customization
        className
    )
    return (
        <div>
            <button 
                {...rest} 
                className={buttonClassNames}>
                {children}
            </button>
        </div>
    )
}
export default Button;