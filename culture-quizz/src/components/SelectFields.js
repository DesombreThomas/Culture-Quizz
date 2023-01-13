import React, {useState} from 'react';
import { Form, Select } from 'semantic-ui-react'


const category = [
    { key: 'sp', value: 'sp', text: 'Sports' },
    { key: 'tv', value: 'tv', text: 'Tv' },
    { key: 'vg', value: 'vg', text: 'Video games' },
]

const SelectFields = props => {

    const {label} = props;
    const [value, setValue] = useState("");

    const handleChange = () => {

    };

    return (
     <div className="w-full h-auto">
            <Form className="flex flex-col flex-wrap w-full items-center">
                <label className='py-4 m-2 text-2xl text-black font-semibold'>{label}</label>
                <Select className='test' value={value} label={label} onChange={handleChange} placeholder='Choose a category' options={category} />
            </Form>
     </div>
    );
  }
  
  export default SelectFields;