import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
function EditMovie() {

    let params = useParams()
    const navigate = useNavigate()
    useEffect(async () => {
        try {
            let movieData = await axios.get(`http://localhost:3000/movies/${params.id}`)
            formik.setValues(movieData.data)
        } catch (error) {
            console.log(error)
        }

    }, [])

    const formik = useFormik({
        initialValues: {
            imgUrl: '',
            name: '',
            genre: '',
            rating : '',
              date : '',
          },
        onSubmit: async (values) => {
            delete values._id;
            try {
                await axios.put(`http://localhost:3000/movies/${params.id}`,values)
            navigate("/movielist")
              } catch (error) {
                console.log(error)
              }
        }
    })


    return (
        <>

            <div className='container mt-5'>
                <h4 className='mb-5'>Edit Movie</h4>
                <form onSubmit={formik.handleSubmit}>

                    <div class="form-outline mb-4">
                        <input type="text" name='imgUrl' id="form6Example3" class="form-control" onChange={formik.handleChange} value={formik.values.imgUrl} required/>
                        <label class="form-label" for="form6Example3">Add image URL</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="text" name="name" class="form-control" onChange={formik.handleChange} value={formik.values.name} required/>
                        <label class="form-label" >Movie name</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="text" name="genre" class="form-control" onChange={formik.handleChange} value={formik.values.genre} required/>
                        <label class="form-label">Genre</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="number" name="rating" class="form-control" onChange={formik.handleChange} value={formik.values.rating} required/>
                        <label class="form-label" >Rating</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="date" name="date" class="form-control" onChange={formik.handleChange} value={formik.values.date} required/>
                        <label class="form-label">Released On</label>
                    </div>


                    <button type="submit" class="btn btn-primary btn-block mb-4">Confirm Edit Movie</button>
                </form>
            </div>
        </>
    )
}

export default EditMovie