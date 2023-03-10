import React from 'react';
import OfferComp from "../componets/OfferComp/OfferComp";
import {bestHotels} from "../assets/data/bestHotels";
import {popularHotel} from "../assets/data/popularHotel";
import IndividualOffer from "../componets/IndividualOfferer";
import PrincipleWork from "../componets/PrincipleWork/PrincipleWork";
import ReviewSlider from "../componets/rewiewSlider/ReviewSlider";
import ArticlesComp from "../componets/ArticlesComp/ArticlesComp";
import PopularDestinations from "../componets/PopularDestinations/PopularDestinations";
import MailingComp from "../componets/MailingComp/MailingComp";
import InviteComp from "../componets/InviteComp/InviteComp";
import Header from "../componets/Header";

const Home = () => {
    return (
        <>
            <div className='mainBg flex flex-col items-center'>
                <Header/>
                <InviteComp/>
            </div>
            <main className='max-w-full'>
                <OfferComp data={bestHotels} title="Лучшие предложения"
                           description="Предложения, которые могут быть интересны"/>
                <OfferComp data={popularHotel} title="Поппулярные предложения"
                           description="Предложения, которые могут быть интересны"/>
                <IndividualOffer/>
                <PrincipleWork/>
                <ReviewSlider/>
                <ArticlesComp/>
                <PopularDestinations/>
                <MailingComp/>
            </main>
        </>
    );
};

export default Home;