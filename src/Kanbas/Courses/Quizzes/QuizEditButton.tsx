import React, { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Dropdown, Modal, Button } from "react-bootstrap";

export default function QuizEditButton({
    quizId,
    onDelete,
    onPublishToggle,
    published,
    onEdit,  // Add onEdit prop
  }: {
    quizId: string;
    onDelete: (quizId: string) => void;
    onPublishToggle: (quizId: string, newStatus: boolean) => void;
    published: boolean;
    onEdit: (quizId: string) => void;  // Add onEdit type definition
  }) {
    const [showModal, setShowModal] = useState(false);
  
    const handlePublishToggle = () => {
      onPublishToggle(quizId, !published);
    };
  
    const handleDeleteClick = () => {
      setShowModal(true);
    };
  
    const handleConfirmDelete = () => {
      onDelete(quizId);
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
            <Dropdown.Item onClick={() => onEdit(quizId)}>  {/* Use onEdit for the Edit action */}
              Edit
            </Dropdown.Item>
            <Dropdown.Item onClick={handleDeleteClick}>
              Delete
            </Dropdown.Item>
            <Dropdown.Item onClick={handlePublishToggle}>
              {published ? "Unpublish" : "Publish"}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  
        <Modal show={showModal} onHide={handleCancelDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this quiz?</Modal.Body>
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
  