import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAmountOfQuestions, changeScore } from "../../Actions";
import { Button } from 'semantic-ui-react'


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
      <div className='h-screen background--custom'>
      <div className='flex flex-col items-center justify-center'>
          <h1 className="title flex justify-center md:text-8xl text-4xl p-10 text-[#003554]">Culture Quiz</h1>
              <div className="bg-slate-100 bg-opacity-75 shadow-md shadow-[#040c16] p-3 w-[80%] md:w-[50%]">
               <h2 className="text-center final text-[#003554]"> Final Score </h2>
                  <h3 className="text-[#003554]">Congratulations !</h3>
                  <p className="font-semibold text-xl text-[#003554]"> Your score is : {score} / {amount_of_questions} </p>
              </div>
              <div className="flex justify-center mt-10 p-10">
                  <Button type="button" onClick={handleBackSettings} color="violet">Play again !</Button>
               </div>
      </div>
     </div> 
    );
  }
  
  export default FinalScreen;