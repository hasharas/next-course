import React from 'react';

const UserPage = async () => {

  interface Users {
    id:number;
    name:string;
    website:string;
  }

  const fetchdata = await fetch('https://jsonplaceholder.typicode.com/users',
    // {cache: 'no-store'} );
    {next: {revalidate:10}});
  const datas: Users [] = await fetchdata.json(); 
  console.log("users", datas)

  

  return (
    <div className='p-4 bg-green-500'>
      <h1 className='font-green text-xs text-green-800'>user page 1</h1>

      <ul>
        {datas.map( data  => (
          <li key={data.id}>
            <p>{data.name}</p>
            <span>{data.website}</span>
          </li>
        )

        )

        }
      </ul>
    </div>
  );
}

export default UserPage;
