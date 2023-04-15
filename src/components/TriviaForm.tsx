import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  RadioGroup,
  Radio,
  HStack,
} from '@chakra-ui/react'
import axios from 'axios'
import { Formik, Field, Form, FormikHelpers } from 'formik'

interface Values {
  amount: number
  difficulty: string
}

type TriviaFormProps = {
  setFormData: Function
  setQuizStarted: Function
}

const TriviaForm: React.FC<TriviaFormProps> = ({ setFormData, setQuizStarted }) => {
  return (
    <Box
      p="20px"
      border="solid 1px"
    >
      <Formik
        initialValues={{
          amount: 10,
          difficulty: 'medium',
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          axios
            .get('https://opentdb.com/api.php', { params: values })
            .then((response) => {
              setFormData(response.data.results)
              setQuizStarted(true)
            })
            .catch((error) => {
              console.log('error while fetching:', error)
              alert('An Error occured!')
            })
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl
              pb="20px"
              isRequired
              isInvalid={!!errors.amount && touched.amount}
            >
              <FormLabel
                pb="10px"
                htmlFor="amount"
              >
                Number of questions:
              </FormLabel>
              <Field
                as={Input}
                name="amount"
                type="number"
                variant="filled"
                validate={(value: number) => {
                  let error
                  if (value > 50) {
                    error = 'Please choose an integer number between 1 and 50'
                  }

                  if (!Number.isInteger(value)) {
                    error = 'Please choose an integer'
                  }
                  return error
                }}
              />
              <FormErrorMessage>{errors.amount}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                pb="10px"
                htmlFor="difficulty"
              >
                Select the difficulty:
              </FormLabel>
              <RadioGroup name="difficulty">
                <HStack
                  gap="20px"
                  pb="40px"
                >
                  <Field
                    id="easy"
                    as={Radio}
                    name="difficulty"
                    type="string"
                    value="easy"
                  >
                    Easy
                  </Field>
                  <Field
                    id="medium"
                    as={Radio}
                    name="difficulty"
                    type="string"
                    value="medium"
                  >
                    Medium
                  </Field>
                  <Field
                    id="hard"
                    as={Radio}
                    name="difficulty"
                    type="string"
                    value="hard"
                  >
                    Hard
                  </Field>
                </HStack>
              </RadioGroup>
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </Box>
  )
}
export default TriviaForm
