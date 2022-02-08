import { Container, Spinner } from "react-bootstrap";
import useStatistics from "../../hooks/useStatistics";
import Devs from "./Devs";
import AboutHead from "./AboutHead";
import Stats from "./Stats";
import DataSources from "./DataSources";
import Tools from "./Tools";
import Loading from "../Loading";

const About = () => {
    const { devs, numCommits, numIssues } = useStatistics();
    const allDevs = devs?.filter((dev) => dev.commits > 0);
    return (
        <Container>
            <AboutHead />
            {!devs ? (
                <Loading />
            ) : (
                <Devs devs={allDevs} />
            )}
            <hr className="mt-5" />
            <Stats numCommits={numCommits} numIssues={numIssues} />
            <hr className="mt-5" />
            <DataSources />
            <hr className="mt-5" />
            <Tools />    
            <hr className="mt-5" />
            <a href="https://www.youtube.com/watch?v=AtbX7xlNhQM"><h2 className="mb-5">Presentation Video</h2></a>
        </Container>
    );
};

export default About;
