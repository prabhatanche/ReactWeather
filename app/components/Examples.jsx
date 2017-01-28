// var React = require('react');
//
// var Examples = React.createClass({
//   render: function(){
//     return(
//       <h3>Examples component</h3>
//     );
//   }
// });
//
// module.exports = Examples;

var React = require('react');
var {Link} = require('react-router');
var Examples = (props)=>{
    return(
      <div>
        <h1 className="text-center">Examples</h1>
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

module.exports = Examples;
