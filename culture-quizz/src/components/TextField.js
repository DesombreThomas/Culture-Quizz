import { Form } from 'semantic-ui-react'

const TextField = () => {

    const handleChange = () => {

    }

    return (
        <div className="w-full h-auto mt-3">
            <Form className="flex-wrap w-full items-center">
                    <label className="text-2xl text-black font-semibold flex justify-center p-2">Amount of questions</label>
                    <input onChange={handleChange} type="number" placeholder='Amount of Questions'></input>
            </Form>

        </div>
    )
}

export default TextField;