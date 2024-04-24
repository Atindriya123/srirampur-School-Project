"use client"
import { Heading, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import AdmitForm from './AdmitForm';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    function calculateTimeLeft() {
        const now = new Date();
        const targetDate = new Date('2023-12-22T23:00:00'); // Replace with your target date
    
        const difference = targetDate - now;
    
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Ensure seconds are rounded down
    
            return {
                days,
                hours,
                minutes,
                seconds,
            };
        } else {
            // Countdown is over
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
    }
    

    if (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0) {
        return (
            <>
                <Image src='/img/stopwatch.gif' width={'250px'} />
                <Heading textAlign={'center'}>{`${timeLeft.days} days ${timeLeft.hours} hours ${timeLeft.minutes} minutes ${timeLeft.seconds} seconds`}</Heading>
            </>
        );
    } else {
        return (
            <AdmitForm />
        );
    }
};

export default Countdown;
