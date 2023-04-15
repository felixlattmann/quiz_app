import { Box, Button, Container, Text } from '@chakra-ui/react'
import { useState } from 'react'
import QuizStartup from './components/QuizStartup'
import Quiz from './components/Quiz'
import RestartQuiz from './components/RestartQuiz'

function App() {
  const [formData, setFormData] = useState([])
  const [quizStarted, setQuizStarted] = useState(false)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [playerPoints, setPlayerPoints] = useState(0)

  if (questionNumber >= formData.length) {
    console.log('Quiz finished')
  }

  function handleRestartQuiz() {
    setQuizStarted(false)
    setPlayerPoints(0)
  }

  if (quizStarted === true && questionNumber >= formData.length) {
    return (
      <>
        <RestartQuiz
          handleRestartQuiz={handleRestartQuiz}
          playerPoints={playerPoints}
        />
      </>
    )
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {quizStarted ? (
        <Quiz
          formData={formData}
          qNumber={questionNumber}
          setQNumber={setQuestionNumber}
          playerPoints={playerPoints}
          setPlayerPoints={setPlayerPoints}
        />
      ) : (
        <QuizStartup
          setFormData={setFormData}
          setQuizStarted={setQuizStarted}
        />
      )}
    </Box>
  )
}

export default App
