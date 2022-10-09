import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'

export const NewsletterSectionContainer = styled.div`
  width: 100%;
  padding: 40px 10px;
  background: white;

  @media (min-width: ${bp.sm}) {
    padding: 60px;
  }
`
export const NewsletterContent = styled.div`
  width: 100%;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${bp.sm}) {
    flex-direction: row;
  }
`
export const LeftContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  margin: 10px 0;
`
export const RightContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  margin: 10px 0;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.lg}) {
    padding: 0 30px;
    width: 500px;
  }
`
export const Input = styled.input`
  padding: 10px;
`
export const Label = styled.h4``
