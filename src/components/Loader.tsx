import styled from 'styled-components'

const LoaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Loader = () => {
  return (
    <LoaderWrapper>
      <img src="/src/assets/SquaresLoader.svg" alt="Loader" width={150} height={150}/>
    </LoaderWrapper>
  )
}

export default Loader
