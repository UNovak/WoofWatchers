import Toggle from 'react-toggle'

const ModeToggle = ({ onToggle, mode }) => {
  return (
    <label>
      <span>Guardian</span>
      <Toggle
        defaultChecked={true}
        icons={false}
        onChange={() => onToggle(mode)}
      />
      <span>Owner</span>
    </label>
  )
}

export default ModeToggle
