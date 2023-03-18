import axios from 'axios';

const URL_BASE = 'https://api.github.com/repos/';

async function handler(req: any, res: any){
    const { owner, repo } = req.query;
    const { data } = await axios.get(`${URL_BASE}${owner}/${repo}/issues`);
    res.status(200).json(data);
};

export default handler;