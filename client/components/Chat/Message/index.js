import classes from './styles.css'

export default ({type, text}) => {
  const floatClass = type === 'cc' ? classes.left : classes.right
  const backgroundColorClass = type === 'cc' ? classes.grey : classes.blue

  return <li className={`${classes.li}`}>
    <div className={`${classes.div} ${backgroundColorClass} ${floatClass}`}>{text}</div>
  </li>
}
