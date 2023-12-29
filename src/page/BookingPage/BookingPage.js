import React from 'react'
import { useMediaQuery } from 'react-responsive'
import DeskTopBooking from './DeskTopBooking'
import TabletBooking from './TabletBooking'
import MobileBooking from './MobileBooking'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1279 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
export default function BookingPage() {
    return (
        <div>
            <Desktop>
                <DeskTopBooking />
            </Desktop>
            <Tablet>
                <TabletBooking />
            </Tablet>
            <Mobile>
                <MobileBooking />
            </Mobile>

        </div>
    )
}
