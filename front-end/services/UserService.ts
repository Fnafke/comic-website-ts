
// TOKEN
const getToken = () => {
    return JSON.parse(localStorage.getItem('loggedInUser') as string)?.token;
}

// GET
const getUserByEmail = async(email: string) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/users/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error getting user by email: ' + error);
    }
}


// POST

const createUser = async(username: string, email: string, password: string) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password})
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating user: ' + error);
    }
}

const logIn = async(email: string, password: string) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating user: ' + error);
    }
}

export default {
    createUser,
    getUserByEmail,
    logIn
}