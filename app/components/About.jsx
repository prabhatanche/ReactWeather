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
var {Link} = require('react-router');

var About = (props)=>{
    return(
      <div>
        <h1 className="text-center">About The App</h1>
        <p>Here are few locations to try out!!!</p>
        <ol>
          <li>
            <Link to='/?location=New Jersey'>New Jersey, NJ</Link>
          </li>
          <li>
            <Link to='/?location= Hyderabad'>Hyderabad, HYD(IND)</Link>
          </li>
        </ol>
      </div>
    );
  }

module.exports =About;
