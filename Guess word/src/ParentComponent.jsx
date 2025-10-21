import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PureCompo from './PureComponent'

createRoot(document.getElementById('root')).render(
    <PureCompo />
)
