// import About from '../Components/Cards/About';
//import Animation from './Animation.css';
import Parallex from "../Components/parallex/parallex"
export default function Home() {
    const start = () => {
        console.log("Hello World!!!");
    }
    return (
        <>
            {start()}
            <Parallex />
        </>
    )
}