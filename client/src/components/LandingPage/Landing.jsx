
import { useNavigate } from 'react-router-dom';


export default function Landing() {

    const navigate = useNavigate()


 
    return(
        <div>
            <h1>Bienvenido a mi PI</h1>
            
                <button onClick={() => navigate("/home")}>Home</button>

        </div>
    )
}