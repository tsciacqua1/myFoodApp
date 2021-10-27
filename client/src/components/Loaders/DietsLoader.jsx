import { useDispatch } from 'react-redux'
import { getDiets } from '../../redux/actions/actions'

const DietsLoader = () => {
    const dispatch = useDispatch()
    return (
        dispatch(getDiets())
    )
}

export default DietsLoader
