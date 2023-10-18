'use strict'

const chip1 = document.querySelector('.chip1');
let myPhoto = document.querySelector('.my-photo');

chip1.addEventListener('mouseenter', () => {
    myPhoto.src = './images/honor-guard.jpg'; // Change the image source on hover over .chip1
    myPhoto.style.transform = 'scale(1)'; // Scale up the image on hover over .chip1
    myPhoto.style.transition = 'transform 2s ease'; // Add a transition for smooth scaling
});

chip1.addEventListener('mouseleave', () => {
    myPhoto.src = './images/codeup-photo1 copy.jpg'; // Restore the original image source when the mouse leaves .chip1
    myPhoto.style.transform = 'scale(1)'; // Reset the scale to its original size
});

const chip2 = document.querySelector('.chip2');
myPhoto = document.querySelector('.my-photo');

chip2.addEventListener('mouseenter', () => {
    myPhoto.src = './images/amu-mascot.jpeg'; // Change the image source on hover over .chip1
    myPhoto.style.transform = 'scale()'; // Scale up the image on hover over .chip1
    myPhoto.style.transition = 'transform 2s ease'; // Add a transition for smooth scaling
});

chip2.addEventListener('mouseleave', () => {
    myPhoto.src = './images/codeup-photo1 copy.jpg'; // Restore the original image source when the mouse leaves .chip1
    myPhoto.style.transform = 'scale(1)'; // Reset the scale to its original size
});

const chip3 = document.querySelector('.chip3');
myPhoto = document.querySelector('.my-photo');

chip3.addEventListener('mouseenter', () => {
    myPhoto.src = './images/codeup-alum.jpg'; // Change the image source on hover over .chip1
    myPhoto.style.transform = 'scale(1)'; // Scale up the image on hover over .chip1
    // myPhoto.style.paddingLeft = '5px'; // Adjust the desired margin-left
    // myPhoto.classList.add('zoomed'); // Apply zoom effect on hover over .chip1
    myPhoto.style.transition = 'transform 2s ease'; // Add a transition for smooth scaling
});

chip3.addEventListener('mouseleave', () => {
    myPhoto.src = './images/codeup-photo1 copy.jpg'; // Restore the original image source when the mouse leaves .chip1
    myPhoto.style.transform = 'scale(1)'; // Reset the scale to its original size
});