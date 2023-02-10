// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ExcuteQuery from '../../utils/dbconnect';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {
    var result = await ExcuteQuery('select ID,Title,PostName from tbl_news');
        return res.status(200).json(result);
    } catch (error) {
      return res.status(200).json(error);    
    }
}
