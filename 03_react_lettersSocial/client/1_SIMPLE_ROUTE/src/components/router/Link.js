/*
import PropTypes from 'prop-types';
import { Children, cloneElement, Component } from 'react';
import { navigate } from '../../history';

class Link extends Component{
	static propTypes = {
		to: PropTypes.string.isRequired,
    children: PropTypes.node
	}

	render(){
		const {to, children} = this.props;
		return cloneElement(Children.only(children), {
			onClick: () => navigate(to)
	});
	}
}
*/



import PropTypes from 'prop-types';
import { Children, cloneElement } from 'react';
import { navigate } from '../../history';

function Link({ to, children }) {
    return cloneElement(Children.only(children), {
        onClick: () => navigate(to)
    });
}

Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};

export default Link;


