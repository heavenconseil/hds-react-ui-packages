import type { Meta, StoryObj } from '@storybook/react'
import CTA from './CTA'

const meta = {
  title: 'Components/CTA',
  component: CTA,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    startIcon: {
      control: { type: 'text' }
    },
    endIcon: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    expand: {
      control: { type: 'boolean' }
    }
  },
  args: { onClick: () => console.log('clicked') }
} satisfies Meta<typeof CTA>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button'
  }
}

export const WithStartIcon: Story = {
  args: {
    startIcon: 'plus',
    children: 'Add Item'
  }
}

export const WithEndIcon: Story = {
  args: {
    endIcon: 'arrow-right',
    children: 'Continue'
  }
}

export const WithBothIcons: Story = {
  args: {
    startIcon: 'star',
    endIcon: 'arrow-right',
    children: 'Get Started'
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}

export const Expanded: Story = {
  args: {
    expand: true,
    children: 'Full Width Button'
  },
  parameters: {
    layout: 'padded'
  }
}

export const AsLink: Story = {
  args: {
    href: 'https://example.com',
    children: 'Visit Website'
  }
}