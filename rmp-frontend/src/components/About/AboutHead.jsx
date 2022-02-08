import { Jumbotron } from 'react-bootstrap';

const AboutHead = () => {
    return (
        <div>
            <h1 className="my-4">About</h1>
            <Jumbotron>
                <h3>
                    Rate My Politician allows you to see how politicans are
                    being covered in the media.
                </h3>
                <p>
                    Our site gathers information about news sources, states, and
                    politicians across the United States so that voters and
                    residents can learn how their state or representatives are
                    being covered in different forms of media, including in news
                    articles and on twitter.
                </p>
            </Jumbotron>
        </div>
    );
};

export default AboutHead;
