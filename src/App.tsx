import { Container, Pagination, Stack } from '@mui/material'
import Header from './components/Header'
import Question from './components/Question'

function App() {

  return (
    <>
      <Header />
      <Container>
        <Stack spacing={2} m={'20px'}>
          <Question />
          <Question />
          <Question />
          <Question />
        </Stack>
      </Container>
      <Container maxWidth="sm">
        <Pagination sx={{m:'40px'}} count={10} showFirstButton showLastButton />
      </Container>
    </>
  )
}

export default App