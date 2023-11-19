

const StatusDisplay = ({ status }) => {
    const statusColors = {
        'open': 'bg-gray-500',
        'in-progress': 'bg-yellow-500',
        'closed': 'bg-green-500',
    }
    return (
        <span className={`${statusColors[status?.toLowerCase()]} inline-block rounded-full px-2 whitespace-nowrap py-1 text-xs font-semibold text-slate-300`} >
            {status}
        </span>
    )
}

export default StatusDisplay
