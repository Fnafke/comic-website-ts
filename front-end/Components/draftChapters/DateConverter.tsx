type Props = {
    date: Date
}

const DateConverter: React.FC<Props> = ({date}: Props) => {
    const convertDate = (date: Date) => {
        date = new Date(date);
        const now = new Date();
        const differenceInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

        if (differenceInDays === 0) return "Today";
        if (differenceInDays === 1) return "1 day ago";
        if (differenceInDays <= 6) return `${differenceInDays} days ago`;
        if (differenceInDays <= 13) return "1 week ago";
        if (differenceInDays <= 20) return "2 weeks ago";

        return date.toDateString();
  };

    return <>
    {convertDate(date)}
    </>
}

export default DateConverter