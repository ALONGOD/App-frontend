import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { ProductIndex } from './pages/ProductIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { ProductDetails } from './pages/ProductDetails'
import { UserDetails } from './pages/UserDetails'
import { Cart } from './pages/Cart'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'

import { WomenProducts } from './pages/WomenProducts.jsx'
import { MenProducts } from './pages/MenProducts.jsx'
import { ShoesProducts } from './pages/ShoesProducts.jsx'
import { AccessoriesProducts } from './pages/AccessoriesProducts.jsx'

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <UserMsg />

            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="about" element={<AboutUs />}>
                        <Route path="team" element={<AboutTeam />} />
                        <Route path="vision" element={<AboutVision />} />
                    </Route>
                    <Route path="product" element={<ProductIndex />} />
                    <Route path="product/:productId" element={<ProductDetails />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="review" element={<ReviewIndex />} />
                    <Route path="chat" element={<ChatApp />} />
                    <Route path="admin" element={<AdminIndex />} />
                    <Route path="login" element={<LoginSignup />}>
                        <Route index element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                    <Route path="women" element={<WomenProducts />} />
                    <Route path="men" element={<MenProducts />} />
                    <Route path="shoes" element={<ShoesProducts />} />
                    <Route path="accessories" element={<AccessoriesProducts />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}