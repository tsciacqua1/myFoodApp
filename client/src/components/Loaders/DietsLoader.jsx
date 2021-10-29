import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDiets } from '../../redux/actions/actions'

const DietsLoader = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        let apiCall = async () => {
            dispatch(await getDiets())
        }
        apiCall()
    }, [])
}

export default DietsLoader
