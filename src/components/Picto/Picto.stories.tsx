import type { Meta, StoryObj } from '@storybook/react'
import Picto from './Picto'

const meta = {
  title: 'Components/Picto',
  component: Picto,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'check',
        'close',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrow-down',
        'eye',
        'eye-off',
        'heart',
        'star',
        'home',
        'user',
        'settings',
        'search',
        'plus',
        'minus',
        'spinner',
        'error'
      ]
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'selecttabs']
    },
    className: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Picto>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'check'
  }
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Picto name="star" size="small" />
        <p className="text-xs mt-1">Small</p>
      </div>
      <div className="text-center">
        <Picto name="star" size="medium" />
        <p className="text-xs mt-1">Medium</p>
      </div>
      <div className="text-center">
        <Picto name="star" size="large" />
        <p className="text-xs mt-1">Large</p>
      </div>
      <div className="text-center">
        <Picto name="star" size="selecttabs" />
        <p className="text-xs mt-1">SelectTabs</p>
      </div>
    </div>
  )
}

export const Icons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4">
      {[
        'check',
        'close',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrow-down',
        'eye',
        'eye-off',
        'heart',
        'star',
        'home',
        'user',
        'settings',
        'search',
        'plus',
        'minus'
      ].map((iconName) => (
        <div key={iconName} className="text-center p-2">
          <Picto name={iconName} size="large" />
          <p className="text-xs mt-1">{iconName}</p>
        </div>
      ))}
    </div>
  )
}

export const WithCustomStyles: Story = {
  args: {
    name: 'heart',
    size: 'large',
    className: 'text-red-500'
  }
}

export const Spinner: Story = {
  args: {
    name: 'spinner',
    size: 'large'
  }
}

export const ErrorIcon: Story = {
  args: {
    name: 'nonexistent',
    size: 'large'
  }
}