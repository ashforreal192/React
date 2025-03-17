import Chai from "./chai"


function App() {
  const bukchodi = "You've got to take care of this tea addiction that you have"
  const comeBack = "Well atleast it's not an addiction to all the verbal tea that's been spreading around lately."
  return (
    <>
    <Chai/>
    <h1>What's going on?</h1>
    <p>I have been working on my health lately</p>
    {bukchodi} {/* Evaluated expression: anything in between the curly brackets is treated as a variable */}
    {/* An evaluated expression in React refers to any JavaScript code inside JSX that is dynamically evaluated and reandered within {} (curly braces). */}
    <br /> {/* break tag */}
    {comeBack}
    </>
  )
}
// Evaluated expressions can be used for: (Examples)
// Text content ({name})
// Attribute values (href={url})
// Function calls ({getRandomNumber()})
// Conditional rendering ({isLoggedIn ? "Yes" : "No"})
// Lists with .map() ({fruits.map(...)})

export default App
