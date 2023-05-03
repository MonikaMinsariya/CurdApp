import React, { useState } from "react";
import Modal from './Modal';

function Table(props) {
    const [modalShow, setModalShow] = useState(false);
    const [viewUserData, setViewUserData] = useState([]);

    const handleView = (itemVal) => {
        setModalShow(true);
        setViewUserData(itemVal);
    }
    
    const handleClose = () => {
        setModalShow(false);
    }
    return (<>
        {modalShow &&
            <Modal
                handleClose={handleClose}
                viewUserData={viewUserData}
            />}
        <div className="bg-dark">
            {<table className=" table table-bordered table-striped table-dark">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allData.length > 0 ?
                        props.allData.map((itemVal, index) => {
                            return (
                                <tr key={itemVal.firstName}>
                                    <th scope="col">{index + 1}</th>
                                    <td>{itemVal.fName} {itemVal.lName}</td>
                                    <td>{itemVal.email}</td>
                                    <td >
                                        <button type='button' className="btn btn-danger ms-2" onClick={() => props.handleDelete(index)}>delete</button>
                                        <button type='button' className="btn btn-primary ms-2" onClick={() => props.handleEdit(index)}>Edit</button>
                                        <button type='button' className="btn btn-success ms-2" onClick={() => handleView(itemVal)}>View</button></td>
                                </tr>
                            )
                        })

                        :
                        <tr><td colSpan={4}>No Records Found</td></tr>


                    }
                </tbody>
            </table >}

        </div>
    </>)

}
export default Table;