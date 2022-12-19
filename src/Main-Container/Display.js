import React from 'react'

export default function Display(props) {
  return (
      <div>
          {props.name.map((i) => {
                return i;
            })}
    </div>
  )
}
