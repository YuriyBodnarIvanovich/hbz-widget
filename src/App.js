import './App.css';

function App({domElement}) {
  const textColor = domElement.getAttribute("textColor");
  const backgroundColor = domElement.getAttribute("backgroundColor");
  const mainColor = domElement.getAttribute("mainColor");
  const borderColor = domElement.getAttribute("borderColor");

  console.log("textColor",textColor);
  console.log("backgroundColor", backgroundColor);
  console.log("mainColor", mainColor);
  console.log("borderColor", borderColor);

  const handleStart = () => {
    console.log('Start!!!')
  }
  return (
   <div className='hbz-widget-box'>
      <div className='questionnare-box'>
        <div className='content-wrapper'>
          <div className='process'>
            <div className='process-load'>
            </div>
          </div>
          <span>
            We are going to ask you a few question
            s to more accurately select courses for you
          </span>
        </div>
        <button className='start-button' onClick={handleStart}>START</button>
      </div>
    </div>
  );
}

export default App;
