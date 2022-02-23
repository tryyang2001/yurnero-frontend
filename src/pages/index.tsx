import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'

import { Routes as ROUTES } from 'constants/routes'

//Public Pages
import Home from './Home'
import AboutUs from './AboutUs'
import ComputerCentres from './ComputerCentres'
import ExternalWorkshops from './ExternalWorkshops'
import StudentDevelopementPlatform from './StudentDevelopementPlatform'
import Events from './Events'
import FAQ from './FAQ'
import Feedback from './Feedback'
import Contact from './Contact'
import Template from './Template'
import OurFamily from './AboutUs/OurFamily'
import VisionMission from './AboutUs/VisionMission'
import OurStructure from './AboutUs/OurStructure'
import ManagementComittee from './AboutUs/ManagementCommittee'
import TrainingWorkshops from './TrainingWorkshops'
import Creation from './Creation'
import Chariteach from './Chariteach'
import Cyberia from './Cyberia'
import PDPA from './PDPA'
const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.index} element={<Home />} />
        <Route path="*" element={<Navigate to={ROUTES.index} replace />} />
        <Route path="/" element={<Template />}>
          <Route path="about-us" element={<AboutUs />}>
            <Route path="our-family" element={<OurFamily />} />
            <Route path="vision-mission" element={<VisionMission />} />
            <Route path="our-structure" element={<OurStructure />} />
            <Route path="management-committee" element={<ManagementComittee />} />
          </Route>

          <Route path="computer-centres" element={<ComputerCentres />} />
          <Route path="external-workshops" element={<ExternalWorkshops />} />
          <Route path="sdp" element={<StudentDevelopementPlatform />} />
          <Route path="pdpa" element={<PDPA />} />
          <Route path="creation" element={<Creation />} />
          <Route path="chariteach" element={<Chariteach />} />
          <Route path="cyberia" element={<Cyberia />} />
          <Route path="events" element={<Events />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contact" element={<Contact />} />
          <Route path="training-workshops" element={<TrainingWorkshops />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
