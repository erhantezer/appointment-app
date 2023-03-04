import React from 'react'
import { useGlobalContext } from '../context/context'
import { Container } from 'react-bootstrap';

const AppointmentList = () => {
    const { appointments, setAppointments } = useGlobalContext();

    return (
        <Container className='p-2'>
            <h3 className='display-6 mb-2' style={{ color: "rgb(166,18,189)" }}>
                Appointment List
            </h3>
            <div>
                
            </div>
        </Container>
    )
}

export default AppointmentList