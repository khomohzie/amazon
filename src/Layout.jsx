import React, { Fragment } from 'react'
import Media from 'react-media'
import Header from './Header'
import MobileHeader from './MobileHeader'

const Layout = () => {
    return (
        <div>
            
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileHeader />}
                        {matches.medium && <Header />}
                        {matches.large && <Header />}
                    </Fragment>
                )}
            </Media>

        </div>
    )
}

export default Layout
