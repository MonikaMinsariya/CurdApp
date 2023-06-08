import React from "react";

function Form(props) {
    return (

        <div className="bg-dark text-white ">

            <h1 className="text-center">DataBase</h1>
            {/* <div className="bg-secondary w-50 p-3" style={{ marginLeft: 380 }}> */}
            <div className="bg-secondary w-50 p-3 container">
                <form onSubmit={props.handleSubmit}>
                    firstName:
                    <input type="text" required className="form-control" name="fName" placeholder="enter your First Name" onChange={props.handleChange} value={props.user.fName} />
                    <br />

                    lastName:
                    <input type="text" required className="form-control" name="lName" placeholder="enter your Last Name" onChange={props.handleChange} value={props.user.lName} />
                    <br />

                    Email:
                    <input type="email" required className="form-control" name="email" placeholder="enter your email" value={props.user.email} onChange={props.handleChange} />
                    <br />

                <center><button type="submit" className="btn btn-primary" >{props.editing ? 'update' : 'submit'} </button></center> 
                </form>
            </div>
        </div>
    )
}

export default Form;