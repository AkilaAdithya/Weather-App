var React = require('react');
var{Link} = require('react-router');
var Examples =(props)=>{
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p className="text-center">Hera are few example locations to try out:</p>
      <ul>
        <li>
            <Link to='/?location=Colombo'>Colombo, Sri Lanka</Link>
        </li>
        <li>
            <Link to='/?location=Mumbai'>Mumbai, India</Link>
        </li>
      </ul>
    </div>
  );
};

module.exports = Examples;
