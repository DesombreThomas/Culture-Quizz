import React from 'react'
import { Button } from 'semantic-ui-react'
import SelectFields from "../SelectFields";
import bg from "../../assets/bg.png"
import TextField from '../TextField';


function Settings () {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

return (
   <div className='bg h-screen' style={{backgroundImage: `url(${bg}) `}}>
    <div className='flex flex-col items-center justify-center'>
        <h1 className="flex justify-center text-5xl py-20 text-[#F8EE4F]">CultureQuizz</h1>
            <form onSubmit={handleSubmit}>
                <SelectFields label="Category" />
                <SelectFields label="Difficulty" />
                <SelectFields label="Type" />
                <TextField />
            </form>
            <div className='p-10'>
                <Button   color='violet'>Get Started !</Button>
            </div>
    </div>
   </div> 
)


    };
  
  export default Settings;