import React from 'react';
import "./responsiveAccordian.scss";

const ResponsiveAccordian = ({content}) => {

  return <div id="responsiveFooterAccordian" className='responsiveFooterAccordian'>
      <div className='desktopAccordian text-capitalize'>
        <h4 className='heading hidden-xs'>{content.title} </h4>
        <div>
            {
                content.data.map((item,index)=>{
                return <div key={index}>{item}</div>
                })
            }
        </div>
      </div>

    <div className='mobileAccordian text-capitalize'>
        <div className="accordion " id="parentTitle">
            <div className="accordion-item">
                <h4 className="accordion-button collapsed text-uppercase" id="title"  type="button" data-bs-toggle="collapse" data-bs-target={`#${content.title}`} aria-controls={content.title}>
                    {content.title}
                </h4>
                <div id={content.title} className="accordion-collapse collapse mobileCollapse " aria-labelledby="title" data-bs-parent={`#parentTitle`}>
                    
                    <div>
                        {
                            content.data.map((item,index)=>{
                            return <div key={index}>{item}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>;
};

export default ResponsiveAccordian;
