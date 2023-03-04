
import { Col, Container, Row } from 'react-bootstrap';
import { useGlobalContext } from '../context/context';
import AddModal from './AddModal';
import useSelectDrName from '../hooks/useSelectDrName';
import {useState} from "react"

const Doctors = () => {
    const [show, setShow] = useState(false);
    const {doctors} = useGlobalContext();
    const {selectedDrName, setSelectedDrName} = useSelectDrName()


    const handleClick = (drName) => {
        setSelectedDrName(drName);
        setShow(true)
    }


    return (
        <Container>
            <h3 className='display-6 mb-3' style={{color:"rgb(166, 18, 189)"}}>Our Doctors</h3>
            <Row className='justify-centent-center'>
                {doctors?.map((dr) => {
                    const {id, img, name, dep} = dr
                    return (
                        <Col key={id} xs={6} sm={4} md={3}>
                            <img 
                            src={img} 
                            alt={name}
                            className='img-thumbnail doctor-img'
                            onClick={() => handleClick(name)}
                            />
                            <h5 className='text-primary'>{name}</h5>
                            <h6>{dep}</h6>
                        </Col>
                        )
                })}
            </Row>
            <AddModal show={show} selectedDrName={selectedDrName} handleClose={() => setShow(false)}/>
        </Container>
    )
}

export default Doctors