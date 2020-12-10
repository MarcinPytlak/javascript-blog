/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links: ', links);
});*/
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('link kliknięty');
    console.log(event)
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  console.log('clickedElement: ', clickedElement);
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
      console.log(activeArticle);
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const linkAttribute = clickedElement.getAttribute('href');
  console.log(linkAttribute);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(linkAttribute, '.posts');
  console.log(targetArticle);


  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log(targetArticle);
}

{
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  
  function generateTitleLinks(){
      console.log(generateTitleLinks);
  
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    let HTML = '';
  
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles){
        const articleID = article.getAttribute('id');
        console.log(articleID);
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        console.log(articleTitle);
        const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);
        HTML = HTML + linkHTML;

    }
    titleList.innerHTML = HTML;
    const links = document.querySelectorAll('.titles a');

    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    console.log(links);

    }
  
      /* get the article id */

  
      /* find the title element */

  
      /* get the title from the title element */
  
      /* create HTML of the link */
  
      /* insert link into titleList */
  
  }
  
  generateTitleLinks()
}
