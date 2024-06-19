import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { UserT } from '../store/usersReducer.ts'
import UserItem from "../components/UserItem.tsx";
import styled from "styled-components";

const CatalogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

const Catalog: FC = () => {
  const users = useSelector((state: RootState) => state.users)


  console.log(users.value)

  return (
    <CatalogWrapper>
      {
        users
          ? users.value.map((u: UserT, index) => <UserItem key={index} user={u}/>)
          : <></>
      }
    </CatalogWrapper>
  )
}

export default Catalog
