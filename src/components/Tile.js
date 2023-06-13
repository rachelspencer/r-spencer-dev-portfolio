import classNames from "classnames";

function Tile({ skill }){
   
    return (
        <div className='bg-red-200 text-yellow-900 rounded-md p-3 m-1 inline-block drop-shadow-sm dark:bg-indigo-500 dark:text-slate-200'>
            <span>{skill}</span>
        </div>
    )
}
export default Tile;