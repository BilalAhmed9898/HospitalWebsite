import React, { useState, useEffect } from 'react'
import '../App.css';


export default function Appointments() {

    document.title = " Appointments | Al-Shams Hospital";

    const [empty, setEmpty] = useState()
    const [data, setData] = useState([])

    useEffect(() => {
        const allData = JSON.parse(localStorage.getItem("Appointment"))
        if(!allData){
            setEmpty(true)
        }
        else{
            setEmpty(false)
            setData(allData)
        }
    }, [])

    const deleteRow = (i) => {
        console.log("Clicked")
        const oldData = [...data]
        oldData.splice(i, 1)
        setData(oldData)
        localStorage.setItem("Appointment", JSON.stringify(oldData))
    }


    return (
        <div className='appointment'>
            <div className="container">
                <h1>{empty ? <span>You Have Not any Appointment </span> :<span>Your Appointments</span>}</h1>
                <div className='mainbox'>
                    {
                        data.map((item, i) => {
                            return (
                                <>
                                    <div className='data' key={i}>
                                        <p><span className='appointmentdata'>Patient Name:</span>{item.name}</p>
                                        <p><span className='appointmentdata'>Age:</span>{item.age}</p>
                                        <p><span className='appointmentdata'>Type:</span>{item.type}</p>
                                        <p><span className='appointmentdata'>Time:</span>{item.time}</p>
                                        <p><span className='appointmentdata'>Date:</span>{item.date}</p>
                                        <div className="close"><p onClick={() => deleteRow(i)}>Cancel Appointment</p></div>
                                    </div> <br />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
