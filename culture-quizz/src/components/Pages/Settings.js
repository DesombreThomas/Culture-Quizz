import React from 'react'
import { Button, Segment, Dimmer, Loader, Advertisement } from 'semantic-ui-react'
import SelectFields from "../SelectFields";
import bg from "../../assets/bg.png"
import TextField from '../TextField';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';



function Settings () {
    const {response, error, loading} = useAxios({ url: "/api_category.php"})
    const navigate = useNavigate();

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
        { id: "multiple", name: "Multiple Choice"},
        { id: "boolean", name: "True or False"}
    ]

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    // Permet la redirection vers la page question lors du clic sur le bouton
    const handleClick = (evt) => {
        evt.preventDefault();
        navigate(`/questions`);
    }

return (
   <div className='bg h-screen' style={{backgroundImage: `url(${bg}) `}}>
    <div className='flex flex-col items-center justify-center'>
        <h1 className="flex justify-center text-5xl py-20 text-[#F8EE4F]">Culture Quizz</h1>
        <h2 className='bg-slate-100 bg-opacity-75 shadow-md shadow-[#040c16] p-3 rounded'>Choose your settings !</h2>
            <div className='bg-slate-100 bg-opacity-25 shadow-md shadow-[#040c16] p-3 w-[80%] rounded' onSubmit={handleSubmit}>
                <SelectFields option={response.trivia_categories} label="Category" />
                <SelectFields option={difficultyOptions} label="Difficulty" />
                <SelectFields option={typeOptions} label="Type" />
                <TextField />
            </div>
            <div className='p-10'>
                <Button onClick={handleClick}  color='violet'>Get Started !</Button>
            </div>
    </div>
   </div> 
)


    };
  
  export default Settings;