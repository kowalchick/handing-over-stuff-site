const API_URL = 'http://localhost:3000';

export const fetchWhoWeHelpData = () => {
    const whoWeHelpURL = `${API_URL}/whoWeHelp`;
    return fetch(whoWeHelpURL).then(response => response.json());
};