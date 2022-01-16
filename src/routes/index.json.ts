export const get = async () => {
	try {
		const base_url = process.env['BASE_URL'];
		const access_token = process.env['ACCESS_TOKEN'];
		const res = await fetch(`${base_url}movie/popular`, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				Authorization: `Bearer ${access_token}`,
				'Content-Type': 'application/json;charset=utf-8'
			}
		});
		const res_json = await res.json();
		return { status: 200, body: res_json };
	} catch (err) {
		return {
			status: 500,
			body: 'Internal server error'
		};
	}
};
