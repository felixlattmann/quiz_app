import { Box, Button, Text } from '@chakra-ui/react'

interface RestartQuizProps {
  handleRestartQuiz: Function
  playerPoints: number
}

const RestartQuiz: React.FC<RestartQuizProps> = ({ handleRestartQuiz, playerPoints }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        pt="200px"
        textAlign="center"
      >
        <Text>Quiz is over! </Text>
        <Text>You've got {playerPoints} Points!</Text>
        <Button onClick={() => handleRestartQuiz()}>Press to restart the quiz</Button>
      </Box>
    </Box>
  )
}

export default RestartQuiz
