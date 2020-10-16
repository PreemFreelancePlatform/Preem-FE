import React from 'react';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import { Job } from './Job';

export default class JobBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
		};
	}

	componentDidMount() {
		axiosWithAuth()
			.get('http://localhost:2019/customer/post/posts')
			.then((res) => {
				this.setState(() => ({ jobs: res.data }));
			})
			.catch((err) => console.log(err.res));
	}

	render() {
		return (
			<div>
				{this.state.jobs.map((item, index) => {
					return (
						<div key={item.postid}>
							<Job name={item.name} info={item.description} tech={item.tech} id={item.postid} />
							--------------------------------------------------------
						</div>
					);
				})}
			</div>
		);
	}
}
