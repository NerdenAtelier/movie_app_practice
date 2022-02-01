import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
    }

    render() {
        return <span>Hello</span>
    }
}

export default Detail