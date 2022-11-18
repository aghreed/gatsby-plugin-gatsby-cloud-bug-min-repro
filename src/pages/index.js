import * as React from "react"
import FontStyles from "../styles/style"

export default function Home() {
  return (
    <>
      <FontStyles />
      <div style={{
        fontFamily: 'Inter var',
        fontSize: '100px',
        fontWeight: 400
      }}>
        Hello world!
      </div>
    </>
  )

}
