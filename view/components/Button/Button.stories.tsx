import React from 'react'
import Button from './Button'

export default {
  title: 'MyButton',
  component: Button
  // decorators: [... ],
  // parameters: { ... }
}

export const Primary = () => <Button text="primary" onClick={console.log} />
export const Secondary = () => <Button text="seconary" onClick={console.log} />
