import { Box, Text } from '@chakra-ui/react'
import TriviaForm from './TriviaForm'

type QuizStartupProps = {
  setFormData: Function
  setQuizStarted: Function
}

const QuizStartup: React.FC<QuizStartupProps> = ({ setFormData, setQuizStarted }) => {
  return (
    <Box>
      <Text>Please fill out the following information to start the quiz:</Text>
      <TriviaForm
        setFormData={setFormData}
        setQuizStarted={setQuizStarted}
      />
    </Box>
  )
}
export default QuizStartup
