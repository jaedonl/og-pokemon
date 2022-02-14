import { getSession } from 'next/auth/client'

const handler = async (req, res) => {
    const session = await getSession({ req: req})
    
    if (!session) {
        res.status(401).json({ error: 'un-auth user'})
    } else {
        res.stats(200).json({message: 'Success', session})
    }
}

export default handler
