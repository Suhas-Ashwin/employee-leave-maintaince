import react from "react";
import Calander from "../../components/Calander/Calander.jsx";
import Grid from '@mui/material/Grid';
import styles from "./Homepage.module.css";
import Navbar from '../../components/Navbar/Navbar.jsx';
import Fotter from '../../components/Fotter/Fotter.jsx';

export default function Homepage(){

  return(
    <div >
      <Navbar/>
      <div className={styles.outterContainer}>
        <Grid container spacing={2}>
          <Grid items sm={12} md={8} lg={8}>
            <h1 className={styles.heading}>Welcome to Chelsio Employee Home page</h1>
            <p className={styles.text}> Our comprehensive web page serves as a centralized platform meticulously designed for the systematic management and oversight of employee leaves, offering a user-friendly interface for seamless tracking, recording, and monitoring of all leave-related activities and ensuring efficient coordination between employees and management.</p>
          </Grid>
          <Grid items sm={12} md={4} lg={4}>
            <div className={styles.innerContainer}>
              <Calander/>
            </div>
          </Grid>

        </Grid>
      </div>
      <Fotter/>
    </div>
  )
} 