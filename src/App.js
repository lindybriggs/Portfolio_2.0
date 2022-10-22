import { useState } from 'react';

export default function App() {

  let [studentName, setStudentName] = useState("Lindy");
  let [favoriteMovie, setfavoriteMovie] = useState("Cheaper by the Dozen");

  function handleClick() {
    setStudentName("Linden")
    setfavoriteMovie("Mean Girls")
  }

  return (
    <>
      <Inputs></Inputs>
      <Details studentName={studentName} favoriteMovie={favoriteMovie} handleClick={handleClick} ></Details>
    </>
  )
}

function Inputs({ }) {
return (
  <div>
    Update Name: <input></input>
    <p></p>
    Update Favorite Movie: <input></input>
  </div>
)
}

function Details({ studentName, favoriteMovie, handleClick }) {
  return (
    <div>
      <p>Name: {studentName}</p>
      <p>Favorite Movie: {favoriteMovie}</p>
      <button onClick={handleClick}>Change Name and Movie</button>
    </div>
  )
}


