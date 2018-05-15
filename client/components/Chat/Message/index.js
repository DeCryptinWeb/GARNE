export default ({type, text}) => {
  const floatValue = type === 'cc' ? 'left' : 'right'
  const backgroundColor = type === 'cc' ? '#b9b9b9' : '#58aec7'

  return <li style={{display: 'block', width: '100%', listStyleType: 'none', clear: 'both'}}><div style={{
    float: floatValue,
    maxWidth: '90%',
    padding: '6px 12px',
    margin: '5px 0',
    background: backgroundColor,
    borderRadius: '8px',
    color: '#fff'
  }}>{text}</div></li>
}
