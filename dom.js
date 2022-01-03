  
 console.log("hello world");
 const burger=document.querySelector('.burger');
 const mylinklist=document.querySelector('.mylinklist');
 const myright=document.querySelector('.right-nav');
burger.addEventListener('click',show);
function show()
{
    // mylinklist.style.display="block";
    // myright.style.display='block';
    mylinklist.classList.toggle('show-repo');
    myright.classList.toggle('show-repo');
};
$(document).ready(function()
{
    $('.search-btn').click(function()
    {
    $('.newpage').load('signup.html')
    });
});




