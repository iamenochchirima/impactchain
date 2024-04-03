import React, { FC, useEffect, useState } from 'react'
import { IOTDevice, Measurement } from '../../../hooks/declarations/impact_chain_data/impact_chain_data.did'
import UploadDocs from './UploadDocs'
import LinkDevice from './LinkDevice'

type Props = {
    measurement: Measurement
    displayedMeasurements: Measurement[]
    setDisplayedMeasurements: (measurements: Measurement[]) => void
    }

const MeasurementRecords: FC<Props> = ({measurement,  displayedMeasurements, setDisplayedMeasurements}) => {

    const [uploadDocs, setUploadDocs] = useState<boolean>(false)
    const [linkDevice, setLinkDevice] = useState<boolean>(false)
    const [goal, setGoal] = useState<string>('')
    const [iotDevice, setIotDevice] = useState<IOTDevice| null>(null)
    const [docs, setDocsUrls] = useState<string[]|  null>(null)

    useEffect(() => {
        setGoal("")
        setDocsUrls(null)
        setIotDevice(null)
    }, [])

    useEffect(() => {
    
        if (docs) {
            const updatedMeasurement : Measurement = {
                ...measurement,
                documents: docs
            }
            setDisplayedMeasurements(displayedMeasurements.map((m) => m.name === measurement.name ? updatedMeasurement : m))
        }
        if (goal !== '') {
            const updatedMeasurement : Measurement = {
                ...measurement,
                goal: [goal]
            }
            setDisplayedMeasurements(displayedMeasurements.map((m) => m.name === measurement.name ? updatedMeasurement : m))
        }
    }, [docs, goal])

    useEffect(() => {
        if (iotDevice) {
            const updatedMeasurement : Measurement = {
                ...measurement,
                iotDevice: [iotDevice]
            }
            const updatedMeasurements = displayedMeasurements.map((m) => m.name === measurement.name ? updatedMeasurement : m)
            console.log("updated measurements", updatedMeasurements)
            setDisplayedMeasurements(updatedMeasurements)
        }
    }, [iotDevice])

    console.log("displayed measurements in MR", displayedMeasurements)

    console.log("iot device in MR", iotDevice)
   
  return (
    <div className='text-white px-5 py-3'>
        <h1>{measurement.name}</h1>
        <div className="mt-3 flex items-center gap-5">
            <button
            disabled={docs !== null}
            onClick={() => setUploadDocs(true)}
             className='bg-white px-4 py-2 text-black rounded-3xl'>
                {docs ? 'Documents uploaded' : 'Upload your documents'}
            </button>
            <button 
            onClick={() => setLinkDevice(true)}
            className='bg-white px-4 py-2 text-black rounded-3xl'>
                Link your IoT device
            </button>
        </div>
        <div className="w-full flex flex-col p-3 bg-gray-400 rounded-3xl mt-3">
            <label className='text-white'>Your Goal</label>
            <textarea
            value={goal}    
            onChange={(e) => setGoal(e.target.value)}
             className='h-18 bg-gray-400 appearance-none border border-gray-800 p-1 rounded mt-2 outline-none' />
        </div>
        {uploadDocs && <UploadDocs {...{setUploadDocs, setDocsUrls}} />}
        {linkDevice && <LinkDevice {...{setLinkDevice, setIotDevice}} />}
    </div>
  )
}

export default MeasurementRecords