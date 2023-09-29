import {Button, Modal} from "react-bootstrap";
import React from "react";

export function MyModal(props) {
    const {action, element, onDelete} = props;
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Xóa {element?.name} {element?.contractNumber}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có muốn xóa  {element?.name} {element?.contractNumber} không?
                <div style={{color: "red"}}>Lưu ý hoạt động này không thể hoàn tác!</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="btn btn-outline-secondary" onClick={action}>
                    Close
                </Button>
                <Button variant="btn btn-outline-danger" onClick={onDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </>
    );
}