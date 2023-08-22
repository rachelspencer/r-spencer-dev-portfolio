import classNames from "classnames";

function Anchor ({
    href, 
    children, 
    className, 
    ...rest 
}){
    const anchorClassNames = classNames(
        //Base Styling
        'text-rose-600 underline font-bold m-l:30',
        //Hoever, Active, and Focus Styling
        'hover:underline-offset-4 hover:text-orange-400',
        // Dark Mode Styling
        'dark:text-indigo-500 dark:focus:ring-indigo-500 dark:border-none',
        //Accounts for customization
        className
    );
    return (
        <a href={href} className={anchorClassNames}>{children} </a>
    )
}
export default Anchor