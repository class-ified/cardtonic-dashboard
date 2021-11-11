import { SHORT_TIME_FORMAT, FULL_MONTH_YEAR_DATE_FORMAT } from "Constants/config"

import { useState, useEffect } from "react"
import { format } from "date-fns"

const useFormatDateTime = ({apidatetime}) => {
    const [dateTime, setDateTime] = useState({
        date: undefined,
        time: undefined
    })

    useEffect(() => {
        function handleDateTimeUpdate() {
            setDateTime({
                date: format(new Date(apidatetime), FULL_MONTH_YEAR_DATE_FORMAT),
                time: format(new Date(apidatetime), SHORT_TIME_FORMAT)
            })
        }
        handleDateTimeUpdate()
    }, [dateTime])

    return dateTime;
}

export default useFormatDateTime