import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { UserT } from '../store/usersReducer.ts'
import { CatalogPropsT } from '../types/catalogTypes.ts'
import styled from 'styled-components'
import UserItem from '../components/UserItem.tsx'
import Loader from '../components/Loader.tsx'

const CatalogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

const Catalog: FC<CatalogPropsT> = ({ onImageClick }) => {
  const users = useSelector((state: RootState) => state.users)
  const usersIsLoading = useSelector((state: RootState) => state.apiStatus.usersIsLoading)


  return (
    <CatalogWrapper>
      {
        users.value.length > 0 && !usersIsLoading
          ? users.value.map((u: UserT, index) => <UserItem key={index} user={u} onImageClick={onImageClick}/>)
          : <Loader />
      }
    </CatalogWrapper>
  )
}

export default Catalog
