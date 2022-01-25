export const get = async () => {
    try {
        const base_url = process.env['BASE_URL'];
        const access_token = process.env['ACCESS_TOKEN'];
        const res_popular = await fetch(`${base_url}movie/popular`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        const res_trending = await fetch(`${base_url}trending/movie/day`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        const res_popular_json = await res_popular.json();
        const res_trending_json = await res_trending.json();

        return { status: 200, body: { res_trending_json, res_popular_json } };
    } catch (err) {
        return {
            status: 500,
            body: 'Internal server error'
        };
    }
};
