interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-slate-400 p-4">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div>
      <Button text="Não enviar" />
      <Button text="Não" />
      <Button />
    </div>
  )
}

export default App
