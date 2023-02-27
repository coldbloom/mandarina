import "flatpickr/dist/themes/material_blue.css";
import { Russian } from "flatpickr/dist/l10n/ru.js"

import Flatpickr from "react-flatpickr";

import icon from './../../assets/images/3.svg'
import rightArrow from './../../assets/images/right-arrow.svg'
import leftArrow from './../../assets/images/left-arrow.svg'

import React from 'react';
import './FlatPicker.scss'



const CustomInput = ({ value, defaultValue, inputRef, date, ...props }) => {
    return (
        <div className='search-box flatpickr-custom-input' ref={inputRef}>
            <p className='search-box-title'>Вылет</p>
            <div className='search-box-wrapper'>
                <img src={icon} alt=""/>
                {
                    date !== null
                    ? <p className='search-box-input'>{date}</p>
                    : <p className='search-box-input'>Дата</p>
                }
            </div>
        </div>)
};


const FlatPicker = ({array = []}) => {
    console.log(array, 'FlatPicker')

    const [date, setDate] = React.useState(null)
    const onchangeChange = (e) => {
        const str = JSON.stringify(e[0])
        let year = (str.slice(1,5))
        let mount = (str.slice(6,8))
        let day = ("0" + JSON.stringify(Number(str.slice(10,11)) + 1))
        const value = `${year}-${mount}-${day}`
        setDate(value)
    }

    return (
        <>
            <Flatpickr
                data-enable-time
                value={date}
                // onOpen={onOpen}
                onChange={e => onchangeChange(e)}
                locale={Russian}
                showMonths={1}
                shorthandCurrentMonth={false}
                position="below"
                static={true}
                // clickOpens={false}

                // allowInpuе={true}
                options={{
                    enable: array,
                    enableTime: false,
                    locale: Russian,
                    showMonths: 1,
                    weekNumbers: false,
                    shorthandCurrentMonth: false,
                    static: true,
                    nextArrow: `<img src=${rightArrow} />`,
                    prevArrow: `<img src=${leftArrow} />`,
                    minDate: "today",
                    //position: 'below',
                    // clickOpens: false,

                }}
                render={
                    ({defaultValue, value, ...props}, ref) => {
                        return <CustomInput defaultValue={defaultValue} inputRef={ref} date={date}/>
                    }
                }
            />
            <div className='box_vert_line'></div>
        </>
    );
};

export default FlatPicker;