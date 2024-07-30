import NavigationBar from './NavigationBar';
import {LayoutProps} from '../interface/Layout/Layout.js';

const Layout = ({children}:LayoutProps) => {
    return (

        <>
            <NavigationBar />
            <>
                {children}
            </>
        </>
    )
}


export default Layout