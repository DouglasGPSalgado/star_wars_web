import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/inicio" element={<Button variant="contained" color="primary">Teste</Button>}/>
            <Route path="*" element={<Navigate to="/inicio"/>}/>
        </Routes>
    );
}