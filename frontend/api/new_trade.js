import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
    const { currentUser } = await req.body;
    const url = `https://api.github.com/users/jjmacakiage`; //INSERT SERVICE LAYER URL HERE with current user as query parameter e.g. api.ourApi.com/?id=${currentUser}

    try {
        const response = await fetch(url);
        if (response.ok) {
            const { counterpartyList } = await response.json();
            return res.status(200).json({ counterpartyList: counterpartyList });
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    } catch (error) {
        const { response } = error;
        return response
            ? res.status(response.status).json({ message: response.statusText })
            : res.status(400).json({ message: error.message })
    }
};
