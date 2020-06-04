import React, { Component } from 'react';

type Props = {
    tasks: []
}

class Tasks extends Component<Props> {

    render() {
        const { tasks } = this.props;

        return (
            tasks.map((task: { description:string }, key) => {
                return (
                    <div key={key}>
                        task.description
                    </div>
                    )
            })

        );
    }
}

export default Tasks;