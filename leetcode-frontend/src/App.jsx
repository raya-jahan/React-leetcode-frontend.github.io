import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// Static Global Variable
const problems1=[{
  title: "Q1",
  acceptance: "45%",
  difficulty: "Hard"
},
{
  title: "Q2",
  acceptance: "55%",
  difficulty: "Medium"},

  {
    title: "Q3",
    acceptance: "65%",
    difficulty: "Easy"},

    {
      title: "Q4",
      acceptance: "75%",
      difficulty: "Medium"},
]

const problems2=[{
  title: "Q5",
  acceptance: "45%",
  difficulty: "Medium"

},
{
  title: "Q6",
  acceptance: "55%",
  difficulty: "Hard"},

  {
    title: "Q7",
    acceptance: "65%",
    difficulty: "Easy"},

    {
      title: "Q8",
      acceptance: "75%",
      difficulty: "Hard"},

]

// All Components return HTML
//Parent Component returning HTML
// Starting Point of Application
// In this Parent Component I can write other Components
function App() {

  // States
  const [problems, setProblems] = useState([{}])
//     [{
//     title: "Raya",
//     acceptance: "45%",
//     difficulty: "Medium"

//   },
//   {
//     title: "Niloy",
//     acceptance: "55%",
//     difficulty: "Hard"},

//     {
//       title: "Mom",
//       acceptance: "65%",
//       difficulty: "Easy"},

//       {
//         title: "Papa",
//         acceptance: "75%",
//         difficulty: "Hard"},

// ]
//   )


// Adding New Problem Apple with Old Array
// setInterval(() => {
//   setProblems((problems)=> [...problems,{
//     title: "Apple",
//     acceptance: "60%",
//     difficulty: "Hard"
//   }])
  
// }, 3000);



//ProblemStatement is Component and problemReceived is State argument which receives parameterProblem. It is returning HTML 
function ProblemStatement(problemReceived){
  const title= problemReceived.title;
  const acceptance= problemReceived.acceptance;
  const difficulty= problemReceived.difficulty;

  return <tr>
    <td>
      {title}
    </td>

    <td>
      {acceptance}
    </td>

    <td>
      {difficulty}
    </td>

  </tr>
}

function ProblemStatement2(problemReceived){
  const title= problemReceived.title;
  const acceptance= problemReceived.acceptance;
  const difficulty= problemReceived.difficulty;

  return <tr>
    <td>
      {title}
    </td>

    <td>
      {acceptance}
    </td>

    <td style={{color: difficulty==="Medium"? 'yellow': 'green'}}>
      {difficulty}
    </td>

  </tr>
}

// Parent Component App is returning
  return (
    <div
    style={{

      textAlign: "center",
      maxWidth: "950px",
      margin: "0 auto",
      border: "1px solid black",
      padding: "40px 25px",
      marginTop: "50px",
    }}
  >
      <input type="email" placeholder='email' required></input>
      <input type="password" placeholder='password' required></input>
      <button>Sign Up</button>
      <button>Sign In</button>

      <div>
      <button onClick={()=>{setProblems(problems=> problems1);}}>1</button>
      <button onClick={()=>{setProblems(problems=> problems2);}}>2</button>
      </div>


      <div>
{/* Mapping problems1 array to ProblemStatement Component to functionalize  */}
{/* Here, parameterProblem is the parameter we are passing which is received by problemProvided */}
      {problems.map(parameterProblem => <ProblemStatement2
      title= {parameterProblem.title}
      acceptance= {parameterProblem.acceptance}
      difficulty= {parameterProblem.difficulty}>
    
      </ProblemStatement2>
      )}
      </div>
      
    </div>

    































    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Raya Jahan
    //   </p>
    // </>
  )
}

export default App
