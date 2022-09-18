import { FaTimes, FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
    <div className="card">
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
            <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
            <FaEdit color='color' />
        </button>
        <div className="text-display">
            {item.text}
        </div>
    </div>
  )
}

export default FeedbackItem