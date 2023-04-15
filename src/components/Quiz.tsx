import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'

interface QuizProps {
  formData: Array<T>
  qNumber: number
  setQNumber: Function
  playerPoints: number
  setPlayerPoints: Function
}

interface T {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: Array<string>
}

function shuffle(a: Array<string>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const Quiz: React.FC<QuizProps> = ({ formData, qNumber, setQNumber, playerPoints, setPlayerPoints }) => {
  const newArray = formData[qNumber].incorrect_answers.concat(formData[qNumber].correct_answer)
  shuffle(newArray)

  function htmlDecode(input: string) {
    var doc = new DOMParser().parseFromString(input, 'text/html')
    return doc.documentElement.textContent
  }

  if (qNumber >= formData.length) {
    console.log('Quiz finished')
  }

  function handleAnswerCheck(answer: string) {
    if (answer === formData[qNumber].correct_answer) {
      alert('Correct!')
      setPlayerPoints(playerPoints + 1)
      setQNumber(qNumber + 1)
    } else {
      alert('Wrong!')
      setQNumber(qNumber + 1)
    }
  }

  return (
    <Box w="50vw">
      <Flex direction="column">
        <Box
          textAlign="center"
          pt="50px"
        >
          <Box pb="50px">
            <Text>Category</Text>
            <Text>{formData[qNumber].category}</Text>
          </Box>
          <Box pb="50px">
            <Heading as="h3">{htmlDecode(formData[qNumber].question)}</Heading>
          </Box>
        </Box>
        <SimpleGrid
          columns={2}
          gap="20px"
          justifyItems="center"
          alignContent="center"
        >
          {newArray.map((question) => (
            <Box
              key={question}
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="300px"
              h="150px"
              border="solid"
              borderRadius="5px"
            >
              <Button
                onClick={() => handleAnswerCheck(question)}
                key={question}
                width="100%"
                height="100%"
              >
                {htmlDecode(question)}
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Quiz
