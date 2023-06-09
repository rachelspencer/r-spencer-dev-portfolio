import classNames from "classnames";

function Tile({ skill }){
   
    return (
        <div className='bg-slate-200 text-gray-500 rounded-md p-3 m-1 inline-block drop-shadow-sm dark:bg-indigo-500 dark:text-slate-200'>
            <span>{skill}</span>
        </div>
    )
}
export default Tile;