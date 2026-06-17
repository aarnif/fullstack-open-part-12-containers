import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Learn about containers',
    done: false
  }

  const mockOnClickDelete = vi.fn()
  const mockOnClickComplete = vi.fn()

  render(<Todo todo={todo} onClickDelete={mockOnClickDelete} onClickComplete={mockOnClickComplete}/>)

  const element = screen.getByText('Learn about containers')
  expect(element).toBeDefined()
})