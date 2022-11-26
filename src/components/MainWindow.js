import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import AuditInspection from '../pages/AuditInspection';
import IncidentManagement from '../pages/IncidentManagement';
import LearningManagement from '../pages/LearningManagement';
import MyResponsibilities from '../pages/MyResponsibilities';
import ObservationsFeedback from '../pages/ObservationsFeedback';
import PerformanceAnalytics from '../pages/PerformanceAnalytics';
import RiskManagement from '../pages/RiskManagement';
import LeftNav from './LeftNav'


function MainWindow() {
    return (
        <Router>
        <div className="py-4 px-6 flex md:gap-x-4">
                <LeftNav />
            <div className="xs:w-full md:w-4/5">
                
                    <Routes>
                        <Route path='/' element={<Navigate to="/audit-inspection" />} />
                        <Route path='/audit-inspection' element={<AuditInspection />} />
                        <Route path='/my-responsibilities' element={<MyResponsibilities />} />
                        <Route path='/incident-management' element={<IncidentManagement />} />
                        <Route path='/learning-management' element={<LearningManagement />} />
                        <Route path='/observations-feedback' element={<ObservationsFeedback />} />
                        <Route path='/performance-analytics' element={<PerformanceAnalytics />} />
                        <Route path='/risk-management' element={<RiskManagement />} />
                    </Routes>
            </div>
        </div>
        </Router>
    )
}

export default MainWindow
