import { Box } from '@mui/material';
import React, { useState } from 'react'

const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  return (
    <div>
        <Box></Box>
    </div>
  )
}

export default AddHabitForm
