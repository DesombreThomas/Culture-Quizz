import { useDispatch } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { changeAmountOfQuestions } from '../Actions';

const TextField = () => {

    const dispatch = useDispatch();
    const handleChange = (evt) => {
        dispatch(changeAmountOfQuestions(evt.target.value))
    }

    return (
        <div className="w-full h-auto mt-3">
            <Form className="flex-wrap w-full items-center">
                    <label className="md:text-2xl text-xl text-[#003554] font-semibold flex justify-center py-4 m-2">Amount of questions</label>
                    <input onChange={handleChange} type="number" placeholder='Maximum 50'></input>
            </Form>

        </div>
    )
}

export default TextField;