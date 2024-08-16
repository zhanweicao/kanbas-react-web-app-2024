import React, { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Dropdown, Modal, Button } from "react-bootstrap";

export default function QuestionEditButton({
    questionId,
    onDelete,
    onEdit,
    }: {
    questionId: string;
    onDelete: (questionId: string) => void;
    onEdit: (questionId: string) => void;
    }) {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(questionId);
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle as="button" className="btn btn-light p-0 border-0">
                    <IoEllipsisVertical className="fs-4" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(questionId)}>
                        Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleDeleteClick}>
                        Delete
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Modal show={showModal} onHide={handleCancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this question?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}