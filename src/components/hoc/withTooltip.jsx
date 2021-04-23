import React from 'react';

function withTooltip(Component) {

    return class WithTooltip extends React.Component {

        constructor(props) {
            super(props);
            console.log(this.props);
            this.state = {
              showTooltip: false,
              currentTag: 'Twitter'
            };
        }

        mouseOver = () => {
           this.setState({showTooltip: true});
        }

        mouseOut = () => {
           this.setState({showTooltip: false});
        }

        render() {
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component {...this.state} {...this.props}/>
                </div>
            )
        }
    }
}

export default withTooltip;