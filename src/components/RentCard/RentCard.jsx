import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './RentCard.css'


const RentCard = ({ rentBoardgames }) => {

    return (
        <>

            {

                rentBoardgames?.map((elm) => {
                    return <div key={elm._id}>


                        <Card className='rentCard'>
                            <Link to={`/boardgames/${elm._id}`}>
                                <div className='myContainer'>
                                    <img className='overlayImg' src={elm.gameImg}></img>
                                </div>



                                <Card.Body>
                                    <Card.Title>{elm.age}</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>

                    </div>
                })
            }
        </>
    )
}

export default RentCard