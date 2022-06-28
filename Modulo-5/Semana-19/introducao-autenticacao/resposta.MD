1.a <br>
sim pois deixa a aplicação mais segura contra invasores.<br>
1.b
```
export default class BaseDataBase {
protected static connection = knex({
	client: "mysql",
	connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
        }
    });
}

```
2.a<br>
Estabelece uma conexão com o banco de dados e insere dados na tabela User<br>
2.b<br>
```
CREATE TABLE User (
    id VARCHAR(255)  PRIMARY KEY UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL 
)
```
2.c<br>
```
export default class User extends BaseDataBase{
    public createUser = async (id: string, email: string, password: string) => {
        await BaseDataBase.connection('User')
        .insert({id,email,password,})
    };
}
```
3.a<br>
a variavel que guarda a chave de decodificação pod estar preenchida ou não, isso deixa o typecript inseguro<br>
o 'as string' diz para o typescript que garantimos que ela está prenchida.<br>
```
export default class Authentication {
    public generateToken = (id: AuthenticationData):string => {
        const token = jwt.sign(
        {
            id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: '1m'
        }
        );
        return token;
    }
}
export type AuthenticationData = {
    id: string;
}
```
7.a<br>
porque o resultado do que esta contido no token pode ser qualquer coisa<br>
7.b
```
getTokenData = (token:string):AuthenticationData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as any
        return {id:data.id}
    }
```
8.a
```
getBYId = async (id:string):Promise<UserType[] | []> => {
        try {
            const result =  await BaseDataBase.connection('User')
            .select('*')
            .where({id})
            return result
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }
```
8.b

