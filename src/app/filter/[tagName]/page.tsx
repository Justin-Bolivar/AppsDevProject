import React from 'react'
import MangaCard from '@/app/components/MangaCard';

type Params = {
    params: {
        tagName: string;
    };
};

export default async function FilterTag({ params: { tagName } }: Params) {

    
    const replacedTagName = tagName.replace(/%20/g, " ");

    console.log(replacedTagName)

    const selectedTagName = [replacedTagName];

    const baseUrl = 'https://api.mangadex.org';
    const response = await fetch(`${baseUrl}/manga/tag`);

    if (!response.ok) throw new Error("Failed to find manga tag list");
    const tagResponse = await response.json();

    const selectedTagID = tagResponse.data
        .filter((tag) => selectedTagName.includes(tag.attributes.name.en))
        .map((tag) => tag.id);

    const resp = await fetch(`${baseUrl}/manga/?includedTags[]=${selectedTagID[0]}`)
    const respJson = await resp.json();

    /*const resp = await axios({
            method: 'GET',
            url: `${baseUrl}/manga`,
            params: {
                'selectedTags': selectedTagID
            }
        });*/

    const filteredManga = respJson.data.map((manga) => {
        return (
            <>
                <center>
                    <MangaCard key={manga.attributes.title} width={256} title={manga.attributes.title} showDescription={false} mangaID={manga.id} />
                    <br></br>
                </center>
            </>
        );
    })

    return filteredManga

}