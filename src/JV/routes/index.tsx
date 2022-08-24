import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Homepage } from '../pages'

export const RoutesBase = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                     <Homepage/>
                </Route>
                <Route path='*'>
                    <Navigate to='/' />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}