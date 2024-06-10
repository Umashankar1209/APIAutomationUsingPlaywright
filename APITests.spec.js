import {test,expect} from '@playwright/test'
import { request } from 'http'
var userid;
test("Get users",async ({request})=>
{
  const response = await request.get('https://gorest.co.in/public/v2/users');
  console.log(await response.json());
  expect(response.status()).toBe(200);
});
test("Create users",async ({request})=>
{
   const response=await request.post('https://gorest.co.in/public/v2/users',
                                     {
                                       
                                       data:{"name":"Umashankar","email":"shankar456@gmail.com","gender":"male","status":"active"},
                                       headers:{"Accept":"application/json"}
                                     });
    console.log(await response.json());
    expect(response.status()).toBe(201);
    var res = await response.json();
    userid=res.id
});

test("Upadate users",async ({request})=>
{
   const response=await request.put('https://gorest.co.in/public/v2/users/'+userid,
                                     {
                                       
                                       data:{"name":"shankar","email":"shankarsha@gmail.com","gender":"male","status":"active"},
                                       headers:{"Accept":"application/json"}
                                     });
    console.log(await response.json());
    expect(response.status()).toBe(200);
            
});

test("Delete users",async ({request})=>
{
    await request.delete('https://gorest.co.in/public/v2/users/'+userid);    
});
            