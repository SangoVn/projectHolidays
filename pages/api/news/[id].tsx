import ExcuteQuery from '../../utils/dbconnect';
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) 
{

    try {
        const query = req.query;                
		
		var result = await ExcuteQuery(`select * from tbl_news where PostName='${query.id}'`);
		
			return res.status(200).json(result);
		} catch (error) {
			return res.status(404).json(error);
		}
}

