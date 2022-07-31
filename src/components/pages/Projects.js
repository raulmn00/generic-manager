import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
export default function Projects() {
    const location = useLocation();
    let message = "";
    if (location.state) {
        message = location.state.message;
    }

    return (
        <div>
            <h2>Ours Projects</h2>
            {message && <Message type="sucess" text={message} />}
        </div>
    );
}
