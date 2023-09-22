export const Input = ({lbl,placeholder,inputKey,fn,val}) => {
  const takeInput=(event)=>{
    console.log('input :',event.target.value);
    fn(event.target.value,inputKey)// parent fun cll
  }
  return (
    <div className='form-group'>
    <label>{lbl}</label>
    <input value={val} onChange={takeInput} placeholder={placeholder} type='text'></input>
    </div>
  )
}