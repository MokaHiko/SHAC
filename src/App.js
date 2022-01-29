import { Container } from "@mui/material";
import { Route, Routes } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import ProjectSelect from "./Components/SHAC/ProjectSelect";
import TimeCard from "./Components/SHAC/TimeCard/TimeCard";
import ApplicationForm from "./Components/WorkPage/ApplicationForm/ApplicationForm";
import WorkPage from "./Components/WorkPage/WorkPage";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/application" element={<ApplicationForm/>} />
          <Route path="/work/projects" element={<ProjectSelect />} />
          <Route path="/work/projects/cana" element={<TimeCard />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
