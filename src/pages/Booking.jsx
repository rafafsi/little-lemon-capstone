import BookingForm from "../components/BookingForm"
import { FormProvider } from "../context/FormContext"

const Booking = () => {
    return(
        <FormProvider>
            <BookingForm />
        </FormProvider>
    )
}

export default Booking