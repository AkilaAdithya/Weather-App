var React = require('react');

var About = (props)=>{
    return(
      <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is simple Weather App build on React. I build this to complete
       the React web App Developer Course.</p>

       <p>Here are some of the tools I used:</p>

       <ul>
        <li><a href="#">React</a> - This was the javaScript framework used</li>
        <li><a href="#">Open Weather Map</a> - This API used to search weather by city name.</li>
       </ul>
      </div>
    );
};

module.exports=About;
