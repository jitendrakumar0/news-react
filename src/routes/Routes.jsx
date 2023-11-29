import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTE_CONST } from '../constants/RouteConst'
import Home from '../pages/home/Home'
import PageNotFound from '../components/pageNotFound/PageNotFound'

const RouteComponent = () => {
  return (
    <Routes>
        <Route path={ROUTE_CONST.HOME_URL} element={<Home />} />
    </Routes>
  )
}

export default RouteComponent