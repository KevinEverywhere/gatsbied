import React from 'react'
import ItemChooser from './ItemChooser'

const SectionChooser = () => (
  <nav>
    <ul>
      <ItemChooser item="Work" />
      <ItemChooser item="Creative" />
      <ItemChooser item="Contact" />
    </ul>
  </nav>
)

export default SectionChooser
