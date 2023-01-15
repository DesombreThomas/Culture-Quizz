import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react'
import { changeCategory, changeDifficulty, changeType } from '../Actions';


const SelectFields = (props) => {

    const {label, option} = props;
    const [value, setValue] = useState("");
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setValue(e.target.value);
        switch(label) {
            case "Category":
                dispatch(changeCategory(e.target.value));
                break;
                case "Difficulty":
                    dispatch(changeDifficulty(e.target.value));
                    break;
                    case "Type":
                        dispatch(changeType(e.target.value));
                        break;
                default:
                    return;
        }
    };

    return (
     <div className="w-full h-auto">
            <Form className="flex flex-col flex-wrap w-full items-center">
                <label className='py-4 m-2 text-2xl text-black font-semibold'>{label}</label>
                <select value={value} onChange={handleChange}>
                    {option.map(( { id, name}) => ( 

                    <option value={id} key={id}>{name}</option>
                    ))}
                </select>
            </Form>
     </div>
    );
  }
  
  export default SelectFields;