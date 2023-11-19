import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Priority = ({ priority }) => {
    const elements = []
    for (let i = 0; i < 5; i++) {
        elements.push(<FontAwesomeIcon icon={faFire} key={i} className={ `${i < priority ? 'text-red-400' : ''}`} />)
    }
    return (
        <div className=' flex justify-start align-baseline'>
            {elements}
        </div>
    )
}

export default Priority
