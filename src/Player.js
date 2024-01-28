import React from 'react'
import Card from 'react-bootstrap/Card';

function Player({info}) {
  return (
    <div>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={info.img}/>
      <Card.Body >
        <Card.Title>Name:{info.name}</Card.Title>
        <Card.Text>
        Age:{info.age}ans<br/>
        Nationality:{info.nationality}<br/>
        Team:{info.team}<br/>
        Jersey Number:{info.jerseyNumber}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player
