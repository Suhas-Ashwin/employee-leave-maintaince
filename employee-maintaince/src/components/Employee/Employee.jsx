import react from "react"
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import styles from "./Employee.module.css"
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar/Navbar.jsx';
import Fotter from '../../components/Fotter/Fotter.jsx';

export default function Employee() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmited, setIsSubmit] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  /*const columns = [
    {
      headerName : "SL NO", field:'serialNo'
    },
    {
      headerName : "Name", field:'name'
    },
    {
      headerName : "Team/Department", field: 'team'
    },
    {
      headerName : "Leaves Remaining", field: "LeavesRemaining"
    }
  ]*/
  useEffect(()=>{
    setDisplayData(data)
  },[]);
  const data =[
    { serialNo:  1, name: "Bimal M Abharim", team: "QA", LeavesRemaining: 10 },
    { serialNo:  2, name: "Sreekanth V", team: "QA", LeavesRemaining: 21  },
    { serialNo:  3, name: "Veeresh U.K", team: "QA", LeavesRemaining: 24 },
    { serialNo:  4, name: "Suhas Lokesha", team: "QA", LeavesRemaining: 12 },
    { serialNo:  5, name: "Anirudh Kumar", team: "QA", LeavesRemaining: 18  },
    { serialNo:  6, name: "Surendra M", team: "Developer", LeavesRemaining: 10 },
    { serialNo:  7, name: "Bharath P", team: "Developer", LeavesRemaining: 21  },
    { serialNo:  8, name: "Shourya ", team: "Developer", LeavesRemaining: 24 },
    { serialNo:  9, name: "Ammar A", team: "Developer", LeavesRemaining: 12 },
    { serialNo:  10, name: "Shashank Singh", team: "Developer", LeavesRemaining: 18 },
    { serialNo:  11, name: "Nilesh Mundphen", team: "Hardware", LeavesRemaining: 10 },
    { serialNo:  12, name: "Akilesh Yadav", team: "Hardware", LeavesRemaining: 21  },
    { serialNo:  13, name: "Rajath Padidar ", team: "Hardware", LeavesRemaining: 24 },
    { serialNo:  14, name: "Vishak Vijaykumar", team: "Hardware", LeavesRemaining: 12 },
    { serialNo:  15, name: "Rahul Char", team: "Hardware", LeavesRemaining: 18 },
    { serialNo:  16, name: "Sharad Patel ", team: "Syatem admin", LeavesRemaining: 13 },
    { serialNo:  17, name: "Pavitra Shreeram", team: "Admin", LeavesRemaining: 15 },
    { serialNo:  18, name: "Rchitha Reddy", team: "Admin", LeavesRemaining: 18 },
  ]
  return (
    <div>
      <Navbar/>
    <div className={styles.container}>
      
      <h1> Leave details of Employee </h1>
      {/*<div 
      className="ag-theme-quartz" // applying the grid theme
    style={{ height: 500 ,
      width: 800}} // the grid will fill the size of the parent container
    >
        <AgGridReact rowData={data} columnDefs={columns}/>
    </div>*/}
    <table className={styles.customTable}>
      <thead>
        <tr>
          <th>SL NO</th>
          <th>Name</th>
          <th>Team</th>
          <th>Leaves Remaining</th>
        </tr>
      </thead>
      <tbody>
        {displayData.map((item) => (
          <tr key={item.serialNo}>
            <td>{item.serialNo}</td>
            <td>{item.name}</td>
            <td>{item.team}</td>
            <td>{item.LeavesRemaining}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button> Button </button>
    </div>
    
    </div>
  )
}