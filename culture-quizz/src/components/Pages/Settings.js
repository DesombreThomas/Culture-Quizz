import React from 'react'
import { Segment, Dimmer, Loader, Advertisement } from 'semantic-ui-react'
import SelectFields from "../SelectFields";
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
   <div className='bg h-screen background--custom'>
    <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className="title flex justify-center md:text-8xl text-4xl p-10 text-[#003554] ">Culture Quiz</h1>
        <h2 className=' md:text-3xl text-2xl text-purple-700 settings'>Choose your settings !</h2>
            <div className='bg-slate-100 bg-opacity-25 shadow-md shadow-[#040c16] p-10 my-5 w-[80%] md:w-[50%] rounded' onSubmit={handleSubmit}>
                <SelectFields option={response.trivia_categories} label="Category" />
                <SelectFields option={difficultyOptions} label="Difficulty" />
                <SelectFields option={typeOptions} label="Type" />
                <TextField />
            </div>
            <div className='p-10'>
            <button type="button" onClick={handleClick} className="answers p-2 m-2  text-xl focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Get Started !</button>
            </div>
    </div>
   </div> 
)


    };
  
  export default Settings;