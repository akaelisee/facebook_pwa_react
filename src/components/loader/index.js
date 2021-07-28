import React from 'react'
import { Container } from '../../styles/Container'
import { PageFixed, LoaderPage } from '../../styles/Loader'

const Loader = () => {
  return (
    <Container>
      <PageFixed>
        <LoaderPage></LoaderPage>
      </PageFixed>
    </Container>
  )
}

export default Loader
