import '../App.css'
import myVideo from '../Assests/Front.mp4';
import FrequentlyQuestion from './FrequentlyQuestion';

function Home() {
  document.title = "Home | Al-Shams Hospital";
  return (
    <div className='container'>
      <video width="80%" height="440" controls autoPlay loop muted playsInline style={{ pointerEvents: 'none' }}>
        <source src={myVideo} type="video/mp4" />
      </video>
      <br /><h1 className='title1'>HEALTHCARE VIDEOS AND ARTICLES</h1><br />
      <div className='Video'>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/RuiDFHcZh-8" title="Gleneagles Hospital Medini Johor Corporate Video 2020 ENGLISH" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='Video'>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/wQ2TN_gI3sE" title="The American Hospital, Dubai‬ Corporate Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <FrequentlyQuestion />
    </div>
  )
}

export default Home