/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    
});*/
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */
  const linkAttribute = clickedElement.getAttribute('href');
  

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(linkAttribute, '.posts');
 
  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
}
{
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  
  function generateTitleLinks(){
  
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    let HTML = '';

    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles){
        const articleID = article.getAttribute('id');
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
        HTML = HTML + linkHTML;
        /*titleList.insertAdjacentHTML('afterend', linkHTML);*/
    }
    titleList.innerHTML = HTML;
    const links = document.querySelectorAll('.titles a');

    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }
  }
  generateTitleLinks()
}
