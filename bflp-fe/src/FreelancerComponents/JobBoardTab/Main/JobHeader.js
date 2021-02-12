import React from 'react';
import { SortJobs } from './SortJobs';
import { FilterJobs } from './FilterJobs';
import '../styles/FreelancerStyles/Job-Board/JobHeader.css';
import { BudgetFilter } from './BudgetFilter';
import { Searchjobs } from './Searchjobs';

export const JobHeader = ({ sortby, totaljobs, setSortby, filteroptions, setFilteroptions }) => {
	return (
		<div className="job-header">
			<div className="header-sort">
				<h1 className="h12">Job Listings</h1>
				<p>{`(${totaljobs} Total)`}</p>
				<SortJobs sortby={sortby} setSortby={setSortby} />
				<Searchjobs />
			</div>
			<div className="tools">
				<FilterJobs filteroptions={filteroptions} setFilteroptions={setFilteroptions} />
				<BudgetFilter setFilteroptions={setFilteroptions} filteroptions={filteroptions} />
			</div>
		</div>
	);
};
