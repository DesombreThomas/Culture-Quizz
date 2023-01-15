import bg from "../../assets/bg.png";
import React, { useEffect, useState } from 'react'
import { Segment, Dimmer, Loader, Advertisement } from 'semantic-ui-react'
import useAxios from "../../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeScore } from "../../Actions";
import { decode } from "html-entities";


const getRandomInt = (max) => {
   return Math.floor(Math.random() * Math.floor(max));
}

function Questions() {

   const {
    questions_category,
    questions_difficulty,
    questions_type,
    amount_of_questions,
    score,
   } = useSelector((state) => state);

   const navigate = useNavigate();
   const dispatch = useDispatch();


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

   const [questionIndex, setQuestionIndex] = useState(0);
   const [options, setOptions] = useState([]);
   
   useEffect(() => {
      if(response?.results.length) {
         const question = response.results[questionIndex];
         let answers = [...question.incorrect_answers]
         answers.splice(
            getRandomInt(question.incorrect_answers.length),
            0,
            question.correct_answer
         );
         setOptions(answers)
      }
   }, [response, questionIndex]);

 

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

  //Handler permettant de répondre aux questions et de rediriger vers la page montrant le score final à la fin du quizz,
  // De plus permet de dynamiser notre score en temps réel selon notre réponse en comparant le contenu de la réponse avec la réponse correct
  const handleClickAnswer = (evt) => {
   const question = response.results[questionIndex];
   if(evt.target.textContent === question.correct_answer) {
     dispatch(changeScore(score + 1))
   }
   if(questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1)
   } else {
      navigate(`/finalscore`);
   }
  };


    return (
      <div className='bg h-screen' style={{backgroundImage: `url(${bg}) `}}>
      <div className='flex flex-col items-center justify-center'>
          <h1 className="flex justify-center text-5xl py-20 text-[#F8EE4F] title">Culture Quiz</h1>
              <div className="bg-slate-100 bg-opacity-75 shadow-md shadow-[#040c16] p-3 w-[80%]">
               <h2 className="text-center question"> Question {questionIndex + 1} </h2>
                  <p className="text-2xl font-semibold flex justify-center ">{decode(response.results[questionIndex].question)}</p>
                  {options.map((data, id) => (
                      <div className="flex justify-center" key={id}>
                        <button type="button" onClick={handleClickAnswer} className="answers p-2 m-2  text-xl focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{decode(data)}</button>
                     </div>
                  ))}
               <div>
                  <p className="font-semibold">Your score : {score} / {response.results.length} </p>
               </div>
              </div>

      </div>
     </div> 
    );
  }
  
  export default Questions;