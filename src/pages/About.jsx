import profileImg from '../assets/Images/profilePic.png'

export default function About() {
  return (
    <div className='d-flex p-2 align-items-center justify-content-around'>
      <img src={profileImg} alt="" style={{width: '150px'}}/>
      <p class="content">
        My name is Chandler Daniel
        I'm from Atlanta, GA. I've been
        interested in tech since 2020 but, never could
        find the time to actually apply myself to practice
        to learn software languages and coding structures. I pride myself on trying to take on a challenge and
         believe me this journey has been a process but, I've learned so much and will strive to learn more
      </p>
    </div>
  );
}
