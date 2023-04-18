import './team.scss'

export default function Team({ member }) {

  const icons = {
    facebook: 'https://img.icons8.com/fluent/40/000000/facebook-new.png',
    linkedin: 'https://img.icons8.com/fluent/40/000000/linkedin-circled.png',
    instagram: 'https://static.cdninstagram.com/rsrc.php/yv/r/BTPhT6yIYfq.ico',
    github: "https://img.icons8.com/dusk/40/null/github.png"
  }

  return (
    <>
      <div className="card2">
        <div className="img-bx">
          <img src={member.img} alt="img" />
        </div>
        <div className="content4">
          <div className="detail">
            <h2>{member.title1} {member.title2} </h2>
            <div className='position'>{member.post}</div>
          </div>
          <ul className="sci">
            {member.links.map(link => (
              <li key={link.to}>
                <a href={link.to}>
                  <img src={icons[link.icon]} alt="link" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}