import React, { useEffect } from 'react';
import './Style/twitter.css'

function TuAlert() {
   useEffect(() => {
       const script = document.createElement('script');
       script.src = "https://platform.twitter.com/widgets.js";
       script.async = true;
       document.body.appendChild(script);
   }, []); 


   return (
       <div className="TuAlert">
           <article>
               <header>
                   <h1>A heading here</h1>
               </header>
           </article>
           <a class="twitter-timeline" data-height="200" data-width="500" data-theme="dark" href="https://twitter.com/TempleAlert?ref_src=twsrc%5Etfw">Tweets by TempleAlert</a>
       </div>
   );
}

export default TuAlert;