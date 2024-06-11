import LayoutHeader from "../../components/client/LayoutHeader"
import LayoutAside from "../../components/client/LayoutAside"
import { Outlet } from 'react-router-dom';

export default function Home(){

    return(
        <div className="flex pt-12 px-24 font-poppins">
            <LayoutAside/>
            <section className="pl-6 ml-auto w-[calc(100%-200px)] h-[2000px]">
                <LayoutHeader/>  
                <Outlet />
            </section>
        </div>
    )
}