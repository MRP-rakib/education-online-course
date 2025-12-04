'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
interface propsType {
    children: React.ReactNode
}
function StoreProvider({ children }: propsType) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider