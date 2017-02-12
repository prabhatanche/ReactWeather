// var React = require('react');
//
// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About component</h3>
//     );
//   }
// });
//
// module.exports =About;

var React = require('react');

var About = (props)=>{
    return(
      <div>
        <h1 className="text-center">Who am I?</h1>
        <p>
          I am a Front-End UI developer who is passionate about creating wonderful webpage for all customers like to have a best visual experience and smooth transition with in the webpage.
          <a href = "https://www.linkedin.com/in/prabhat-anche-10467b11a">linkedin</a> - This is my Linkedin Profile
        </p>
        <p>
           This is my sample work for demonstrating my skills related to React.js.
           
        </p>
        <p>
          I mentioned few links which I used to create this website and from which I learnt.
        </p>
        <ul>
          <li>
            <a href = "https://facebook.github.io/react">React</a> - Javascript framework Used
          </li>
          <li>
            <a href = "http://openweathermap.org/">API</a>
          </li>
          <li>
            <a href = "http://foundation.zurb.com/">Styling</a>
          </li>
        </ul>
      </div>
    )
  };

module.exports =About;
