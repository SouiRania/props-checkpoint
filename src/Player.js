import React from 'react'
import Card from 'react-bootstrap/Card';

function Player({attribut}) {
  return (
    <div id="carte">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={attribut.img}/>
      <Card.Body >
        <Card.Title>Name:{attribut.name}</Card.Title>
        <Card.Text>
        Age:{attribut.age}ans<br/>
        Nationality:{attribut.nationality}<br/>
        Team:{attribut.team}<br/>
        Jersey Number:{attribut.jerseyNumber}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player
