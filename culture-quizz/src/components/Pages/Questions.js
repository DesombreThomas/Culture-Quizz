import bg from "../../assets/bg.png"

function Questions() {
    return (
      <div className='bg h-screen' style={{backgroundImage: `url(${bg}) `}}>
      <div className='flex flex-col items-center justify-center'>
          <h1 className="flex justify-center text-5xl py-20 text-[#F8EE4F]">Culture Quizz</h1>
              <div className="bg-slate-100 bg-opacity-75 shadow-md shadow-[#040c16] p-3">
               <h2 className="text-center"> Question 1 </h2>
                  <p className="text-2xl font-semibold flex justify-center ">This is the question ?</p>
                <div className="flex justify-center">
                  <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer 1</button>
               </div>
               <div className="flex justify-center">
                  <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer 2</button>
               </div>
               <div className="flex justify-center">
                  <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer 3</button>
              </div>
              <div className="flex justify-center">
                  <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer 4</button>
              </div>
              </div>

      </div>
     </div> 
    );
  }
  
  export default Questions;