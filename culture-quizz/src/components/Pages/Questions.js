import bg from "../../assets/bg.png";
import React, { useState } from 'react'
import { Segment, Dimmer, Loader, Advertisement } from 'semantic-ui-react'
import useAxios from "../../hooks/useAxios";
import { useSelector } from "react-redux";



function Questions() {

   const {
    questions_category,
    questions_difficulty,
    questions_type,
    amount_of_questions,
    score,
   } = useSelector((state) => state);


   let apiUrl = `/api.php?amount=${amount_of_questions}`

   // Si je choisi une catégorie de question ajout de la catégorie choisi dans mon URL
   if(questions_category) {
      apiUrl = apiUrl.concat(`&category=${questions_category}`);
   }

   // Si je choisi une difficulté de question ajout de la difficulté choisi dans mon URL
   if(questions_difficulty) {
      apiUrl = apiUrl.concat(`&difficulty=${questions_difficulty}`);
   }

// Si je choisi un type de question ajout du type choisi dans mon URL
   if(questions_type) {
      apiUrl = apiUrl.concat(`&type=${questions_type}`);
   }

   console.log(apiUrl);

   const { response, loading, error } = useAxios({ url: apiUrl });
   console.log(response);

   const [questionIndex, setQuestionIndex] = useState([0]);
   

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


    return (
      <div className='bg h-screen' style={{backgroundImage: `url(${bg}) `}}>
      <div className='flex flex-col items-center justify-center'>
          <h1 className="flex justify-center text-5xl py-20 text-[#F8EE4F]">Culture Quizz</h1>
              <div className="bg-slate-100 bg-opacity-75 shadow-md shadow-[#040c16] p-3 w-[80%]">
               <h2 className="text-center"> Question {questionIndex + 1} </h2>
                  <p className="text-2xl font-semibold flex justify-center ">{response.results[questionIndex].question}</p>
                <div className="flex justify-center">
                  <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer 1</button>
               </div>
               <div className="flex justify-center">
                  <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer 2</button>
               </div>
               <div className="flex justify-center">
                  <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer 3</button>
              </div>
              <div className="flex justify-center">
                  <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer 4</button>
              </div>
               <div>
                  <p className="font-semibold">Your score : 1/6 </p>
               </div>
              </div>

      </div>
     </div> 
    );
  }
  
  export default Questions;