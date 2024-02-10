import React from 'react'
import styled from 'styled-components';

function Start_game({onButtonClick}) {
  return (
    <Container>
    <div>
        <div>
            <img src="/images/dices 1.png" alt="" />
        </div>
        <h1>DICE GAME</h1>
        <button onClick={onButtonClick}>play now</button>
    </div>
    </Container>
  )
}

export default Start_game


const Container = styled.div`

  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;