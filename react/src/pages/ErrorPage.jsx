import { Link } from 'react-router-dom'
import NotFound from '../assets/icons/error/error.svg'

export default function Error () {
    return (
        <div className="flex flex-col items-center justify-center xl:h-[500px]">
            <div className="gap-6 flex-col justify-center text-center items-center">
                <img src={NotFound} alt="Error" className="xl:w-[132px] mx-auto" />
                <h1 className="text-red-800 lg:text-[44px] font-bold lg:leading-[58px]">404 ERROR</h1>
                <p className="text-black lg:text-4xl lg:leading-[46px]">Sorry, page not found.</p>
            </div>
            <Link className="btn btn-form-secondary btn-color-primary text-xs mt-[46px]" to="/dashboard" end>Back to Home</Link>
        </div>
    )
}