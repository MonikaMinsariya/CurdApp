import React, { useState, useEffect } from 'react';
import Form from './Form';
import Table from './Table';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function File() {
    const [user, setUser] = useState({
        fName: '',
        lName: '',
        email: '',
    })
        ;
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem('allData')) ? JSON.parse(localStorage.getItem('allData')) : []);
    const [editing, setEditing] = useState(false);
    const [editIndex, setEditIndex] = useState('');
    const addSuccess = () => toast.success('Data Added Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    const editSuccess = () => toast.success('Data Update Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    const deleteSuccess = () => toast.success('Data Delete Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    // const addFail = () => toast.error('Please enter a Title', {
    //     position: toast.POSITION.BOTTOM_RIGHT
    // });
    useEffect(() => {
        localStorage.setItem('allData', JSON.stringify(allData));
    }, [allData])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((preval) => {
            return {
                ...preval,
                [name]: value
            }
        });
        console.log(user);

    }
    const handleSubmit = () => {
        // event.preventDefault();
        // setAllData((old) => {return [...old, user]; })
        if (editing) {
            const tempdata = allData;
            Object.assign(tempdata[editIndex], user);
            setAllData([...tempdata]);
            setEditing(false);
            editSuccess();
        } else {
            setAllData([...allData, user]);
            console.log(allData);
            setUser({
                fName: '',
                lName: '',
                email: '',
            })
            addSuccess();
        }
    }

    const handleDelete = (index) => {
        if (window.confirm("Are You Sure You Want To Delete?")) {
            let newuser = [...allData];
            newuser.splice(index, 1);
            setAllData(newuser);
            deleteSuccess();
        }
    }
    // const handleView = (itemVal) => {
    //     //let newLine = '\r';
    //     //let msg = 'name:' + itemVal.fName + " " + itemVal.lName + newLine + 'Email:' + itemVal.email;
    //     //alert(msg);


    // }
    const handleEdit = (index) => {
        const newuser = allData[index];
        console.log(newuser);
        setUser(newuser);
        setEditing(true);
        setEditIndex(index);
    }

    return (
        <div className='bg-dark'>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="dark"
                transition={Bounce}
            />
            <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                user={user}
                editing={editing}

            />;
            <Table
                allData={allData}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            //handleView={handleView}
            />

        </div>)
}

export default File;