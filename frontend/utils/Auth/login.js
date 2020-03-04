import fetch from 'isomorphic-unfetch';

export default async function doLogin(userData) {
    const username = userData.username;
    const url = '/api/login';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });
        if (response.status === 200) {
            const { token } = await response.json();
            await login({ token });
            console.log(token);
            return { token: token, status: 'success' };
        } else {
            console.log('Login failed.');
            // https://github.com/developit/unfetch#caveats
            let error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    } catch (error) {
        console.error(
            'You have an error in your code or there are Network issues.',
            error
        );
        return error;
    }

}
