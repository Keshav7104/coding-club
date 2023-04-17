import './team.css'

export default function Team({member}){

    const icons = {
        facebook: 'https://img.icons8.com/fluent/40/000000/facebook-new.png',
        linkedin: 'https://img.icons8.com/fluent/40/000000/linkedin-circled.png',
        instagram: 'https://static.cdninstagram.com/rsrc.php/yv/r/BTPhT6yIYfq.ico',
        github: "https://img.icons8.com/dusk/40/null/github.png"
      }

    return(
        <>
    <div class="card2">
      <div class="img-bx">
        <img src={member.img} alt="img" />
      </div>
      <div class="content4">
        <div class="detail">
          <h2>{member.title}<br /><span>{member.post}</span></h2>
          <ul class="sci">
            {member.links.map(link=>(
                <li key={crypto.randomUUID()}>
                    <a href={link.to}>
                        <img src={icons[link.icon]} alt="no..." />
                    </a>
                </li>
            ))}
            {/* <li>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
        </>
    )
}