import React from 'react'
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
// import { cwd } from 'process';

const Home = (props) => {
  const { data } = props.data;
  console.log(data)
  return (
    <div>
      <h1>Home</h1>
      {
        data.map((item) => {
          return <p key={item.id}><Link href={`${item.id}`}>{item.title}</Link></p>
        })
      }
    </div>

  )
}


export async function getStaticProps() {
  // const path = path.join(  ,'data','dummy-backed.json');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const fileContent = await fs.readFile(filePath);

  const data = JSON.parse(fileContent);
  return {
    props: {
      data
    },
  }
}

export default Home