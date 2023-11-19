

const ProgressDisplay = ({ progress }) => {
    return (
        <div className=' bg-slate-300 w-full rounded-full h-2.5'>
            <div className=' bg-slate-600 h-2.5 rounded-full' style={{width: `${progress}%`}}>
            </div>
        </div>
    )
}

export default ProgressDisplay
