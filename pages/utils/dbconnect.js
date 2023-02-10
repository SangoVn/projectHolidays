import sql from 'mssql'

// connection configs
const config = {
    user: 'sa',
    password: 'Vnisc123$',
    server: 'daotaolaixeoto.com.vn',
    database: 'Web_NoiThatOTo',
    port: 49343,
    options: {
        instancename: 'SQLEXPRESS',
        trustedconnection: true,
        trustServerCertificate: true
    },
}

export default async function ExcuteQuery(query) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query(query);
        if(result !== undefined && result.recordsets.length >=1)
        return result.recordsets[0];        
    }
    catch (error) {
        console.log(error);
    }
}