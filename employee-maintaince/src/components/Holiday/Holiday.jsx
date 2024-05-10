import react from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import styles from "./Holiday.module.css"
import Navbar from '../../components/Navbar/Navbar.jsx';
import Fotter from '../../components/Fotter/Fotter.jsx';

const columns = [
  {
    headerName : "SL NO", field:'serialNo'
  },
  {
    headerName : "Date", field:'date'
  },
  {
    headerName : "Occasion/Holiday", field: 'holiday'
  },
  {
    headerName : "Day", field: "day"
  }
]

const data =[
  { serialNo:  1, date: "January 01", holiday: "New Year's Day", day: "Monday" },
  { serialNo:  2, date: "January 26", holiday: "Republic Day", day: "Friday" },
  { serialNo:  3, date: "April 09", holiday: "Ugadi Festival", day: "Tuesday" },
  { serialNo:  4, date: "May 01", holiday: "Labor's Day", day: "Wednesday" },
  { serialNo:  5, date: "June 17", holiday: "Bakrid/Eid", day: "Monday" },
  { serialNo:  6, date: "August 15", holiday: "Independence Day", day: "Thursday" },
  { serialNo:  7, date: "October 02", holiday: "Gandhi Jayanti", day: "Wednesday" },
  { serialNo:  8, date: "Ocotber 31", holiday: "Deepavali", day: "Thursday" },
  { serialNo:  9, date: "November 01", holiday: "Kannada Rajyotsava", day: "Friday" },
  { serialNo:  10, date: "December 25", holiday: "Christmas Day", day: "Wednesday" }

]
export default function Holiday(){
  return(
    <div>
      <Navbar/>
    <div className={styles.container}>
      
      <h1> List of Holidays-2024 </h1>
      <div 
      className="ag-theme-quartz" // applying the grid theme
    style={{ height: 500 ,
      width: 800}} // the grid will fill the size of the parent container
    >
        <AgGridReact rowData={data} columnDefs={columns}/>
      </div>
    </div>
    <Fotter/>
    </div>
  )
}