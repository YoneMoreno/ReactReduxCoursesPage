import React from 'react';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: null},
        };
    }

    render() {
        return (
            <div>
                <h1>Administration courses</h1>
            </div>
        );
    };
};

export default CoursesPage;