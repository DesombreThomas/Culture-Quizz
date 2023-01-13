import React, {useState} from 'react';
import { Form } from 'semantic-ui-react'


const SelectFields = (props) => {

    const {label, option} = props;
    const [value, setValue] = useState("");


    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
     <div className="w-full h-auto">
            <Form className="flex flex-col flex-wrap w-full items-center">
                <label className='py-4 m-2 text-2xl text-black font-semibold'>{label}</label>
                <select value={value} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {option.map(( { id, name}) => ( 

                    <option defaultValue={id} key={id}>{name}</option>
                    ))}
                </select>
            </Form>
     </div>
    );
  }
  
  export default SelectFields;