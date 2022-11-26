import React from 'react'
import ElectricComponent from '../components/ElectricComponent'
import Head from '../components/Head'
import MetaData from '../components/MetaData'
import Footer from '../components/Footer'

function AuditInspection() {
    return (
        <div>
            <div>
                <Head />
            </div>
            <div className="mt-4">
                <MetaData />
            </div>
            <div className="mt-4">
                <ElectricComponent />
            </div>
            <div className="mt-4">
                <Footer />
            </div>
        </div>
    )
}

export default AuditInspection
