let photoData = [
      {
        "title": "Robotron But Under The Sea",
        "link": "clonegame.html",
        "cover": "data/clonegame.png",
      },
      {
        "title": "How Memory Evolves",
        "link": "howmemoryevolves.html",
        "cover": "data/ironman.png",
      },
      {
        "title": "Agent Jellyfish",
        "link": "agentjellyfish.html",
        "cover": "data/jellyfish.png",
      },
      {
        "title": "Relieved(W.I.P.)",
        "link": "relieved.html",
        "cover": "data/relieved.png",
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