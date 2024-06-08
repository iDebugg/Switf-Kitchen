// import React, { useState } from 'react';
// import image111 from '../img/photo 1.png'


// const StudentHover = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="image-container"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img src={image111} alt="" />
//       {hovered && (
//         <div className="overlay">
//           <h2>Mechatronics Intelligence & Technology Club (FUOYE)</h2>
//           <h4>Fostering our relationship with the whole faculty, MITC is our student body open to individuals who are interested in equipping themselves with the knowledge of various problem-solving tech skills, which includes but not limited to, embedded systems, programming, Internet of Things and more.</h4>
//         </div>
//       )}
//     </div>
//   );
// };
// export default StudentHover;

import React, { useState } from 'react';
import image111 from '../assets/img/photo 1.png';


const StudentHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="image-container"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <img src={image111} alt="" className={isHovered ? 'image-hovered' : 'image-normal'} />
      {isHovered && (
        <div className="text-overlay">
          <h2 className="MechatOverlay1">Mechatronics Intelligence & Technology Club (FUOYE)</h2>
          <h4 className='MechatOverlay'>Fostering Our Relationship With The Whole Faculty, MITC Is Our Student Body Open To Individuals Who Are Interested In Equipping Themselves With The Knowledge Of Various Problem-Solving Tech Skills, Which Includes But Not Limited To, Embedded Systems, Programming, Internet Of Things And More</h4>
        </div>
      )}
    </div>



  );
};
export default StudentHover;

