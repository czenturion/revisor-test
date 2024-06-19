import { FC, useState } from 'react'
import AlbumList from './AlbumList'
import { UserT } from '../store/usersReducer.ts'
import styled from "styled-components";

type Props = {
  user: UserT
}

const UserItemWrapper = styled.div`
    align-items: center;
    text-align: left;
`

const UserExpandBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 80px;
    cursor: pointer;
`

const TextWrapper = styled.h1`
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    margin-left: 24px;
`

const UserItem: FC<Props> = ({ user }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <UserItemWrapper>
      <UserExpandBar onClick={() => setExpanded(!expanded)}>
        {
          expanded
            ? <img src="/src/assets/CloseIcon.svg" alt="CloseIcon" />
            : <img src="/src/assets/OpenIcon.svg" alt="OpenIcon" />
        }
        <TextWrapper >
          {user.name}
        </TextWrapper>
      </UserExpandBar>
      {expanded && <AlbumList userId={user.id}/>}
    </UserItemWrapper>
  );
};

export default UserItem