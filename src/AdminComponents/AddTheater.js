import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import {useNavigate} from "react-router-dom";
function AddTheater() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      seates: '',
      phone : ''
    },
    onSubmit: async (values) => {

      try {
        await axios.post("https://guvi-hackathon2-backend2.herokuapp.com/create-theaters", values)
        navigate("/admindashboard")
      } catch (error) {
        console.log(error)
      }
    }

  })

  return (
    <>

      <div className='container mt-5'>
        <h4 className='mb-5'>Add New Theater</h4>
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


          <button type="submit" class="btn btn-primary btn-block mb-4">Add new theater</button>
        </form>
      </div>
    </>
  )
}

export default AddTheater
