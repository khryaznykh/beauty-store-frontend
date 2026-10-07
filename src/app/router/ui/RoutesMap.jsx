import { Route, Routes } from "react-router";
import { RoutesConfig } from "../config/RoutesConfig";
// import  SuspenceWrapper  from "./SuspenseWrapper";
// import { IsAdminRoutes } from "./IsAdminRoutes";


export const AppRouter = () => {

    return(

    <Routes>
        { Object.values(RoutesConfig).map(({ path, element, AdminOnly }) => (
            <Route
                key={path}
                path={path}
                element={element }/>
        ))
            // <Route
            //     key={path}
            //     path={path}
            //     element={
            //     AdminOnly ? 
            //         <IsAdminRoutes >
            //             <SuspenceWrapper component={element}/>
            //         </IsAdminRoutes> 
            //             : 
            //             <SuspenceWrapper component={element}/>}
            // />
            // ))
        }
    </Routes>

    )
}
