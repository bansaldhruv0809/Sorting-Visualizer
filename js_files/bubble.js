async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = '#0d6efd';
            ele[j+1].style.background = '#0d6efd';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = '#dc3545';
            ele[j+1].style.background = '#dc3545';
        }
        ele[ele.length-1-i].style.background = '#ffc107';
    }
    ele[0].style.background = '#ffc107';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    //disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    //enableNewArrayBtn();
});
