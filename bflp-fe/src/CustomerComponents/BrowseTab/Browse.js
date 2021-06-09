import React from 'react';
import { axiosWithAuth } from '../../Utils/axiosWIthAuth';
import { FreelancerCard } from './FreelancerCard';

export default class Browse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			freelancers: [],
		};
	}

	componentDidMount() {
		axiosWithAuth()
			.get('http://localhost:2019/freelancer/freelancers')
			.then((res) => {
				this.setState(() => ({ freelancers: res.data }));
			})
			.catch((err) => console.log(err.res));
	}

	render() {
		return (
			<div>
				{this.state.freelancers.map((item, index) => {
					return (
						<div key={item.id}>
							<FreelancerCard name={item.username} />
							--------------------------------------------------------
						</div>
					);
				})}
			</div>
		);
	}
}
