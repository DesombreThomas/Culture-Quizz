import React from 'react'
import { Button, Segment, Dimmer, Loader, Advertisement } from 'semantic-ui-react'
import SelectFields from "../SelectFields";
import bg from "../../assets/bg.png"
import TextField from '../TextField';
import useAxios from '../../hooks/useAxios';


function Settings () {
    const {response, error, loading} = useAxios({ url: "/api_category.php"})
    console.log(response);

    if(loading) {
        return (
            <Segment className='h-screen'>
            <Dimmer active>
              <Loader size='massive'>Loading</Loader>
            </Dimmer>
          </Segment>  
        )
    }

    if(error) {
        return (
          <div>
            <Advertisement unit='leaderboard' test='Oops Something went wrong !' />
          </div>  
        )
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy"},
        { id: "medium", name: "Medium"},
        { id: "hard", name: "Hard"},
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choices"},
        { id: "boolean", name: "True or False"}
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

return (
   <div className='bg h-screen' style={{backgroundImage: `url(${bg}) `}}>
    <div className='flex flex-col items-center justify-center'>
        <h1 className="flex justify-center text-5xl py-20 text-[#F8EE4F]">CultureQuizz</h1>
            <div onSubmit={handleSubmit}>
                <SelectFields option={response.trivia_categories} label="Category" />
                <SelectFields option={difficultyOptions} label="Difficulty" />
                <SelectFields option={typeOptions} label="Type" />
                <TextField />
            </div>
            <div className='p-10'>
                <Button  color='violet'>Get Started !</Button>
            </div>
    </div>
   </div> 
)


    };
  
  export default Settings;