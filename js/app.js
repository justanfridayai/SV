let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
    resetAutoSlider();
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
    resetAutoSlider();
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}



// Auto slider functionality
let autoSliderInterval = setInterval(() => {
    moveSlider('next');
}, 3000); // Change 3000 to whatever interval you want in milliseconds

// Reset auto slider when user interacts with buttons
function resetAutoSlider2() {
    clearInterval(autoSliderInterval);
    autoSliderInterval = setInterval(() => {
        moveSlider('next');
    }, 3000); // Same interval as above
}







// Optional: Add event listeners to pause the auto slider on hover and resume on mouse leave
slider.addEventListener('mouseover', () => {
    clearInterval(autoSliderInterval);
});

slider.addEventListener('mouseout', () => {
    autoSliderInterval = setInterval(() => {
        moveSlider('next');
    }, 2000);
});


