import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

function EditTheater() {
    let params = useParams()
    const navigate = useNavigate()
    useEffect(async () => {
        try {
            let userData = await axios.get(`http://localhost:3000/theaters/${params.id}`)
            formik.setValues(userData.data)
        } catch (error) {
            console.log(error)
        }

    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            city: '',
            seates: '',
            phone: ''
        },
        onSubmit: async (values) => {
            delete values._id;
            try {
                await axios.put(`http://localhost:3000/theaters/${params.id}`,values)
            navigate("/admindashboard")
              } catch (error) {
                console.log(error)
              }
        }
    })



    return (
        <>

            <div className='container mt-5'>
                <h4 className='mb-5'>Edit Theater</h4>
                <form onSubmit={formik.handleSubmit}>

                    <div class="form-outline mb-4">
                        <input type="text" name='name' class="form-control" onChange={formik.handleChange} value={formik.values.name} required />
                        <label class="form-label" >theater name</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="text" class="form-control" name='city' onChange={formik.handleChange} value={formik.values.city} required />
                        <label class="form-label">City</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="number" class="form-control" name='seates' onChange={formik.handleChange} value={formik.values.seates} required />
                        <label class="form-label">Number of Seats</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="number" class="form-control" name='phone' onChange={formik.handleChange} value={formik.values.phone} required />
                        <label class="form-label">Phone</label>
                    </div>


                    <button type="submit" class="btn btn-primary btn-block mb-4">Confirm Edit theater</button>
                </form>
            </div>
        </>
    )
}

export default EditTheater