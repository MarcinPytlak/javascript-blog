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

    const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles',
      optArticleTagsSelector = '.post-tags .list';
      optArticleAuthorSelector = '.post .post-author';
      optTagsListSelector = 'tags .list';
      optCloudClasCount = '5';
      optClaudClassPrefix = 'tag-size-'
  
  function generateTitleLinks(customSelector = ''){
  
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    let HTML = '';

    const articles = document.querySelectorAll(optArticleSelector + customSelector);
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
  generateTitleLinks();


function generateTags(){
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const tagsList = article.querySelector(optArticleTagsSelector);
     /* make html variable with empty string */
    let HTML = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags')
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* generate HTML of the link */
        const linkHTML = '<a href="#tag-' + tag + '">' + tag + '</a>';
        /* add generated code to html variable */
        HTML = HTML + ' ' + linkHTML;
        if(!allTags[linkHTML]) {
          allTags[linkHTML] = 1;
        } else {
          allTags[linkHTML]++;
        }
      }/* END LOOP: for each tag */
      /* insert HTML of all the links into the tags wrapper */
      tagsList.innerHTML = HTML;
  } 
  /* END LOOP: for every article: */
  const tagList = document.querySelector('.tags');
  /* [NEW] create variable for all links HTML code */
const tagsParams = calculateTagsParams(allTags);
console.log('tagsParams:', tagsParams)
let allTagsHTML = '';

/* [NEW] START LOOP: for each tag in allTags: */
for(let tag in allTags){
  /* [NEW] generate code of a link and add it to allTagsHTML */
  allTagsHTML += tag + ' (' + allTags[tag] + ') ';
}
/* [NEW] END LOOP: for each tag in allTags: */

/*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
  console.log(allTags);
}
function calculateTagsParams(tags){
  const params = {max: '0' , min: '9999'}
  for( let tag in tags) {
    console.log(tag + ' is used' + tags[tag] + 'times');
    params.max = Math.max(tags[tag], params.max);
    params.min = Math.min(tags[tag], params.min);
  }
  return params;
}

calculateTagsParams ();
/*calculateTagClass(count, params);*/
generateTags();
function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('.post .active');
  console.log(activeTags);
  /* START LOOP: for each active tag link */
    for(let activeTag of activeTags) {
      /* remove class active */
      activeTag.classList.remove('active');
    }
  /* END LOOP: for each active tag link */
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]')
  /* START LOOP: for each found tag link */
    for(let tagLink of tagLinks){
    /* add class active */
      tagLink.classList.add('active')
  /* END LOOP: for each found tag link */
}
  generateTitleLinks('[data-tags~="' + tag + '"]');
  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]')
  /* START LOOP: for each link */
  for(let tagLink of tagLinks){
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
}
}
addClickListenersToTags(); 

function generateAuthors(){
  let allAuthors = {};
  /*find all articles*/
  const articles = document.querySelectorAll(optArticleSelector);
  /*start loop*/
  for(let article of articles){
      const authorsList = article.querySelector(optArticleAuthorSelector);
      let HTML = '';
      const articleAuthor = article.getAttribute('data-author');
      const linkHTML = '<a class="author" href="#'+ articleAuthor + '">' + articleAuthor +'</a>';
      HTML = HTML + ' ' + linkHTML;
      if(!allAuthors[linkHTML]) {
        allAuthors[linkHTML] = 1;
      } else {
        allAuthors[linkHTML]++;
      }
      authorsList.innerHTML = HTML;
      const authorList = document.querySelector('.authors');
      let allAuthorsHTML = ' ';
      for(let author in allAuthors){
        allAuthorsHTML += author + '(' + allAuthors[author] + ')';
      }
      authorList.innerHTML = allAuthorsHTML;
  }
}
generateAuthors();

function authorClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const authorTag = href.replace('#' , '');
  generateTitleLinks('[data-author="' + authorTag + '"]');
}
function addClickListenersToAuthor(){
  const authorLinks = document.querySelectorAll('.author');
  for(let authorLink of authorLinks){
    authorLink.addEventListener('click', authorClickHandler)
  }
}
addClickListenersToAuthor();