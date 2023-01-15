import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAmountOfQuestions, changeScore } from "../../Actions";
import bg from "../../assets/bg.png";
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
      <div className='bg-final h-screen' style={{backgroundImage: `url(${bg}) `}}>
      <div className='flex flex-col items-center justify-center'>
          <h1 className="title flex justify-center text-8xl py-20 text-[#F8EE4F]">Culture Quiz</h1>
              <div className="bg-slate-100 bg-opacity-75 shadow-md shadow-[#040c16] p-3 w-[80%]">
               <h2 className="text-center final"> Final Score </h2>
                  <h3>Congratulations !</h3>
                  <p className="font-semibold text-xl"> Your score is : {score} / {amount_of_questions} </p>
              </div>
              <div className="flex justify-center p-10">
                  <Button type="button" onClick={handleBackSettings} color="violet">Play again !</Button>
               </div>
      </div>
     </div> 
    );
  }
  
  export default FinalScreen;