import jwt from 'jsonwebtoken'

const generateJwtToken = (email: string, role: string): string => {
    const options = {expressIn: `${process.env.JWT_EXPIRES_HOURS}h`, issuer: 'comic_app'};
    try {
        return jwt.sign({email, role}, `${process.env.JWT_SECRET}`, options)
    } catch (error) {
        console.error(error);
        throw new Error('Error generating JWT token, see server logs for more details.');
    }
}

export default generateJwtToken;