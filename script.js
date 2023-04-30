let photoData = [
      {
        "title": "Nightlife in Shanghai",
        "link": "shanghai.html",
        "cover": "data/video.png",
      },
      {
        "title": "Waving Production",
        "link": "WavingProduction.html",
        "cover": "data/WAVING/3.JPG",
      },
      {
        "title": "Blasphemy",
        "link": "Blasphemy.html",
        "cover": "data/photography/DAVID/1.jpg",
      },
      {
        "title":"Looking Through",
        "link": "LookingThrough.html",
        "cover": "data/photography/LT/3.jpg",
      }
    ];


function displayPhotoGallery() {
  photoGallery = document.getElementById('photoGallery');

  for (const photoProject of photoData) {

    const photoLink = document.createElement('a');
    photoLink.href = photoProject.link;

    const photoContainer = document.createElement('div');
    photoContainer.className = 'photo-container';
    photoLink.appendChild(photoContainer);

    const photoThumbnail = document.createElement('img');
    photoThumbnail.src = photoProject.cover;
    photoThumbnail.className = 'photo-thumbnail';
    photoLink.appendChild(photoThumbnail);

    const photoTitle = document.createElement('div');
    photoTitle.textContent = photoProject.title;
    photoTitle.className = 'photo-overlay'; //overlay title
    photoLink.appendChild(photoTitle);


    photoGallery.appendChild(photoLink);
  }
}


displayPhotoGallery();