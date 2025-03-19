import { useEffect, useState } from "react";
import useInterval from "use-interval";

type Props = {
    date: Date,
    chapterNumber: number;
}


const Countdown: React.FC<Props> = ({date, chapterNumber}: Props) => {
    const [currenttime, setCurrentTime] = useState<Date>(new Date());
    const [countdown, setCountdown] = useState<{days: string | number, hours: string | number, minutes: string | number, seconds: string | number}>({days: 0, hours: 0, minutes: 0, seconds: 0});
    const [statusMessage, setStatusMessage] = useState<string>('');
    
    const calculateCountdown = () => {
        const calculated_time = date.getTime() - currenttime.getTime();
        
        const days = Math.floor(calculated_time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((calculated_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((calculated_time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((calculated_time % (1000 * 60)) / 1000);

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            setStatusMessage("New Chapter has been released!")
            return;
        }

        const formatNumber = (num: number) => num < 10 ? `0${num}` : num;

        setCountdown({
            days: formatNumber(days),
            hours: formatNumber(hours),
            minutes: formatNumber(minutes),
            seconds: formatNumber(seconds)
        });
    }

    useInterval(() => {
        setCurrentTime(new Date());
    }, 1000)

    useEffect(() => {
        calculateCountdown();
    }, [currenttime]);

    return <>
        <div className="text-white text-center font-noto-serif-jp text-6xl font-bold pt-6 max-lg:m-auto max-lg:pt-6">
            Chapter {chapterNumber} releases in: {statusMessage? statusMessage : <p>{countdown.days}:{countdown.hours}:{countdown.minutes}:{countdown.seconds}</p>}
        </div>
    </>
}

export default Countdown;