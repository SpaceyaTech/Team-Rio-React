import { render, screen } from "@testing-library/react"
import CustomButton from "../../../components/Button/CustomButton"

test('renders text and color passed in props', ()=>{
    const bgColor = 'gray'
    const buttonText = 'This is a button'
    const textColor = "white"

    render(<CustomButton text={buttonText} color={bgColor} textColor={textColor}/>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-gray-900')
    expect(button).toHaveTextContent(buttonText)
    expect(button).toHaveClass('text-white')
})