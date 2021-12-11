import { useState } from "react"

export const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (event) => {
      setValue(event.target.value)
    },
    reset: () => setValue(""),
  }
}
