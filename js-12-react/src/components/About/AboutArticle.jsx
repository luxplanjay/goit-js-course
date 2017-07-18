import React from 'react';

const articles = [
  {
    id: 'team',
    title: 'About team',
    text: 'Team stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis illum sed tempora ullam? Asperiores deserunt distinctio eveniet, ex excepturi exercitationem illum incidunt magnam quo recusandae. Asperiores doloremque facilis ipsum.'
  },
  {
    id: 'company',
    title: 'About company',
    text: 'Company stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis illum sed tempora ullam? Asperiores deserunt distinctio eveniet, ex excepturi exercitationem illum incidunt magnam quo recusandae. Asperiores doloremque facilis ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis illum sed tempora ullam? Asperiores deserunt distinctio eveniet, ex excepturi exercitationem illum incidunt magnam quo recusandae. Asperiores doloremque facilis ipsum.'
  },
  {
    id: 'contacts',
    title: 'About contacts',
    text: 'Contacts stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis illum sed tempora ullam? Asperiores deserunt distinctio eveniet, ex excepturi exercitationem illum incidunt magnam quo recusandae. Asperiores doloremque facilis ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis illum sed tempora ullam? Asperiores deserunt distinctio eveniet, ex excepturi exercitationem illum incidunt magnam quo recusandae. Asperiores doloremque facilis ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis illum sed tempora ullam? Asperiores deserunt distinctio eveniet, ex excepturi exercitationem illum incidunt magnam quo recusandae. Asperiores doloremque facilis ipsum.'
  }
];

function AboutArticle({match}) {
  // const article = articles.filter((article) => article.id === match.params.topic)[0];

  return (
    <article className="card-panel z-depth-3">
      <h3>qweqwe</h3>
      <p>qweqweqwe</p>
    </article>
  );
}

export default AboutArticle;
