import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import boardgameService from '../../services/boardgame.service'

const BoardgamesDetailsPage = () => {

    const [boardgameDetails, setBoardgameDetails] = useState({})

    const { id } = useParams()

    useEffect(() => {

        boardgameService
            .getBoardgame(id)
            .then(({ data }) => {
                setBoardgameDetails(data)
            })
            .catch(err => console.log(err))

    }, [])

    return (

        <Container>
            <h1>{boardgameDetails.name}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Description</h3>
                    <p>{boardgameDetails.description}</p>
                    <h3>Details</h3>
                    <p>Duration: {boardgameDetails.playingTime}</p>
                    <p>Players: {boardgameDetails?.players?.min}-{boardgameDetails?.players?.max} </p>
                    <p>Age: {boardgameDetails.age}</p>
                </Col>
                <Col md={{ span: 6 }}>
                    <img style={{ width: '100%' }} src={boardgameDetails.gameImg} alt={boardgameDetails.name} />
                </Col>
                <Link to="/boardgames">
                    <Button variant="dark">Volver</Button>
                </Link>
                <Link to={`/boardgames/${boardgameDetails._id}/edit`}>
                    <Button variant="success">Edit</Button>
                </Link>
                <Link to={`/boardgames/${boardgameDetails._id}/delete`}>
                    <Button variant="danger">Delete Game</Button>
                </Link>
            </Row>

        </Container>
    )
}

export default BoardgamesDetailsPage