import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { TextField , Grid, Typography, Button} from '@mui/material'
import "./formulario.css"




const Formulario = () => {
    
    const {handleSubmit, handleChange, values, setFieldValue, errors} = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            contraseña: ""
        },
        onSubmit: (data) => {
            console.log(data)
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Debes ingresar un Nombre"),
            email: Yup.string().required("Debes ingresar un Mail"),
            contraseña: Yup.string().required("Debes ingresar una Contraseña")
        }),
    })

    return (
    <div>
        <Typography color="primary" variant="h2" align="center">Formulario de Registro</Typography>
        <form className="form-container" onSubmit={handleSubmit}>
            <Grid container alignItems={"center"} justifyContent={'space-evenly'} spacing={2} sx={{width: '100%'}}>
                <Grid item xs={12} md={7}>
                    <TextField type="text" label="Ingrese su Nombre" variant="outlined" 
                    fullWidth 
                    // name="nombre" 
                    onChange={(e) => {
                        setFieldValue("nombre", e.target.value);
                    }}
                    helperText={errors.nombre} 
                    value={values.nombre}
                    error={errors.nombre}/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <TextField type="email" label="Ingrese su Mail" variant="outlined" 
                    fullWidth name="email" onChange={handleChange}
                    helperText={errors.email} 
                    value={values.email}
                    error={errors.email}/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <TextField type="password" label="Ingrese su Contraseña" variant="outlined" 
                    fullWidth name="contraseña" onChange={handleChange} 
                    helperText={errors.contraseña}
                    value={values.contraseña}
                    error={errors.contraseña}/>
                </Grid>
            </Grid>
            <Button type="submit" variant="contained">Enviar</Button>   
        </form>
    </div>
    )
}

export default Formulario