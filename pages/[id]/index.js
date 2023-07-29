import { useRouter } from 'next/router'
import React from 'react'
import fs from 'fs/promises';
import path from 'path';

const index = (props) => {
    const { filterData } = props;
    const router = useRouter();
    const { id } = router.query
    // when we use fallback blocking then don't write anything
    // if (!filterData) {
    //     return <div>Loading...</div>
    // }

    return (
        <div>
            {/* <h1>Hello Dynamic Page is {filterData.id}</h1> */}


            {/* when use fallback blocking */}
            <h1>Hello Dynamic Page is  {id} ... </h1>

        </div>
    )
}

async function getData() {

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const fileContent = await fs.readFile(filePath);

    const dataHolder = JSON.parse(fileContent);
    return dataHolder;
}



export async function getStaticProps(context) {
    const { params } = context;
    const id = params.id;

    const dataHolder = await getData();
    const data = dataHolder.data;

    const filterData = data.find(item => item.id === id);
    return {
        props: {
            filterData
        },
    }
}


export async function getStaticPaths() {

    const data = await getData();
    const ids = data.map(id => id);
    const pathsWithParams = ids.map(id => ({ params: { id } }));

    return {
        paths: pathsWithParams,
        // fallback: true
        fallback: 'blocking',

    }
}


export default index