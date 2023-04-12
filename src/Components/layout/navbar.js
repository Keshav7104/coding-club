import Desk from "./Desk";
import Mobile from "./Mobile";

export default function Nav() {

    return(
            <div className='top'>
                <h1 id='coding'>Coding<br className='Small'/><span id='pundit'>Pundits</span></h1>
                <Desk />
                <Mobile />
            </div>
    );
}