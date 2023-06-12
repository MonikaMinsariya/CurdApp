
import React from "react";

function Modal(props) {
    return (
        <>
            <div class="modal d-block" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">DataBase</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul>
                                <li>Name: {props.viewUserData.fName}</li>
                                <li>Email: {props.viewUserData.email}</li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => props.handleClose()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;