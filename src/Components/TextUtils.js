import React, {useState} from 'react'

export default function TextUtils(props) {

  let output = document.querySelector('#output');

  const[text, setText] = useState('');
  
  const textModify = (event)=>{
    setText(event.target.value);
  }

  const convertUppercase = () => {
    if(text.length > 0){
      output.innerText = text.toUpperCase();
      // document.querySelector('#outputContainer').style.display = 'block';
    }
    else{
      alert('Input field can not be empty');
    }
  }
  const convertLowercase = () => {
    if(text.length > 0){
      output.innerText = text.toLowerCase();
      // document.querySelector('#outputContainer').style.display = 'block';
    }
    else{
      alert('Input field can not be empty');
    }
  }
  const clearText = () => {
    setText('');
    output.innerText = "";
    // document.querySelector('#outputContainer').style.display = 'none';
    document.querySelector('#myText').value = "";

  }

  const copyText = () => {
    var text = document.querySelector('#output');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    document.querySelector('#output').innerText = newText.join(" ");
    // document.querySelector('#outputContainer').style.display = 'block';
    setText(newText.join(" "));
  }

  return (
    <>
      <div className='row'>
      <h3 className={`h3 pb-2 text-${props.mode == 'dark'? 'light' : 'dark' }`}>Enter the text to analyze below</h3>
      </div>
      <div className={`row text-${props.mode == 'dark'? 'light' : 'dark' }`}>
        <div className='col-md-12 col-lg-6'>
          <div className={`bg-${props.mode == 'dark' ? 'black' : 'white'} rounded-3 p-3`}>
            <h5>Input</h5>
            <textarea type='text' placeholder='Enter Text' rows={10} onChange={textModify} className={`form-control borderless bg-${props.mode == 'dark' ? 'black' : 'white'} text-${props.mode == 'dark'? 'light' : 'dark' }`} id='myText' style={{border: '2px dashed #eef2f5'}}></textarea>
          </div>
        </div>
        <div className='col-md-12 col-lg-6'>
        <div className={`bg-${props.mode == 'dark' ? 'black' : 'white'} rounded-3 p-3 align-items-stretch`} style={{height: '100%'}}>
          <div className='row'>
            <div className='col-2'>
            <h5>Output</h5>
            </div>
            <div className='col-8 text-center'>
              <span id="output_word_char" className='small'>{text.length == 0 ? "0" : text.split(' ').length} words and {text.length} Characters </span>
            </div>
            <div className='col-2 text-end'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={copyText}>
                <path d="M5 7.667C5 6.95967 5.28099 6.28131 5.78115 5.78115C6.28131 5.28099 6.95967 5 7.667 5H16.333C16.6832 5 17.03 5.06898 17.3536 5.20301C17.6772 5.33704 17.9712 5.53349 18.2189 5.78115C18.4665 6.0288 18.663 6.32281 18.797 6.64638C18.931 6.96996 19 7.31676 19 7.667V16.333C19 16.6832 18.931 17.03 18.797 17.3536C18.663 17.6772 18.4665 17.9712 18.2189 18.2189C17.9712 18.4665 17.6772 18.663 17.3536 18.797C17.03 18.931 16.6832 19 16.333 19H7.667C7.31676 19 6.96996 18.931 6.64638 18.797C6.32281 18.663 6.0288 18.4665 5.78115 18.2189C5.53349 17.9712 5.33704 17.6772 5.20301 17.3536C5.06898 17.03 5 16.6832 5 16.333V7.667Z" stroke={`${props.mode == 'dark' ? 'white' : 'black'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.012 14.737C1.705 14.5626 1.44965 14.31 1.2719 14.0049C1.09415 13.6998 1.00034 13.3531 1 13V3C1 1.9 1.9 1 3 1H13C13.75 1 14.158 1.385 14.5 2" stroke={`${props.mode == 'dark' ? 'white' : 'black'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div id='outputContainer'>
            <textarea id='output' rows={10} className={`form-control bg-${props.mode == 'dark' ? 'black' : 'white'} text-${props.mode == 'dark'? 'white' : 'dark' }`} style={{border: '2px dashed #eef2f5'}} disabled></textarea>
          </div>
        </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col'>
        <button type='submit' className={`btn btn-${props.mode == 'dark'? 'light' : 'primary' } m-2`} onClick={convertUppercase}>Convert to Uppercase</button>
        <button type='submit' className={`btn btn-${props.mode == 'dark'? 'light' : 'primary' } m-2`} onClick={convertLowercase}>Convert to Lovercase</button>
        <button type='submit' className={`btn btn-${props.mode == 'dark'? 'light' : 'primary' } m-2`} onClick={clearText}>Clear</button>
        <button type='submit' className={`btn btn-${props.mode == 'dark'? 'light' : 'primary' } m-2`} onClick={removeExtraSpace}>Remove Extra Space</button>
        </div>
      </div>
    </>
  )

}