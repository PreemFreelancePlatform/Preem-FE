import React from 'react';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import { Redirect } from 'react-router-dom';

class Dispatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			role: '',
			completed: false,
			setup: '',
			id: '',
		};
	}

	componentDidMount() {
		axiosWithAuth()
			.get('http://localhost:2019/getmyinfo')
			.then((res) => {
				this.setState(() => ({
					role: res.data.locked_role,
					setup: res.data.setup,
					id: res.data.id,
					completed: true,
				}));
			})
			.catch((err) => console.log(err.res));
	}

	// ok so this is what were gonna do.
	// put the id of the person were getting and go directly to them example customer/501
	// if we havnt completed the setup then go to customer/501/setup
	render() {
		if (this.state.completed) {
			switch (this.state.role) {
				case 'customer':
					return <Redirect to={`/customer/${this.state.id}`} />;

				case 'freelancer':
					return <Redirect to={`/freelancer/${this.state.id}`} />;

				case 'admin':
					return <Redirect to={`/admin/${this.state.id}`} />;

				default:
					return <Redirect to="/login" />;
			}
		} else {
			return null;
		}
	}
}

export default Dispatch;
