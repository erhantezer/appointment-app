import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const AddModal = () => {



    return (
        <>
            <Modal show="" onHide="">
                <Modal.Header closeButton>
                    <Modal.Title>Appointment for </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="datetime">
                            <Form.Label>Day&Time</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="success" type="submit" className="me-2">
                                Save
                            </Button>
                            <Button variant="danger" >
                                Close
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddModal