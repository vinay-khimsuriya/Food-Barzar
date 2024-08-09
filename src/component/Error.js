import { useRouteError } from "react-router-dom";

export default function Error(){
    const err= useRouteError();
    console.log(err);

    return(
        <div>
            <h1>{err.status + " " + err.statusText}</h1>
            <h3>{err.data}</h3>
        </div>

    );
}