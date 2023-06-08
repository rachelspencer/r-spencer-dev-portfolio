import classNames from "classnames"

function Info({ 
    children, 
    className, 
    ...rest }){
    const paragraphClassNames = classNames(
            // Base Styling
            'text-base m-8',
            //Media Queries
             'md:text-1xl md:p-2', 
             //Dark Mode
             'dark:text-slate-400',
             //Accounts for customization
            className
        )
    return (
        <p {...rest} className={paragraphClassNames}>
           {children} 
        </p>
    )
}
export default Info;