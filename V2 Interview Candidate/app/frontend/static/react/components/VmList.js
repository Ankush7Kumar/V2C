// VmList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VmList = () => {
	const [vms, setVms] = useState([]);
	useEffect(() => {axios.get('/api/vms/')
		.then(response => {
			console.log("Data fetched:", response.data); // Debugging statement
			setVms(response.data);
		})
		.catch(error => {
			console.error('There was an error fetching the VM data!', error);
		});
	}, []);

	console.log("VMs state:", vms); // Debugging statement
	return (
	<div>
		<h1>VM List</h1>
		<table border="1" cellPadding="5" cellSpacing="0">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>CPU's</th>
					<th>Ram</th>
					<th>Active</th>
					</tr>
					</thead>
					<tbody>
						{vms.map(vm => (
							<tr key={vm.id}>
								<td>{vm.id}</td>
								<td>{vm.name}</td>
								<td>{vm.cpus}</td>
								<td>{vm.ram}</td>
								<td>{vm.active}</td>
								</tr>
						))}
					</tbody>
				</table>
			</div>
	);
};

export default VmList;