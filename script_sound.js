let photoData = [
      {
        "title": "Remade Soundtrack: Ghost in the Shell",
        "link": "Ghost.html",
        "cover": "data/sd1.jpg",
      },
      {
        "title": "Remade Soundtrack: La Jetee",
        "link": "lajetee.html",
        "cover": "data/sd2.jpg",
      },
      {
        "title": "Soundscape: Siren",
        "link": "https://soundcloud.com/fridaystark/soundscape-siren?si=4d54965151404f47b5f0f302cb6babc5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "cover": "data/eye.jpg",
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