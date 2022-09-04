import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export function createAuthority(user, kurs, section, correct) {
    const token = jwt.sign({ user: user, kurs: kurs, section: section, correct: correct }, "JkoZ7hFPXOLJtCarKIiNf3lATVKbVFav");
    return token;
}

export function verifyAuthority(token) {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (err) {
        return false;
    }
}