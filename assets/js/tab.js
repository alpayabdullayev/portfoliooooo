let tabs = document.querySelectorAll('.tab-item'),
    tabContent = document.querySelectorAll('.tabcontent'),
    tabParent = document.querySelector('.tab-items');

function hideTab() {
    tabContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade' ,'zoom');
    });

    tabs.forEach(item => {
        item.classList.remove('active-2');
    });
}

hideTab();

function showTab(i = 0) {
    tabContent[i].classList.add('show', 'fade' ,'zoom');
    tabContent[i + 4].classList.add('show', 'fade' ,'zoom');
    tabContent[i].classList.remove('hide');
    tabContent[i + 4].classList.remove('hide');
    tabs[i].classList.add('active-2');
}

showTab();

tabParent.addEventListener('click', e => {
    const target = e.target;
    console.log(target);
    if(target && target.classList.contains('tab-item')) {
        tabs.forEach((item, i) => {
            if ( target == item) {
                hideTab();
                showTab(i);
            }
        });
    }
});