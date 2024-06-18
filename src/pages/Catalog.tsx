import { FC, useEffect } from 'react'
import { fetchUsers } from '../api/api.service.ts'
import { add } from '../store/reducers.ts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'

const Catalog: FC = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users)

  useEffect(() => {
    fetchUsers()
      .then(users => {
        dispatch(add(users))
      })
  }, []);

  console.log(users)

  return (
    <div>Catalog</div>
  )
}

export default Catalog
