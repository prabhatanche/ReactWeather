var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">Who am I?</h1>
            <p>
                I am an UI Front-End Developer passionate about creating wonderful web applications for the best User Experience
                <a href = "https://www.linkedin.com/in/prabhat-anche-10467b11a">Linkedin Profile</a>
            </p>
            <p>
                Here are some of the tools and resources I used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the
                    JavaScript framework used.

                    <a href="http://openweathermap.org">API</a> - I used
                    Open Weather Map to search for weather data by city name.

                    <a href="http://foundation.zurb.com/">Styling</a> - I used
                    Foundation for styling which is good and easy to use.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;
