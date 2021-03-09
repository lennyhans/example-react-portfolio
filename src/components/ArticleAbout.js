import React from 'react';

class ArticleAbout extends React.Component{

    render(){
        const self = this.props;
        return self.paragraphs.map((paragraph, i) => {
            const content = 
              <div key={i} className={`w3-col m6 w3-padding-large ${paragraph.showMobile && "w3-hide-small" } `}>
                <p>{paragraph.text}</p>
              </div>;
            
            return (
              i === 0 ? 
              <div key={i}>
              <p>{paragraph.text}</p>
              <div className="w3-col m6 w3-center w3-padding-large">
              <p><b><i className="fa fa-user w3-margin-right"></i></b>{self.avatar.caption}</p><br/>
              <img 
                src={self.avatar.photo} 
                className="w3-round w3-image w3-opacity w3-hover-opacity-off" 
                alt="My avatar" width="500" height="333"/>
              </div> </div>: 
              content );
            });
    }
}

export default ArticleAbout;