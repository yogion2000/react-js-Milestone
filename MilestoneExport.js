import React from "react";
import Csvdown from './Milestone'
// import CsvDownloadButton from 'react-json-to-csv';
import CsvDownloader from 'react-csv-downloader';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from "react";
import { CSVLink } from "react-csv";

export default function MilestoneExport(){
    const [datum,setdatum]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(details=>setdatum(details))
    },[])

    const csvdata= datum;


return(
    <div className="container-fluid row justify-content-around" style={{height:"100vh",width:"100vw"}}>
        <Csvdown></Csvdown>
        <CSVLink
        data={
            csvdata.map((index,value)=>(
                {
                  Id:index.id,
                  Title:index.title,
                  Price:index.price,
                  Description:index.description,
                  Category:index.category,
                  Image:index.image,
                  Rate:index.rating.rate,
                  Count:index.rating.count,
                }
        ))
        }><button style={{
            boxShadow:"inset 0px 1px 0px 0px #e184f3",
            background:"linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
            backgroundColor:"#c123de",
            borderRadius:"6px",
            border:"1px solid #a511c0",
            display:"inline-block",
            cursor:"pointer","color":"#ffffff",
            fontSize:"15px",
            fontWeight:"bold",
            padding:"6px 24px",
            textDecoration:"none",
            textShadow:"0px 1px 0px #9b14b3",
            width:"300px",
            height:"30px"
            }} className="dwnld">Download CSV</button></CSVLink>
    </div>
);
}