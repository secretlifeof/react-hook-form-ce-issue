import { useState } from 'preact/hooks'
import { html } from 'htm/preact'
import { styled } from 'goober'
import { useForm } from 'react-hook-form'

const Frame = styled('div')`
  color: blue;
  width: 20vw;
  min-height: 100vh;
  background: green;
`

const App = () => {
  const first = useState(0)
  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  // const { register, handleSubmit, errors } = useForm()
  const { register } = useForm()
  // const onSubmit = (data: object) => {
  //   console.log(data)
  // }

  // console.log(watch('example'))

  return html`
    <${Frame}>
      TEST ${first} ${register}
    <//>
  `
}

export default App

// <form onSubmit=${handleSubmit(onSubmit)}
//         ><input name="example" defaultValue="test"
//         ref=${register}"/>${errors.exampleRequired &&
//           html`
//             <span>This field is required</span>
//           `}<input type="submit"/></form
//     >
