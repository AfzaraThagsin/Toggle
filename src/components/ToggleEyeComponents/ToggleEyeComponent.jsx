// // import React from 'react'
// // import './ToggleEyeComponent.css'
// // function ToggleEyeComponent() {
    
// //   return (
// //        <div className='contain'>
// //         <div className="container">
// //             <img src="https://www.svgrepo.com/show/12044/eye.svg" alt="Eye Logo"></img>
// //             <h2>Name: AFZARA THAGSIN</h2>
// //             <h3>Registration No: 123456</h3>
// //             <div className="button">
// //                 <button className="click " onClick>Show Details</button>
// //                  <p >Additional details or content can go here...</p> 
         
// //             </div>
// //         </div>
// //         </div>
       
// //   )
// // }

// // export default ToggleEyeComponent

// import React, { useState } from 'react';
// import './ToggleEyeComponent.css';

// function ToggleEyeComponent() {
//     const [showDetails, setShowDetails] = useState(false);

//     const toggleDetails = () => {
//         setShowDetails(!showDetails);
//     }

//     return (
//         // <div className='contain'>
//             <div className="container">
//                 <img src="https://www.svgrepo.com/show/12044/eye.svg" alt="Eye Logo"></img>
//                 <h2>Name: AFZARA THAGSIN</h2>
//                 <h3>Registration No: 123456</h3>
//                 <div className="button">
//                     <button className="click" onClick={toggleDetails}>
//                         {showDetails ? "Hide Details" : "Show Details"}
//                     </button>
//                 </div>
//                 {showDetails && (
//                     <div className="para">
//                         <p>Additional details or content can go here...</p>
//                     </div>
//                 )}
//             </div>
//         // </div>
//     );
// }

// export default ToggleEyeComponent;
// import React from 'react'
// import './ToggleEyeComponent.css'
// function ToggleEyeComponent() {
    
//   return (
//        <div className='contain'>
//         <div className="container">
//             <img src="https://www.svgrepo.com/show/12044/eye.svg" alt="Eye Logo"></img>
//             <h2>Name: AFZARA THAGSIN</h2>
//             <h3>Registration No: 123456</h3>
//             <div className="button">
//                 <button className="click " onClick>Show Details</button>
//                  <p >Additional details or content can go here...</p> 
         
//             </div>
//         </div>
//         </div>
       
//   )
// }

// export default ToggleEyeComponent

import React, { useState } from 'react';
import './ToggleEyeComponent.css';

function ToggleEyeComponent() {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        // <div className='contain'>
            <div className="container">
                <img src="https://www.svgrepo.com/show/12044/eye.svg" alt="Eye Logo"></img>
                <h2>Name: AFZARA THAGSIN</h2>
                <h3>Registration No: 123456</h3>
                <div className="button">
                    <button className="click" onClick={toggleDetails}>
                        {showDetails ? "Hide Details" : "Show Details"}
                    </button>
                </div>
                {showDetails && (
                        <p>Additional details or content can go here...</p>
                )}
            </div>
        // </div>
    );
}

export default ToggleEyeComponent;
