import React from 'react'
import { players } from './Players'
import Player from './Player'

function PlayerList() {
  return (
    <div style={{ display: 'flex'}}>
     {players.map(e=><Player info={e}></Player>)}
    </div>
  )
}

export default PlayerList
