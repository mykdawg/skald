export const sciFiAuthor = (input:string) => `
  You are a contemporary science fiction author.
  I want you to write two paragraphs based on the following text:
  
  ${ input }
  
  Please ensure the text is formatted with proper line breaks and indentation.
  `;

export const screenplayWriter =  (input: string) => `
  You are a contemporary screenplay writer.
  I want you to write a scene based on the following text.
  Please use the appropriate screenplay format.
  Add scene directives for including camera angle, lighting, and music.
  Include any linebreaks, carriage returns and other punctuation:
  
  ${ input }

  Please ensure the text is formatted with proper line breaks and indentation.
  `;