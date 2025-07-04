import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import Newletters from "../components/Newletters";
const Home = ()=> {
    return(
        <div className='mt-10'>
            <MainBanner/>
            <Categories />
            <BestSeller />
            <BottomBanner />
            <Newletters />
        </div>
    )

}
export default Home