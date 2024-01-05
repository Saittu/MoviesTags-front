import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./Auth.routes";
import { PagesRoutes } from "./Pages.routes";

export function Routes(){
    return (
        <BrowserRouter>
            <AuthRoutes/>
        </BrowserRouter>
    )
}