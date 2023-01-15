import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAmountOfQuestions, changeScore } from "../../Actions";
import bg from "../../assets/bg.png";


function FinalScreen() {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { score, amount_of_questions } = useSelector((state) => state);
   const handleBackSettings = () => {
      dispatch(changeScore(0));
      dispatch(changeAmountOfQuestions(50));
      navigate(`/`);
   }

    return (
      <div className='bg h-screen' style={{backgroundImage: `url(${bg}) `}}>
      <div className='flex flex-col items-center justify-center'>
          <h1 className="title flex justify-center text-5xl py-20 text-[#F8EE4F]">Culture Quiz</h1>
              <div className="bg-slate-100 bg-opacity-75 shadow-md shadow-[#040c16] p-3 w-[80%]">
               <h2 className="text-center final"> Final Score </h2>
                  <h3>Congratulations !</h3>
                  <p className="font-semibold text-xl"> Your score is : {score} / {amount_of_questions} </p>
              </div>
              <div className="flex justify-center">
                  <button type="button" onClick={handleBackSettings} className="focus:outline-none mt-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Play again !</button>
               </div>
      </div>
     </div> 
    );
  }
  
  export default FinalScreen;