import {
    CategorieResumeContainer,
    Percentage,
    CategorieTitle
} from './styles'
import IProps from './IProps'

const CategorieResume = ({ percentage, title }: IProps) => {
    return (
        <CategorieResumeContainer>
            <Percentage>{percentage}%</Percentage>
            <CategorieTitle>{title}</CategorieTitle>
        </CategorieResumeContainer>
    )
}

export default CategorieResume