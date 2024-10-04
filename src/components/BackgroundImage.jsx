import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function BackgroundImage(){
    return(
         <>
        
        <div id="background">
             <Carousel >
              
              
                  <img src="https://cdn.pixabay.com/photo/2015/03/27/20/41/course-695163_1280.jpg" alt="immg" className="imgss"/>
                
           
         
                  <img src="https://cdn.pixabay.com/photo/2016/04/15/14/07/sunset-1331088_960_720.jpg" alt="imggg"className="imgss"/>
                 
           
             
                  <img src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg" alt="imggg" className="imgss"/>
                 
              
          </Carousel>
        </div>
        <div class="para">
            <h2 >"Unlock a universe of visuals. Search millions of images tailored for you."</h2>
        </div>
        </>
    )

}
export default BackgroundImage;