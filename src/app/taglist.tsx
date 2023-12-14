
export async function TagList() {
    const response = await fetch('https://api.mangadex.org/manga/tag');
      if (!response.ok) throw new Error("Failed to find manga tag list");
      const tagResponse = await response.json();
  
      const tagList = tagResponse.data.map((tag: { attributes: { name: { en: any; }; }; }) => {
          return tag.attributes.name.en;
      })

      const boxContent = 
            <div>
                <h4>Tags</h4>
                <button>{tagList}</button>
            </div>
  
    return boxContent
    
  }