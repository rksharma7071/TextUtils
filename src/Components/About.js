import React, {useState} from 'react'

export default function About(props) {
  const[myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const[btnText, setBtnText] = useState("Dark Mode");

  const toggleStyle =  () => {
    if (myStyle.color === 'white'){
      setMyStyle(
        {
          color: 'black',
          backgroundColor: 'white'
        }
      );
      setBtnText("Light Mode");
    }
    else{
      setMyStyle(
        {
          color: 'white',
          backgroundColor: 'black'
        }
      );
      setBtnText("Dark Mode");
    }
  }

  return (
    <>
      <div className={`row text-${props.mode === 'dark'? 'light' : 'dark' } `}>
        <div className='col-md-12 col-lg-6 rounded py-2'>
          <div className={`p-3 bg-${props.mode === 'dark' ? 'black' : 'white'} rounded-3`}>
            <h3>Pellentesque eget sem quis elit blandit maximus</h3>
            <p>In facilisis, odio quis consequat venenatis, nisl lectus interdum lorem, eu lacinia purus sem in magna. Cras ex risus, porttitor sit amet purus malesuada, imperdiet condimentum eros. Proin dapibus vitae nulla non gravida. Mauris eget elementum lorem, at mollis ex. Vivamus viverra, sapien vitae maximus posuere, lorem neque bibendum massa, sed suscipit sapien mi a dui. Quisque consequat, lorem eu convallis dignissim, est erat fringilla lacus, id tristique arcu metus a elit. Sed mauris nunc, porttitor sit amet elit nec, condimentum elementum tortor. Fusce sapien nisl, porta vel molestie ultrices, feugiat eget risus. Aliquam mattis orci sed ex vulputate, non fringilla magna luctus. Donec imperdiet ultrices leo, at eleifend ipsum vulputate sed. Vivamus ac luctus nulla, at condimentum odio. Cras faucibus dui nunc, eu lacinia sem varius a. Donec posuere maximus accumsan. Curabitur vel odio et purus suscipit mollis sit amet ac elit.</p>
          </div>
        </div>
        <div className='col-md-12 col-lg-6 rounded py-2'>
        <div className="accordion text-start" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Accordion Item #1</button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Accordion Item #2</button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accordion Item #3</button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
        </div> 
      </div>
      
      <button className={`btn ${btnText === "Dark Mode" ? "btn-light" : "btn-outline-dark"}`} onClick={toggleStyle} >{btnText}</button>
    </>
  )
}
