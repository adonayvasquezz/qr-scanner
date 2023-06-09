import React, { useState } from 'react'
import QrReader from 'react-qr-reader-es6'
import css from './Scanner.module.css'
const Scanner = () => {
    const [qrData, setQrData] = useState('')
    const handleScan = (data: any) => {
        if (data) {
            console.log(data)
            setQrData(data)
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', alignItems:'center', flexDirection: 'column', justifyContent: 'center' }}>
                <h1>scanner 1</h1>

                <div style={{width:'25rem'}}>
                    <QrReader
                        delay={300}
                        facingMode='user'
                        onError={(e) => console.log('error is ', e)}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                    />
                </div>

                <h3 style={{ textAlign: 'center' }}>Data scanned: </h3>
                <p style={{ textAlign: 'center' }}>{qrData}</p>
            </div>
        </div>
    )
}

export default Scanner