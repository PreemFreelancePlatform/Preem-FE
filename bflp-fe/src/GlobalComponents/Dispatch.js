// import React from 'react';
// import { axiosWithAuth } from '../Utils/axiosWIthAuth';
// import { Redirect } from 'react-router-dom';

// class Dispatch extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			role: '',
// 			completed: false,
// 			setup: '',
// 			username: '',
// 		};
// 	}

// 	componentDidMount() {
// 		axiosWithAuth()
// 			.get('http://localhost:2019/getmyinfo')
// 			.then((res) => {
// 				this.setState(() => ({
// 					role: res.data.locked_role,
// 					setup: res.data.setup,
// 					username: res.data.username,
// 					completed: true,
// 				}));
// 			})
// 			.catch((err) => console.log(err.res));
// 	}

// 	render() {
// 		if (this.state.completed) {
// 			switch (this.state.role) {
// 				case 'customer':
// 					return <Redirect to={`/customer/${this.state.username}`} />;

// 				case 'freelancer':
// 					return <Redirect to={`/freelancer/${this.state.username}`} />;

// 				case 'admin':
// 					return <Redirect to={`/admin/${this.state.username}`} />;

// 				default:
// 					return <Redirect to="/login" />;
// 			}
// 		} else {
// 			return null;
// 		}
// 	}
// }

// export default Dispatch;
