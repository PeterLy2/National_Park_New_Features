import React from 'react';


function TuAlert(){
    return(
        <div className="TuAlert">
            <article>
                <header>
                <h1>A heading here</h1>
                </header>
            </article>
            <a class="twitter-timeline" data-height="200" data-theme="dark" href="https://twitter.com/TempleAlert?ref_src=twsrc%5Etfw">Tweets by TempleAlert</a> 
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    );
}

export default TuAlert;