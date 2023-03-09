import BookingForm from "../components/BookingForm"
import { FormProvider } from "../context/FormContext"
import {fetchAPI} from "../bookingAPI"
import { useReducer } from "react"

const Booking = () => {
    const updateTimes = (date) => {
        return fetchAPI(date)
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output)

    return(
        <FormProvider>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </FormProvider>
    )
}

export default Booking