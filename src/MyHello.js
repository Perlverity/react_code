import PropTypes from "prop-types";

function MyHello({myName}) {
    return (
        <div>Hello, {myName} !</div>
    );
}

MyHello.propTypes = {
    myName: PropTypes.string.isRequired
};

export default MyHello;