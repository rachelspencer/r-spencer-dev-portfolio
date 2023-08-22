import classNames from "classnames"

function Media({
    src,
    alt, 
    children,
    className,
    ...rest
}){
    const finalMediaClassNames = classNames(
        //Base Styling
        'rounded-lg drop-shadow-lg',
        //Media Queries
       
        //Dark Mode  
         'dark:border-indigo-500',
         //Accounts for customization
        className
    )
    const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg') || src.endsWith('.MOV');
    
    if (isVideo) {
        return(
        <div className="flex justify-center p-4">
            <video className={finalMediaClassNames} controls autoPlay muted>
                <source src={src} type="video/mp4" />
                <source src={src} type="video/webm" />
                <source src={src} type="video/ogg" />
                <source src={src} type="video/quicktime"/>
                Your browser does not support the video tag.
            </video>
        </div>
       
        );
    }
        return (
            <div className="flex justify-center p-4">
                <img src={src} alt={alt} className={finalMediaClassNames} />
            </div>
        )
        
}
export default Media;